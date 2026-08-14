const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const root = __dirname;
const port = Number(process.env.PORT || 8123);
const pythonExe = process.env.PYTHON_EXE || "python";
const dataPath = process.env.DATA_PATH
  ? path.resolve(process.env.DATA_PATH)
  : path.join(root, "data", "control-presupuestario.json");
const dataDir = path.dirname(dataPath);
const backupCsvPath = process.env.BACKUP_CSV_PATH || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
}

async function readSharedData() {
  try {
    const raw = await fs.promises.readFile(dataPath, "utf8");
    return JSON.parse(raw.replace(/^\uFEFF/, ""));
  } catch {
    return null;
  }
}

async function writeSharedData(payload) {
  await fs.promises.mkdir(dataDir, { recursive: true });
  const current = await readSharedData() || {};
  const mergeArrayByKey = (sharedItems, incomingItems, keyFn) => {
    const map = new Map();
    (Array.isArray(sharedItems) ? sharedItems : []).forEach((item) => map.set(keyFn(item), item));
    (Array.isArray(incomingItems) ? incomingItems : []).forEach((item) => map.set(keyFn(item), item));
    return [...map.values()];
  };
  const cleanKey = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
  const expenseKey = (item) => `${cleanKey(item.docType)}|${cleanKey(item.docNumber)}|${cleanKey(item.vendor)}|${item.initiativeId}|${item.month}|${item.amount}`;
  const projectionKey = (item) => String(item.id || `${item.provider}|${item.initiativeId}|${item.startMonth}|${item.endMonth}|${item.monthlyAmount}`).toLowerCase();
  const providerKey = (item) => `${cleanKey(item.name)}|${cleanKey(item.employee)}`;
  const data = {
    updatedAt: new Date().toISOString(),
    expenses: payload.replaceExpenses
      ? (Array.isArray(payload.expenses) ? payload.expenses : [])
      : mergeArrayByKey(current.expenses, payload.expenses, expenseKey),
    projections: payload.replaceProjections
      ? (Array.isArray(payload.projections) ? payload.projections : [])
      : mergeArrayByKey(current.projections, payload.projections, projectionKey),
    projectionGrid: payload.replaceProjectionGrid
      ? (payload.projectionGrid && typeof payload.projectionGrid === "object" ? payload.projectionGrid : {})
      : {
        ...(current.projectionGrid && typeof current.projectionGrid === "object" ? current.projectionGrid : {}),
        ...(payload.projectionGrid && typeof payload.projectionGrid === "object" ? payload.projectionGrid : {}),
      },
    projectionPaidGrid: payload.replaceProjectionGrid
      ? (payload.projectionPaidGrid && typeof payload.projectionPaidGrid === "object" ? payload.projectionPaidGrid : {})
      : {
        ...(current.projectionPaidGrid && typeof current.projectionPaidGrid === "object" ? current.projectionPaidGrid : {}),
        ...(payload.projectionPaidGrid && typeof payload.projectionPaidGrid === "object" ? payload.projectionPaidGrid : {}),
      },
    noPaymentGrid: payload.replaceNoPaymentGrid
      ? (payload.noPaymentGrid && typeof payload.noPaymentGrid === "object" ? payload.noPaymentGrid : {})
      : {
        ...(current.noPaymentGrid && typeof current.noPaymentGrid === "object" ? current.noPaymentGrid : {}),
        ...(payload.noPaymentGrid && typeof payload.noPaymentGrid === "object" ? payload.noPaymentGrid : {}),
      },
    providers: payload.replaceProviders
      ? (Array.isArray(payload.providers) ? payload.providers : [])
      : mergeArrayByKey(current.providers, payload.providers, providerKey),
    budgets: payload.budgets && typeof payload.budgets === "object"
      ? payload.budgets
      : (current.budgets && typeof current.budgets === "object" ? current.budgets : {}),
  };
  await fs.promises.writeFile(dataPath, JSON.stringify(data, null, 2), "utf8");
  return data;
}

function localNetworkAddress() {
  const interfaces = os.networkInterfaces();
  for (const addresses of Object.values(interfaces)) {
    for (const address of addresses || []) {
      if (address.family === "IPv4" && !address.internal) return address.address;
    }
  }
  return "localhost";
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function extractPdfs(payload) {
  return new Promise((resolve, reject) => {
    const child = spawn(pythonExe, [path.join(root, "extract_pdfs.py")], {
      cwd: root,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk.toString("utf8"); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString("utf8"); });
    child.on("close", (code) => {
      if (code !== 0) reject(new Error(stderr || `Extractor terminó con código ${code}`));
      else resolve(stdout);
    });
    child.stdin.end(JSON.stringify(payload));
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "POST" && req.url === "/api/extract-pdfs") {
      const body = await readBody(req);
      const result = await extractPdfs(JSON.parse(body));
      send(res, 200, result, "application/json; charset=utf-8");
      return;
    }

    if (req.method === "GET" && req.url === "/api/shared-data") {
      const data = await readSharedData();
      send(res, 200, JSON.stringify({
        exists: Boolean(data),
        data,
      }), "application/json; charset=utf-8");
      return;
    }

    if (req.method === "GET" && req.url.startsWith("/shared-data.js")) {
      const data = await readSharedData();
      send(
        res,
        200,
        `window.__CONTROL_SHARED_DATA__ = ${JSON.stringify(data || null)};`,
        "text/javascript; charset=utf-8"
      );
      return;
    }

    if (req.method === "POST" && req.url === "/api/shared-data") {
      const body = await readBody(req);
      const data = await writeSharedData(JSON.parse(body || "{}"));
      send(res, 200, JSON.stringify({ ok: true, data }), "application/json; charset=utf-8");
      return;
    }

    if (req.method === "GET" && req.url === "/api/latest-backup-csv") {
      if (!backupCsvPath) {
        send(res, 404, "No hay ruta de respaldo CSV configurada.");
        return;
      }
      const csv = await fs.promises.readFile(backupCsvPath, "utf8");
      send(res, 200, csv, "text/csv; charset=utf-8");
      return;
    }

    const urlPath = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
    const fileName = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
    const safePath = path.resolve(root, fileName);
    if (!safePath.startsWith(path.resolve(root))) {
      send(res, 403, "Forbidden");
      return;
    }
    const data = await fs.promises.readFile(safePath);
    send(res, 200, data, mimeTypes[path.extname(safePath)] || "application/octet-stream");
  } catch (error) {
    send(res, 404, error.message || "Not found");
  }
});

server.listen(port, "0.0.0.0", () => {
  const networkHost = process.env.PUBLIC_HOST || localNetworkAddress();
  console.log(`Sistema disponible en http://127.0.0.1:${port}/`);
  console.log(`Para la red local usa http://${networkHost}:${port}/`);
});
