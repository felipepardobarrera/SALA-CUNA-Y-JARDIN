const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function newId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

const INITIATIVES = [
  {
    id: "jardin",
    shortName: "JardÃ­n infantil",
    name: "Servicio de jardÃ­n infantil para funcionarias/os de la Agencia",
    account: "22.08.008",
    management: "Compra",
    monthlyBudget: [0, 3292810, 389948, 780646, 979965, 3585000, 1604000, 1604000, 1604000, 2104000, 2404000, 2704000],
  },
  {
    id: "sala-cuna",
    shortName: "Sala cuna",
    name: "Beneficio de sala cuna para funcionarias/os de la Agencia",
    account: "22.08.008",
    management: "Compra",
    monthlyBudget: [0, 874100, 465855, 1751036, 876518, 2072000, 1800000, 2250000, 2250000, 1800000, 1800000, 1350000],
  },
  {
    id: "monto-directo",
    shortName: "Monto directo sala cuna",
    name: "Entregar el derecho de sala cuna mediante un monto en dinero que se entrega directamente a la persona de acuerdo a la normativa.",
    account: "22.08.008",
    management: "Autoriza pago",
    monthlyBudget: [357000, 499800, 178500, 785400, 3010700, 2565000, 1428000, 1428000, 1428000, 1142000, 1071000, 1071000],
  },
];

const DEFAULT_BUDGETS = Object.fromEntries(INITIATIVES.map((item) => [item.id, [...item.monthlyBudget]]));

const DEFAULT_PROVIDERS = [
  { type: "JARDÃN INFANTIL", name: "LOYOLA Y HERNANDEZ LIMITADA", email: "jardinkoala@yahoo.es", f30: "2026 marzo (se puede solicitar en abril)", po: "721703-229-SE24", caseId: "74280", employee: "Cecilia Sanhueza", endDate: "2026-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "SOCIEDAD EDUCACIONAL UPITA SPA", email: "hola@jardininfantilupita.cl", f30: "agosto 2025 y febrero 2026 / agosto 2026", po: "721703-38-SE24", caseId: "69088", employee: "MarÃ­a Teresa CortÃ©s", endDate: "2026-02-28", status: "No vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "Sala Cuna y JardÃ­n Infantil MÃ¡gica Infancia Ltda.", email: "directora@magicainfancia.cl", f30: "marzo y septiembre 2026", po: "721703-349-SE24", caseId: "79076", employee: "Daniela Gonzalez Rioseco", endDate: "2026-01-31", status: "No vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "SANDRA GABRIELA OSORIO PÃ‰REZ", email: "info.jardinseminario@gmail.com", f30: "marzo y septiembre 2026", po: "721703-568-SE24", caseId: "83545", employee: "Daniella Ducci Hagar", endDate: "2026-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "CORPORACIÃ“N EDUCACIONAL CHARLIE BRAWN LTDA", email: "daniela.aranda@charlie-brown.cl / administracion@charlie-brown.cl", f30: "diciembre 2025, junio y noviembre 2026", po: "721703-712-SE24", caseId: "90111", employee: "Karen Torres Castillo", endDate: "2026-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "SOCIEDAD EDUCACIONAL COLIBRI LIMITADA", email: "lareina@atamari.cl", f30: "marzo y septiembre", po: "721703-591-SE24", caseId: "85263", employee: "Felipe Valencia", endDate: "2026-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "VTM - E. BARRIENTOS - VTM", email: "rommy.valderrama@vitamina.cl", f30: "", po: "721703-79-SE25", caseId: "99106", employee: "Elizabeth Barrientos", endDate: "2026-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "VTM - V. MONREAL", email: "rommy.valderrama@vitamina.cl", f30: "", po: "721703-79-SE25", caseId: "99106", employee: "VÃ­ctor Monreal Atenas", endDate: "2027-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "VTM - N. SEPULVEDA", email: "rommy.valderrama@vitamina.cl", f30: "", po: "721703-79-SE25", caseId: "99106", employee: "Nestor SepÃºlveda", endDate: "2027-12-31", status: "Vigente", notes: "" },
  { type: "JARDÃN INFANTIL", name: "VTM - K. SALINAS", email: "rommy.valderrama@vitamina.cl", f30: "", po: "721703-79-SE25", caseId: "99106", employee: "Karen Salinas Opazo", endDate: "2027-12-31", status: "Vigente", notes: "" },
  { type: "Sala Cuna", name: "VTM - M. BADER", email: "rommy.valderrama@vitamina.cl", f30: "", po: "721703-79-SE25", caseId: "99106", employee: "Millicent Bader", endDate: "2026-07-31", status: "Vigente", notes: "" },
  { type: "Sala Cuna", name: "CGR - D. C", email: "abeizaca@contraloria.cl", f30: "", po: "", caseId: "99464", employee: "Denisse Cardenas", endDate: "2026-11-30", status: "Vigente", notes: "" },
  { type: "Sala Cuna", name: "CGR - M. O", email: "abeizaca@contraloria.cl", f30: "", po: "", caseId: "105137", employee: "Marcela Oyaneder", endDate: "2026-09-30", status: "Vigente", notes: "" },
  { type: "MONTO DIRECTO SALA CUNA", name: "EXCEP. Y.Q", email: "", f30: "", po: "", caseId: "", employee: "Yeniffer Quijada", startDate: "2025-12-16", endDate: "2026-10-06", status: "Vigente", notes: "" },
  { type: "MONTO DIRECTO SALA CUNA", name: "EXCEP. C.A", email: "", f30: "", po: "", caseId: "", employee: "Carmen Astudillo", startDate: "2024-11-14", endDate: "2026-02-12", status: "No vigente", notes: "" },
  { type: "MONTO DIRECTO SALA CUNA", name: "EXCEP. L.I.B", email: "", f30: "", po: "", caseId: "", employee: "Loreto IbaÃ±ez Morales", startDate: "2026-03-26", endDate: "2027-07-31", status: "Vigente", notes: "" },
  { type: "MONTO DIRECTO SALA CUNA", name: "EXCEP. C.V.A", email: "", f30: "", po: "", caseId: "", employee: "Cynthia Villablanca Agurto", startDate: "2026-04-15", endDate: "2027-10-24", status: "Vigente", notes: "" },
  { type: "MONTO DIRECTO SALA CUNA", name: "EXCEP. C.G.L", email: "", f30: "", po: "", caseId: "", employee: "Carla Gaete Lopez", startDate: "2026-05-05", endDate: "2027-04-30", status: "Vigente", notes: "" },
].map((item) => ({ id: newId(), ...item }));

const PROJECTION_SCENARIO_PROVIDERS = [
  { id: "scenario-jardin-1", type: "JARDÃN INFANTIL", name: "JardÃ­n infantil 1", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
  { id: "scenario-jardin-2", type: "JARDÃN INFANTIL", name: "JardÃ­n infantil 2", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
  { id: "scenario-sala-cuna-1", type: "Sala Cuna", name: "Sala cuna 1", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
  { id: "scenario-sala-cuna-2", type: "Sala Cuna", name: "Sala cuna 2", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
  { id: "scenario-monto-directo-1", type: "MONTO DIRECTO SALA CUNA", name: "Monto directo sala cuna 1", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
  { id: "scenario-monto-directo-2", type: "MONTO DIRECTO SALA CUNA", name: "Monto directo sala cuna 2", employee: "Escenario futuro", startDate: "2026-01-01", endDate: "2026-12-31", status: "Vigente", email: "", f30: "", po: "", caseId: "", notes: "Proveedor por definir" },
];

const STORAGE_KEY = "control-presupuestario-sala-cuna-v1";
const PROJECTION_KEY = "control-presupuestario-proyecciones-v1";
const PROJECTION_GRID_KEY = "control-presupuestario-proyeccion-mensual-v1";
const PROJECTION_PAID_KEY = "control-presupuestario-proyeccion-pagado-v1";
const PROVIDER_KEY = "control-presupuestario-proveedores-v1";
const BUDGET_KEY = "control-presupuestario-presupuesto-base-v1";
const COLLAPSE_KEY = "control-presupuestario-paneles-v1";

function readableText(value) {
  if (typeof value !== "string") return value;
  return value
    .replaceAll("ÃƒÂ¡", "a")
    .replaceAll("ÃƒÂ©", "e")
    .replaceAll("ÃƒÂ­", "i")
    .replaceAll("ÃƒÂ³", "o")
    .replaceAll("ÃƒÂº", "u")
    .replaceAll("ÃƒÂ±", "n")
    .replaceAll("ÃƒÂ", "I")
    .replaceAll("ÃƒÂ“", "O")
    .replaceAll("ÃƒÅ¡", "U")
    .replaceAll("Ã¡", "a")
    .replaceAll("Ã©", "e")
    .replaceAll("Ã­", "i")
    .replaceAll("Ã³", "o")
    .replaceAll("Ãº", "u")
    .replaceAll("Ã±", "n")
    .replaceAll("Ã", "A")
    .replaceAll("Ã‰", "E")
    .replaceAll("Ã", "I")
    .replaceAll("Ã“", "O")
    .replaceAll("Ãš", "U")
    .replaceAll("Ã‘", "N")
    .replaceAll("Â·", " - ")
    .replaceAll("Â°", "N")
    .replaceAll("Âº", "o")
    .replaceAll("ï¿½", "i")
    .replaceAll("�", "")
    .replace(/[ÃÂ]/g, "")
    .replace(/[\u0080-\u009f]/g, "")
    .replace(/\bJardn\b/gi, "Jardin")
    .replace(/\bJARDN\b/g, "JARDIN")
    .replace(/\bproyeccin\b/gi, "proyeccion")
    .replace(/\bejercucin\b/gi, "ejecucion")
    .replace(/\batencin\b/gi, "atencion")
    .replace(/\s+-\s+/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanTextFields(item) {
  if (!item || typeof item !== "object") return item;
  Object.keys(item).forEach((key) => {
    if (typeof item[key] === "string") item[key] = readableText(item[key]);
  });
  return item;
}

function cleanTextList(items) {
  return Array.isArray(items) ? items.map(cleanTextFields) : [];
}

function cleanVisibleText(root = document.body) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const cleaned = readableText(node.nodeValue);
    if (cleaned !== node.nodeValue) node.nodeValue = cleaned;
  });
  root.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
    ["placeholder", "title", "aria-label"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, readableText(element.getAttribute(attribute)));
      }
    });
  });
}

cleanTextList(INITIATIVES);
cleanTextList(DEFAULT_PROVIDERS);
cleanTextList(PROJECTION_SCENARIO_PROVIDERS);

function resetLocalDataIfRequested() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("resetLocal") !== "1") return;
  [STORAGE_KEY, PROJECTION_KEY, PROJECTION_GRID_KEY, PROJECTION_PAID_KEY, PROVIDER_KEY, BUDGET_KEY].forEach((key) => {
    localStorage.removeItem(key);
  });
  params.delete("resetLocal");
  const query = params.toString();
  window.history.replaceState({}, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
}

resetLocalDataIfRequested();

applyBudgetOverrides(loadBudgets());

let sharedDataReady = false;
let sharedDataTimer = null;
let expenses = loadExpenses();
let projections = loadProjections();
let projectionGrid = loadProjectionGrid();
let projectionPaidGrid = loadProjectionPaidGrid();
let providers = loadProviders();
expenses = cleanTextList(expenses);
projections = cleanTextList(projections);
providers = cleanTextList(providers);
let lastDocumentData = null;
let bulkDocuments = [];
let editingExpenseId = null;
let editingProviderId = null;

const money = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

function totalBudget(initiative) {
  return initiative.monthlyBudget.reduce((sum, value) => sum + value, 0);
}

function normalizeBudgetArray(values, fallback = []) {
  return MONTHS.map((_, index) => {
    const raw = Array.isArray(values) ? values[index] : undefined;
    const value = Number(raw ?? fallback[index] ?? 0);
    return Number.isFinite(value) && value > 0 ? Math.round(value) : 0;
  });
}

function applyBudgetOverrides(budgets = {}) {
  INITIATIVES.forEach((item) => {
    item.monthlyBudget = normalizeBudgetArray(budgets[item.id], item.monthlyBudget);
  });
}

function currentBudgetPayload() {
  return Object.fromEntries(INITIATIVES.map((item) => [item.id, [...item.monthlyBudget]]));
}

function loadBudgets() {
  try {
    const saved = JSON.parse(localStorage.getItem(BUDGET_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveBudgets() {
  localStorage.setItem(BUDGET_KEY, JSON.stringify(currentBudgetPayload()));
  scheduleSharedDataSave();
}

function loadExpenses() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveExpenses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  scheduleSharedDataSave();
}

function loadProjections() {
  try {
    return JSON.parse(localStorage.getItem(PROJECTION_KEY)) || [];
  } catch {
    return [];
  }
}

function saveProjections() {
  localStorage.setItem(PROJECTION_KEY, JSON.stringify(projections));
  scheduleSharedDataSave();
}

function loadProjectionGrid() {
  try {
    return JSON.parse(localStorage.getItem(PROJECTION_GRID_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProjectionGrid() {
  localStorage.setItem(PROJECTION_GRID_KEY, JSON.stringify(projectionGrid));
  scheduleSharedDataSave();
}

function loadProjectionPaidGrid() {
  try {
    return JSON.parse(localStorage.getItem(PROJECTION_PAID_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProjectionPaidGrid() {
  localStorage.setItem(PROJECTION_PAID_KEY, JSON.stringify(projectionPaidGrid));
  scheduleSharedDataSave();
}

function loadProviders() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROVIDER_KEY));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeProviderDates) : DEFAULT_PROVIDERS.map(normalizeProviderDates);
  } catch {
    return DEFAULT_PROVIDERS.map(normalizeProviderDates);
  }
}

function saveProviders() {
  localStorage.setItem(PROVIDER_KEY, JSON.stringify(providers));
  scheduleSharedDataSave();
}

function localDataPayload() {
  return {
    replaceExpenses: true,
    replaceProjections: true,
    replaceProviders: true,
    replaceProjectionGrid: true,
    expenses: uniqueArrayBy(expenses, expenseMergeKey),
    projections: uniqueArrayBy(projections, projectionMergeKey),
    projectionGrid,
    projectionPaidGrid,
    providers: uniqueArrayBy(providers, providerMergeKey),
    budgets: currentBudgetPayload(),
  };
}

function localDataHasRecords() {
  return Boolean(
    expenses.length
    || projections.length
    || Object.keys(projectionGrid).length
    || Object.keys(projectionPaidGrid).length
    || localStorage.getItem(PROVIDER_KEY)
    || localStorage.getItem(BUDGET_KEY)
  );
}

function mergeArrayByKey(sharedItems, localItems, keyFn) {
  const map = new Map();
  (Array.isArray(sharedItems) ? sharedItems : []).forEach((item) => map.set(keyFn(item), item));
  (Array.isArray(localItems) ? localItems : []).forEach((item) => map.set(keyFn(item), item));
  return [...map.values()];
}

function uniqueArrayBy(items, keyFn) {
  const map = new Map();
  (Array.isArray(items) ? items : []).forEach((item) => {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, item);
  });
  return [...map.values()];
}

function expenseMergeKey(item) {
  return `${compactText(readableText(item.docType))}|${compactText(readableText(item.docNumber))}|${compactText(readableText(item.vendor))}|${item.initiativeId}|${item.month}|${item.amount}`.toLowerCase();
}

function providerMergeKey(item) {
  return `${compactText(readableText(item.name))}|${compactText(readableText(item.employee))}`.toLowerCase();
}

function projectionMergeKey(item) {
  return item.id || `${item.provider}|${item.initiativeId}|${item.startMonth}|${item.endMonth}|${item.monthlyAmount}`.toLowerCase();
}

function applySharedData(data) {
  if (!data) return;
  const sharedProviders = cleanTextList(Array.isArray(data.providers) ? data.providers : []);
  expenses = uniqueArrayBy(cleanTextList(Array.isArray(data.expenses) ? data.expenses : []), expenseMergeKey);
  projections = uniqueArrayBy(cleanTextList(Array.isArray(data.projections) ? data.projections : []), projectionMergeKey);
  projectionGrid = data.projectionGrid && typeof data.projectionGrid === "object" ? data.projectionGrid : {};
  projectionPaidGrid = data.projectionPaidGrid && typeof data.projectionPaidGrid === "object" ? data.projectionPaidGrid : {};
  applyBudgetOverrides(data.budgets && typeof data.budgets === "object" ? data.budgets : loadBudgets());
  providers = sharedProviders.length
    ? uniqueArrayBy(sharedProviders, providerMergeKey).map(normalizeProviderDates)
    : DEFAULT_PROVIDERS.map(normalizeProviderDates);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  localStorage.setItem(PROJECTION_KEY, JSON.stringify(projections));
  localStorage.setItem(PROJECTION_GRID_KEY, JSON.stringify(projectionGrid));
  localStorage.setItem(PROJECTION_PAID_KEY, JSON.stringify(projectionPaidGrid));
  localStorage.setItem(PROVIDER_KEY, JSON.stringify(providers));
  localStorage.setItem(BUDGET_KEY, JSON.stringify(currentBudgetPayload()));
}

async function saveSharedDataNow() {
  if (!sharedDataReady) return;
  try {
    await fetch("/api/shared-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(localDataPayload()),
    });
  } catch {
    // Si la red falla, el navegador mantiene una copia local para no perder trabajo.
  }
}

function scheduleSharedDataSave() {
  if (!sharedDataReady) return;
  clearTimeout(sharedDataTimer);
  sharedDataTimer = setTimeout(saveSharedDataNow, 350);
}

function captureProjectionGridFromDom() {
  const rows = document.querySelectorAll("#projectionGridSections .projection-month-input");
  rows.forEach((input) => {
    const providerId = input.dataset.providerId;
    const month = Number(input.dataset.month);
    if (!providerId || Number.isNaN(month)) return;
    const key = projectionGridKey(providerId, month);
    const cell = input.closest("td");
    const isRealPaid = cell?.dataset.realPaid === "true";
    if (isRealPaid) {
      delete projectionGrid[key];
      delete projectionPaidGrid[key];
      return;
    }
    const rawValue = String(input.value || "").replace(/[^\d]/g, "");
    const value = rawValue ? Number(rawValue) : 0;
    if (value > 0) projectionGrid[key] = value;
    else delete projectionGrid[key];

    const checkbox = input.closest("td")?.querySelector(".projection-paid-check");
    if (checkbox && !checkbox.disabled) {
      projectionPaidGrid[key] = checkbox.checked;
    }
  });
  localStorage.setItem(PROJECTION_GRID_KEY, JSON.stringify(projectionGrid));
  localStorage.setItem(PROJECTION_PAID_KEY, JSON.stringify(projectionPaidGrid));
}

async function loadSharedData() {
  try {
    if (window.__CONTROL_SHARED_DATA__) {
      applySharedData(window.__CONTROL_SHARED_DATA__);
      return;
    }
    if (typeof XMLHttpRequest !== "undefined") {
      const request = new XMLHttpRequest();
      request.open("GET", "/api/shared-data", false);
      request.send(null);
      if (request.status >= 200 && request.status < 300) {
        const result = JSON.parse(request.responseText);
        if (result.exists && result.data) {
          applySharedData(result.data);
          return;
        }
      }
    }
    const response = await fetch("/api/shared-data");
    if (!response.ok) return;
    const result = await response.json();
    if (result.exists && result.data) {
      applySharedData(result.data);
      return;
    }
    if (localDataHasRecords()) {
      sharedDataReady = true;
      await saveSharedDataNow();
      sharedDataReady = false;
    }
  } catch {
    // La app puede seguir funcionando localmente si el archivo central no responde.
  }
}

function loadPanelState() {
  try {
    return JSON.parse(localStorage.getItem(COLLAPSE_KEY)) || {};
  } catch {
    return {};
  }
}

function savePanelState(state) {
  localStorage.setItem(COLLAPSE_KEY, JSON.stringify(state));
}

function dateDefaultsForProvider(provider) {
  const key = compactText(`${provider.name} ${provider.employee}`);
  const defaults = [
    { aliases: ["excepyq", "yenifferquijada", "yeniferquijada", "yenifercarolaquijada"], startDate: "2025-12-16", endDate: "2026-10-06" },
    { aliases: ["excepca", "carmenastudillo"], startDate: "2024-11-14", endDate: "2026-02-12" },
    { aliases: ["exceplib", "loretoibanez", "loretomacarenaibanez"], startDate: "2026-03-26", endDate: "2027-07-31" },
    { aliases: ["excepcva", "cynthiavillablanca", "cynthiarosavillablanca"], startDate: "2026-04-15", endDate: "2027-10-24" },
    { aliases: ["excepcgl", "carlagaete", "carlaeugeniagaete"], startDate: "2026-05-05", endDate: "2027-04-30" },
  ];
  return defaults.find((item) => item.aliases.some((alias) => key.includes(alias))) || {};
}

function normalizeProviderDates(provider) {
  const defaults = dateDefaultsForProvider(provider);
  const f30 = provider.f30 || "";
  return {
    ...provider,
    startDate: provider.startDate || defaults.startDate || "",
    endDate: provider.endDate || defaults.endDate || "",
    requiresF30: provider.requiresF30 || (f30 ? "SÃ­" : "No"),
    f30,
  };
}

function byInitiative(id) {
  return INITIATIVES.find((item) => item.id === id);
}

function initiativeFromProviderType(type) {
  const normalized = String(type || "").toLowerCase();
  if (normalized.includes("monto")) return "monto-directo";
  if (normalized.includes("sala")) return "sala-cuna";
  return "jardin";
}

function providerByName(name) {
  const normalized = String(name || "").trim().toLowerCase();
  return [...providers, ...DEFAULT_PROVIDERS].find((item) => item.name.toLowerCase() === normalized || item.employee.toLowerCase() === normalized);
}

function providerFromText(text) {
  const compact = compactText(text);
  const match = [...providers, ...DEFAULT_PROVIDERS].find((item) => {
    const name = compactText(item.name);
    return name && compact.includes(name);
  });
  return match?.name || "";
}

function providerByPo(po) {
  const normalized = String(po || "").trim().toLowerCase();
  return [...providers, ...DEFAULT_PROVIDERS].find((item) => String(item.po || "").trim().toLowerCase() === normalized);
}

function compactText(value) {
  return normalizeText(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function providerMatchesExpense(provider, expense) {
  const vendor = compactText(expense.vendor);
  const notes = compactText(expense.notes);
  const name = compactText(provider.name);
  const employee = compactText(provider.employee);
  const po = compactText(provider.po);
  return Boolean(
    (name && vendor.includes(name)) ||
    (employee && (vendor.includes(employee) || notes.includes(employee))) ||
    (po && (vendor.includes(po) || notes.includes(po)))
  );
}

function expensesForProvider(provider) {
  return uniqueArrayBy(expenses, expenseMergeKey).filter((expense) => providerMatchesExpense(provider, expense));
}

function expenseTotal(filterId = "all") {
  return uniqueArrayBy(expenses, expenseMergeKey)
    .filter((item) => filterId === "all" || item.initiativeId === filterId)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function monthlyExpense(filterId = "all") {
  return MONTHS.map((_, index) =>
    uniqueArrayBy(expenses, expenseMergeKey)
      .filter((item) => (filterId === "all" || item.initiativeId === filterId) && Number(item.month) === index)
      .reduce((sum, item) => sum + Number(item.amount || 0), 0)
  );
}

function monthlyBudget(filterId = "all") {
  if (filterId !== "all") {
    return byInitiative(filterId).monthlyBudget;
  }
  return MONTHS.map((_, index) => INITIATIVES.reduce((sum, item) => sum + item.monthlyBudget[index], 0));
}

function projectionMonths(item) {
  const start = Number(item.startMonth);
  const end = Number(item.endMonth);
  return projectionActiveMonths(item).length;
}

function projectionTotal(item) {
  const monthly = Number(item.monthlyAmount || 0) * projectionActiveMonths(item).length;
  const extra = Number(item.extraCount || 0) * Number(item.extraAmount || 0);
  return monthly + extra;
}

function projectionProvider(item) {
  const value = String(item.provider || "").trim();
  return providers.find((provider) => provider.id === item.providerId)
    || providers.find((provider) => provider.name === value || provider.employee === value)
    || providerByName(value)
    || null;
}

function projectionMatchesExpense(item, expense) {
  const provider = projectionProvider(item);
  if (provider) return providerMatchesExpense(provider, expense);
  const wanted = compactText(item.provider);
  const vendor = compactText(expense.vendor);
  return Boolean(wanted && (vendor.includes(wanted) || wanted.includes(vendor)));
}

function projectionActiveMonths(item) {
  const paidMonths = new Set(expenses
    .filter((expense) => expense.initiativeId === item.initiativeId && projectionMatchesExpense(item, expense))
    .map((expense) => Number(expense.month)));
  const months = [];
  for (let month = Number(item.startMonth); month <= Number(item.endMonth); month += 1) {
    if (!paidMonths.has(month)) months.push(month);
  }
  return months;
}

function projectionPaidMonths(item) {
  return [...new Set(expenses
    .filter((expense) => expense.initiativeId === item.initiativeId && projectionMatchesExpense(item, expense))
    .map((expense) => Number(expense.month)))]
    .filter((month) => month >= Number(item.startMonth) && month <= Number(item.endMonth))
    .sort((a, b) => a - b);
}

function projectionGridKey(providerId, month) {
  return `${providerId}:${month}`;
}

function projectionCellIsPaid(provider, month) {
  const key = projectionGridKey(provider.id, month);
  if (Object.prototype.hasOwnProperty.call(projectionPaidGrid, key)) {
    return Boolean(projectionPaidGrid[key]);
  }
  return providerMonthPaid(provider, month);
}

function visibleProjectionProviders() {
  const uniqueProviders = uniqueArrayBy(providers, providerMergeKey);
  const sortedProviders = [...uniqueProviders].sort((a, b) => {
    const statusScore = (b.status === "Vigente") - (a.status === "Vigente");
    return statusScore
      || providerInitiative(a).localeCompare(providerInitiative(b))
      || String(a.name).localeCompare(String(b.name));
  });
  const providerKeys = new Set(sortedProviders.map(providerMergeKey));
  const missingScenarios = PROJECTION_SCENARIO_PROVIDERS.filter((provider) => !providerKeys.has(providerMergeKey(provider)));
  return [...sortedProviders, ...missingScenarios];
}

function providerInitiative(provider) {
  return initiativeFromProviderType(provider.type);
}

function providerMonthIsWithinPayments(provider, month) {
  const start = provider.startDate ? new Date(`${provider.startDate}T00:00:00`) : new Date("2026-01-01T00:00:00");
  const end = provider.endDate ? new Date(`${provider.endDate}T00:00:00`) : new Date("2026-12-31T00:00:00");
  const monthStart = new Date(2026, month, 1);
  const monthEnd = new Date(2026, month + 1, 0);
  return monthEnd >= start && monthStart <= end;
}

function providerMonthPaid(provider, month) {
  return expenses.some((expense) =>
    Number(expense.month) === month
    && expense.initiativeId === providerInitiative(provider)
    && providerMatchesExpense(provider, expense)
  );
}

function providerMonthPaidAmount(provider, month) {
  return expenses
    .filter((expense) =>
      Number(expense.month) === month
      && expense.initiativeId === providerInitiative(provider)
      && providerMatchesExpense(provider, expense)
    )
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function projectionGridValue(provider, month) {
  const key = projectionGridKey(provider.id, month);
  return Number(projectionGrid[key] || 0);
}

function projectionGridMonthly(filterId = "all") {
  const result = Array(MONTHS.length).fill(0);
  visibleProjectionProviders().forEach((provider) => {
    const initiativeId = providerInitiative(provider);
    if (filterId !== "all" && initiativeId !== filterId) return;
    MONTHS.forEach((_, month) => {
      if (!providerMonthIsWithinPayments(provider, month) || projectionCellIsPaid(provider, month)) return;
      result[month] += projectionGridValue(provider, month);
    });
  });
  return result;
}

function projectionGridTotal(filterId = "all") {
  return projectionGridMonthly(filterId).reduce((sum, value) => sum + value, 0);
}

function projectedTotal(filterId = "all") {
  const legacyTotal = projections
    .filter((item) => filterId === "all" || item.initiativeId === filterId)
    .reduce((sum, item) => sum + projectionTotal(item), 0);
  return legacyTotal + projectionGridTotal(filterId);
}

function monthlyProjection(filterId = "all") {
  const result = Array(MONTHS.length).fill(0);
  projections
    .filter((item) => filterId === "all" || item.initiativeId === filterId)
    .forEach((item) => {
      projectionActiveMonths(item).forEach((month) => {
        result[month] += Number(item.monthlyAmount || 0);
      });
      if (Number(item.extraCount || 0) > 0 && Number(item.extraAmount || 0) > 0) {
        result[Number(item.endMonth)] += Number(item.extraCount) * Number(item.extraAmount);
      }
    });
  projectionGridMonthly(filterId).forEach((value, month) => {
    result[month] += value;
  });
  return result;
}

function fillSelectors() {
  const initiativeOptions = INITIATIVES.map((item) => `<option value="${item.id}">${item.shortName}</option>`).join("");
  document.querySelector("#initiative").innerHTML = initiativeOptions;
  if (document.querySelector("#projectionInitiative")) document.querySelector("#projectionInitiative").innerHTML = initiativeOptions;
  document.querySelector("#initiativeFilter").innerHTML = `<option value="all">Todas las iniciativas</option>${initiativeOptions}`;
  document.querySelector("#monthlyComparisonFilter").innerHTML = `<option value="all">Todas las iniciativas</option>${initiativeOptions}`;
  document.querySelector("#month").innerHTML = MONTHS.map((month, index) => `<option value="${index}">${month}</option>`).join("");
  document.querySelector("#providerControlMonth").innerHTML = MONTHS.map((month, index) => `<option value="${index}">Control hasta ${month}</option>`).join("");
  if (document.querySelector("#projectionStart")) document.querySelector("#projectionStart").innerHTML = MONTHS.map((month, index) => `<option value="${index}">${month}</option>`).join("");
  if (document.querySelector("#projectionEnd")) document.querySelector("#projectionEnd").innerHTML = MONTHS.map((month, index) => `<option value="${index}">${month}</option>`).join("");
  const currentMonth = Math.min(11, Math.max(0, new Date().getMonth()));
  document.querySelector("#providerControlMonth").value = String(currentMonth);
  if (document.querySelector("#projectionStart")) document.querySelector("#projectionStart").value = String(currentMonth);
  if (document.querySelector("#projectionEnd")) document.querySelector("#projectionEnd").value = "11";
  document.querySelector("#docDate").valueAsDate = new Date();
  refreshProviderList();
}

function refreshProviderList() {
  document.querySelector("#providerList").innerHTML = providers
    .filter((item) => item.status === "Vigente")
    .map((item) => `<option value="${item.name}">${item.type} - ${item.employee || item.email || ""}</option>`)
    .join("");
  const projectionSelect = document.querySelector("#projectionProvider");
  if (projectionSelect) {
    const current = projectionSelect.value;
    projectionSelect.innerHTML = providers
      .map((item) => `<option value="${item.id}">${item.name}${item.employee ? ` - ${item.employee}` : ""}</option>`)
      .join("");
    if ([...projectionSelect.options].some((option) => option.value === current)) projectionSelect.value = current;
  }
}

function renderProviderF30Fields() {
  const requiresF30 = document.querySelector("#providerRequiresF30").value === "SÃ­";
  const field = document.querySelector("#providerF30");
  field.placeholder = requiresF30 ? "Ej: marzo y septiembre 2026 / mensual" : "Puedes escribir aquÃ­ y se marcarÃ¡ como SÃ­";
}

function setupCollapsiblePanels() {
  const panels = [
    { id: "presupuesto-base", label: "Presupuesto base", collapsed: true },
    { id: "proveedores", label: "Maestro", collapsed: true },
    { id: "control-proveedores", label: "Seguimiento por proveedor", collapsed: true },
    { id: "documentos", label: "Carga documental", collapsed: true },
    { id: "proyeccion", label: "ProyecciÃ³n", collapsed: true },
    { id: "registro", label: "Registro mensual", collapsed: false },
    { id: "detalle", label: "Control operativo", collapsed: false },
    { id: "presentacion", label: "Reporte ejecutivo", collapsed: true },
  ];
  const state = loadPanelState();

  panels.forEach((config) => {
    const panel = document.querySelector(`#${config.id}`);
    if (!panel) return;
    const heading = panel.querySelector(":scope > .section-heading");
    if (!heading || heading.querySelector(".collapse-toggle")) return;

    panel.classList.add("collapsible-panel");
    const collapsed = Object.prototype.hasOwnProperty.call(state, config.id) ? state[config.id] : config.collapsed;
    panel.classList.toggle("is-collapsed", collapsed);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "collapse-toggle";
    button.textContent = collapsed ? "Mostrar" : "Ocultar";
    button.setAttribute("aria-expanded", String(!collapsed));

    button.addEventListener("click", () => {
      const nextCollapsed = !panel.classList.contains("is-collapsed");
      panel.classList.toggle("is-collapsed", nextCollapsed);
      button.textContent = nextCollapsed ? "Mostrar" : "Ocultar";
      button.setAttribute("aria-expanded", String(!nextCollapsed));
      const nextState = loadPanelState();
      nextState[config.id] = nextCollapsed;
      savePanelState(nextState);
    });

    const actions = heading.querySelector(":scope > .actions");
    if (actions) actions.prepend(button);
    else heading.appendChild(button);
  });
}

function setProviderFormMode() {
  const isEditing = Boolean(editingProviderId);
  const submit = document.querySelector("#providerSubmit");
  const cancel = document.querySelector("#cancelProviderEdit");
  const status = document.querySelector("#providerEditStatus");
  if (submit) submit.textContent = isEditing ? "Actualizar proveedor" : "Guardar proveedor";
  if (cancel) cancel.hidden = !isEditing;
  if (status) {
    status.textContent = isEditing
      ? "Estas editando un proveedor guardado. Al actualizar no se creara un duplicado."
      : "";
  }
}

function clearProviderEditMode() {
  editingProviderId = null;
  setProviderFormMode();
}

function providerFromForm(existing = {}) {
  return normalizeProviderDates({
    ...existing,
    id: existing.id || newId(),
    type: document.querySelector("#providerType").value,
    name: document.querySelector("#providerName").value.trim(),
    employee: document.querySelector("#providerEmployee").value.trim(),
    email: document.querySelector("#providerEmail").value.trim(),
    po: document.querySelector("#providerPo").value.trim(),
    caseId: document.querySelector("#providerCase").value.trim(),
    startDate: document.querySelector("#providerStartDate").value,
    endDate: document.querySelector("#providerEndDate").value,
    requiresF30: document.querySelector("#providerRequiresF30").value,
    f30: document.querySelector("#providerF30").value.trim(),
    status: document.querySelector("#providerStatus").value,
    notes: document.querySelector("#providerNotes").value.trim(),
  });
}

function fillProviderForm(provider) {
  editingProviderId = provider.id;
  document.querySelector("#providerType").value = provider.type || "JARDIN INFANTIL";
  document.querySelector("#providerName").value = provider.name || "";
  document.querySelector("#providerEmployee").value = provider.employee || "";
  document.querySelector("#providerEmail").value = provider.email || "";
  document.querySelector("#providerPo").value = provider.po || "";
  document.querySelector("#providerCase").value = provider.caseId || "";
  document.querySelector("#providerStartDate").value = provider.startDate || "";
  document.querySelector("#providerEndDate").value = provider.endDate || "";
  document.querySelector("#providerRequiresF30").value = provider.requiresF30 || (provider.f30 ? "SÃƒÂ­" : "No");
  document.querySelector("#providerF30").value = provider.f30 || "";
  document.querySelector("#providerStatus").value = provider.status || "Vigente";
  document.querySelector("#providerNotes").value = provider.notes || "";
  renderProviderF30Fields();
  setProviderFormMode();
}

function renderKpis() {
  const budget = INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0);
  const spent = expenseTotal();
  const forecast = projectedTotal();
  const projectedClose = spent + forecast;
  const balance = budget - spent;
  const projectedBalance = budget - projectedClose;
  const execution = budget ? spent / budget : 0;
  const projectedExecution = budget ? projectedClose / budget : 0;

  document.querySelector("#kpiBudget").textContent = money.format(budget);
  document.querySelector("#kpiSpent").textContent = money.format(spent);
  document.querySelector("#kpiDocs").textContent = `${expenses.length} documento${expenses.length === 1 ? "" : "s"} registrado${expenses.length === 1 ? "" : "s"}`;
  document.querySelector("#kpiBalance").textContent = money.format(balance);
  document.querySelector("#kpiBalanceHint").textContent = balance >= 0 ? "Saldo disponible" : "SobreejecuciÃ³n anual";
  document.querySelector("#kpiExecution").textContent = `${Math.round(execution * 100)}%`;
  document.querySelector("#kpiExecutionHint").textContent = execution <= 0.85 ? "Dentro del marco anual" : execution <= 1 ? "Revisar prÃ³ximos meses" : "Solicitar ajuste urgente";
  document.querySelector("#kpiProjected").textContent = money.format(projectedClose);
  document.querySelector("#kpiProjectedHint").textContent = projections.length
    ? `Saldo proyectado: ${money.format(projectedBalance)} (${Math.round(projectedExecution * 100)}%)`
    : "Sin proyecciones cargadas";
}

function renderInitiativeCards() {
  const container = document.querySelector("#initiativeCards");
  container.innerHTML = INITIATIVES.map((item) => {
    const budget = totalBudget(item);
    const spent = expenseTotal(item.id);
    const forecast = projectedTotal(item.id);
    const close = spent + forecast;
    const ratio = budget ? close / budget : 0;
    const stateClass = ratio > 1 ? "risk" : ratio >= 0.85 ? "warn" : "ok";
    const stateText = ratio > 1 ? "CrÃ­tico" : ratio >= 0.85 ? "AtenciÃ³n" : "Normal";
    return `
      <article class="initiative-card">
        <div class="initiative-title">
          <strong>${item.shortName}</strong>
          <span class="badge ${stateClass}">${stateText}</span>
        </div>
        <div class="progress" aria-label="EjecuciÃ³n ${item.shortName}">
          <span style="--value:${Math.round(ratio * 100)}%"></span>
        </div>
        <div class="money-row"><span>Gastado real</span><b>${money.format(spent)}</b></div>
        <div class="money-row"><span>Proyectado</span><b>${money.format(forecast)}</b></div>
        <div class="money-row"><span>Presupuesto</span><b>${money.format(budget)}</b></div>
        <div class="money-row"><span>Saldo estimado</span><b>${money.format(budget - close)}</b></div>
      </article>
    `;
  }).join("");
}

function renderChart() {
  const filterId = document.querySelector("#initiativeFilter").value;
  const data = filterId === "all"
    ? INITIATIVES.map((item) => ({ label: item.shortName, budget: totalBudget(item), spent: expenseTotal(item.id), projected: projectedTotal(item.id) }))
    : [byInitiative(filterId)].map((item) => ({ label: item.shortName, budget: totalBudget(item), spent: expenseTotal(item.id), projected: projectedTotal(item.id) }));
  drawBudgetUseChart(document.querySelector("#mainChart"), data);
}

function renderMonthlyComparison() {
  const filterId = document.querySelector("#monthlyComparisonFilter").value;
  const paid = monthlyExpense(filterId);
  const budgetMonthly = monthlyBudget(filterId);
  const annualPaid = paid.reduce((sum, value) => sum + value, 0);
  const annualBudget = budgetMonthly.reduce((sum, value) => sum + value, 0);
  const annualBalance = annualBudget - annualPaid;
  const budget = filterId === "all"
    ? INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0)
    : totalBudget(byInitiative(filterId));

  drawMonthlyBudgetUseChart(document.querySelector("#monthlyComparisonChart"), budgetMonthly, paid);
  document.querySelector("#annualComparisonCards").innerHTML = `
    <article class="projection-card">
      <span>Presupuesto usado</span>
      <strong>${money.format(annualPaid)}</strong>
      <small>${Math.round((annualPaid / Math.max(1, budget)) * 100)}% del presupuesto anual seleccionado.</small>
    </article>
    <article class="projection-card">
      <span>Saldo anual</span>
      <strong>${money.format(annualBalance)}</strong>
      <small>Presupuesto menos pagos reales registrados.</small>
    </article>
    <article class="projection-card">
      <span>Mes mÃ¡s usado</span>
      <strong>${MONTHS[paid.reduce((best, value, index, array) => value > array[best] ? index : best, 0)]}</strong>
      <small>Mayor gasto real registrado en el periodo.</small>
    </article>
  `;
}

function renderProviders() {
  const search = document.querySelector("#providerSearch").value.trim().toLowerCase();
  const filtered = providers
    .filter((item) => {
      const text = `${item.type} ${item.name} ${item.employee} ${item.email} ${item.po} ${item.caseId} ${item.status} ${item.f30} ${item.requiresF30}`.toLowerCase();
      return !search || text.includes(search);
    })
    .sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));

  const providerRows = (items) => items.map((item) => `
    <tr>
      <td>${item.type}</td>
      <td><strong>${item.name}</strong><br><small>${item.notes || ""}</small></td>
      <td>${item.employee || ""}<br><small>Pagos: ${item.startDate || "Sin fecha"} a ${item.endDate || "Sin fecha"}</small></td>
      <td>${item.email || ""}</td>
      <td>${item.po || ""}<br><small>${item.caseId || ""}</small></td>
      <td><span class="badge ${item.requiresF30 === "SÃ­" ? "warn" : "ok"}">F30-1: ${item.requiresF30 || "No"}</span><br><small>${item.f30 || "Sin solicitud F30-1"}</small></td>
      <td><span class="badge ${item.status === "Vigente" ? "ok" : "risk"}">${item.status}</span></td>
      <td>
        <div class="row-actions">
          <button class="edit-btn" type="button" data-action="edit" data-id="${item.id}">Editar</button>
          <button class="delete-btn" type="button" data-action="toggle" data-id="${item.id}">${item.status === "Vigente" ? "No vigente" : "Vigente"}</button>
        </div>
      </td>
    </tr>
  `).join("");

  const providerTable = (title, items, open = false) => `
    <details class="provider-group" ${open ? "open" : ""}>
      <summary>
        <span>${title}</span>
        <strong>${items.length}</strong>
      </summary>
      <div class="table-wrap compact-table">
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Funcionario/a</th>
              <th>Contacto</th>
              <th>OC / expediente</th>
              <th>F30-1</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${items.length ? providerRows(items) : `<tr><td colspan="8">No hay proveedores en esta seccion.</td></tr>`}
          </tbody>
        </table>
      </div>
    </details>
  `;

  const active = filtered.filter((item) => item.status === "Vigente");
  const inactive = filtered.filter((item) => item.status !== "Vigente");
  document.querySelector("#providerSections").innerHTML = [
    providerTable("Proveedores vigentes", active, true),
    providerTable("Proveedores no vigentes", inactive, Boolean(search)),
  ].join("");
}

function expectedMonthsForProvider(provider, controlMonth) {
  const start = provider.startDate ? new Date(`${provider.startDate}T00:00:00`) : new Date("2026-01-01T00:00:00");
  const end = provider.endDate ? new Date(`${provider.endDate}T00:00:00`) : null;
  if (start.getFullYear() > 2026) return [];
  if (end && end.getFullYear() < 2026) return [];
  const startMonth = start.getFullYear() === 2026 ? start.getMonth() : 0;
  const endMonth = end && end.getFullYear() === 2026 ? Math.min(controlMonth, end.getMonth()) : controlMonth;
  if (endMonth < startMonth) return [];
  return Array.from({ length: endMonth - startMonth + 1 }, (_, index) => startMonth + index);
}

function providerControlStatus(provider, providerExpenses, expectedMonths) {
  const paidMonths = new Set(providerExpenses.map((expense) => Number(expense.month)));
  const missing = expectedMonths.filter((month) => !paidMonths.has(month));
  if (!providerExpenses.length) return { text: "Sin pagos", className: "status-duplicate", missing };
  if (missing.length) return { text: "Pendiente", className: "status-review", missing };
  return { text: "Al dÃ­a", className: "status-ready", missing };
}

function renderProviderControl() {
  const controlMonth = Number(document.querySelector("#providerControlMonth").value);
  const rows = providers.map((provider) => {
    const providerExpenses = expensesForProvider(provider);
    const expectedMonths = expectedMonthsForProvider(provider, controlMonth);
    const status = providerControlStatus(provider, providerExpenses, expectedMonths);
    const paidMonths = [...new Set(providerExpenses.map((expense) => Number(expense.month)))]
      .sort((a, b) => a - b);
    const total = providerExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const lastExpense = [...providerExpenses].sort((a, b) => Number(b.month) - Number(a.month) || String(b.date).localeCompare(String(a.date)))[0];
    return { provider, providerExpenses, expectedMonths, status, paidMonths, total, lastExpense };
  });

  const withAlert = rows.filter((row) => row.status.text !== "Al dÃ­a").length;
  const totalPaid = rows.reduce((sum, row) => sum + row.total, 0);
  const upToDate = rows.length - withAlert;

  document.querySelector("#providerControlCards").innerHTML = `
    <article class="projection-card">
      <span>Mes de control</span>
      <strong>${MONTHS[controlMonth]}</strong>
      <small>Se revisan pagos esperados solo dentro de la fecha de derecho.</small>
    </article>
    <article class="projection-card">
      <span>Proveedores al dÃ­a</span>
      <strong>${upToDate} / ${rows.length}</strong>
      <small>${withAlert} proveedor${withAlert === 1 ? "" : "es"} con alerta.</small>
    </article>
    <article class="projection-card">
      <span>Total pagado asociado</span>
      <strong>${money.format(totalPaid)}</strong>
      <small>Suma de gastos vinculados al maestro de proveedores.</small>
    </article>
  `;

  document.querySelector("#providerControlRows").innerHTML = rows
    .sort((a, b) => a.status.text.localeCompare(b.status.text) || a.provider.name.localeCompare(b.provider.name))
    .map((row) => `
      <tr>
        <td><span class="status-pill ${row.status.className}">${row.status.text}</span></td>
        <td><strong>${row.provider.name}</strong><br><small>${row.provider.employee || ""}</small></td>
        <td>${row.provider.type}<br><small>${row.provider.status}</small></td>
        <td>${money.format(row.total)}</td>
        <td>${row.paidMonths.length ? row.paidMonths.map((month) => MONTHS[month].slice(0, 3)).join(", ") : "Sin meses"}</td>
        <td>${row.status.missing.length ? row.status.missing.map((month) => MONTHS[month].slice(0, 3)).join(", ") : "Sin pendientes"}</td>
        <td>${row.lastExpense ? `${MONTHS[row.lastExpense.month]}<br><small>${row.lastExpense.docType} ${row.lastExpense.docNumber}</small>` : "Sin registro"}</td>
      </tr>
    `).join("");
}

function drawLineChart(canvas, series) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, rect.width) * ratio;
  canvas.height = 292 * ratio;

  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, rect.width, 292);

  const width = rect.width;
  const height = 292;
  const pad = { top: 18, right: 20, bottom: 58, left: 72 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const maxValue = Math.max(1, ...series.flatMap((line) => line.values));
  const yMax = Math.ceil(maxValue / 1000000) * 1000000;
  const xStep = plotW / (MONTHS.length - 1);
  const y = (value) => pad.top + plotH - (value / yMax) * plotH;
  const x = (index) => pad.left + index * xStep;

  ctx.font = "12px Segoe UI, Arial, sans-serif";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#dbe3e6";
  ctx.fillStyle = "#66727f";

  for (let i = 0; i <= 4; i += 1) {
    const value = (yMax / 4) * i;
    const yy = y(value);
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
    ctx.fillText(compactMoney(value), 8, yy + 4);
  }

  MONTHS.forEach((month, index) => {
    if (index % 2 !== 0 && width < 760) return;
    ctx.fillText(month.slice(0, 3), x(index) - 10, height - 30);
  });

  series.forEach((line) => {
    ctx.beginPath();
    line.values.forEach((value, index) => {
      const xx = x(index);
      const yy = y(value);
      if (index === 0) ctx.moveTo(xx, yy);
      else ctx.lineTo(xx, yy);
    });
    ctx.lineWidth = 3;
    ctx.strokeStyle = line.color;
    ctx.stroke();

    line.values.forEach((value, index) => {
      ctx.beginPath();
      ctx.arc(x(index), y(value), 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = line.color;
      ctx.stroke();
    });
  });

  series.forEach((line, index) => {
    const legendX = pad.left + index * 210;
    ctx.fillStyle = line.color;
    ctx.fillRect(legendX, height - 14, 18, 5);
    ctx.fillStyle = "#17212b";
    ctx.fillText(line.label, legendX + 26, height - 8);
  });
}

function drawBudgetUseChart(canvas, rows) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const visualHeight = Math.max(300, rows.length * 96 + 92);
  canvas.width = Math.max(320, rect.width) * ratio;
  canvas.height = visualHeight * ratio;
  canvas.style.height = `${visualHeight}px`;

  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, rect.width, visualHeight);

  const width = rect.width;
  const pad = { top: 34, right: 26, bottom: 46, left: Math.min(285, Math.max(230, width * 0.25)) };
  const barW = Math.max(120, width - pad.left - pad.right);
  ctx.font = "12px Segoe UI, Arial, sans-serif";
  ctx.fillStyle = "#66727f";
  ctx.fillText("Pagado real y proyeccion sobre presupuesto anual", pad.left, 18);

  rows.forEach((row, index) => {
    const y = pad.top + index * 96;
    const projected = Number(row.projected || 0);
    const close = Number(row.spent || 0) + projected;
    const ratioUsed = row.budget ? close / row.budget : 0;
    const spentW = Math.min(barW, barW * (Number(row.spent || 0) / Math.max(1, row.budget)));
    const projectedW = Math.min(Math.max(0, barW - spentW), barW * (projected / Math.max(1, row.budget)));
    const stateColor = "#0f7b72";

    ctx.fillStyle = "#1f2f3f";
    ctx.font = "700 13px Segoe UI, Arial, sans-serif";
    ctx.fillText(row.label, 8, y + 20);
    ctx.font = "12px Segoe UI, Arial, sans-serif";
    ctx.fillStyle = "#66727f";
    ctx.fillText(`Real ${money.format(row.spent)} + proy. ${money.format(projected)}`, 8, y + 40);

    ctx.fillStyle = "#e6edf0";
    ctx.fillRect(pad.left, y + 10, barW, 24);
    ctx.fillStyle = stateColor;
    ctx.fillRect(pad.left, y + 10, spentW, 24);
    ctx.fillStyle = "#e29b32";
    ctx.fillRect(pad.left + spentW, y + 10, projectedW, 24);
    ctx.fillStyle = "#1f2f3f";
    ctx.font = "800 12px Segoe UI, Arial, sans-serif";
    ctx.fillText(`${Math.round(ratioUsed * 100)}% real + proyeccion`, pad.left, y + 56);
    ctx.fillStyle = "#66727f";
    ctx.font = "12px Segoe UI, Arial, sans-serif";
    ctx.fillText(`Saldo estimado: ${money.format(row.budget - close)}`, pad.left, y + 76);
  });

  const legendY = visualHeight - 22;
  ctx.fillStyle = "#0f7b72";
  ctx.fillRect(pad.left, legendY - 10, 14, 10);
  ctx.fillStyle = "#66727f";
  ctx.fillText("Pagado real", pad.left + 20, legendY);
  ctx.fillStyle = "#e29b32";
  ctx.fillRect(pad.left + 120, legendY - 10, 14, 10);
  ctx.fillStyle = "#66727f";
  ctx.fillText("Proyectado", pad.left + 140, legendY);
}

function drawMonthlyBudgetUseChart(canvas, budget, paid) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const visualHeight = 340;
  canvas.width = Math.max(320, rect.width) * ratio;
  canvas.height = visualHeight * ratio;

  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, rect.width, visualHeight);

  const width = rect.width;
  const height = visualHeight;
  const pad = { top: 24, right: 24, bottom: 72, left: 76 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const maxValue = Math.max(1, ...budget, ...paid);
  const yMax = Math.ceil(maxValue / 1000000) * 1000000 || 1000000;
  const groupW = plotW / MONTHS.length;
  const barW = Math.max(8, Math.min(24, groupW * 0.42));
  const y = (value) => pad.top + plotH - (value / yMax) * plotH;

  ctx.font = "12px Segoe UI, Arial, sans-serif";
  ctx.strokeStyle = "#dbe3e6";
  ctx.fillStyle = "#66727f";

  for (let i = 0; i <= 4; i += 1) {
    const value = (yMax / 4) * i;
    const yy = y(value);
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
    ctx.fillText(compactMoney(value), 8, yy + 4);
  }

  MONTHS.forEach((month, index) => {
    const center = pad.left + groupW * index + groupW / 2;
    const ratioUsed = budget[index] ? paid[index] / budget[index] : 0;
    const color = ratioUsed > 1 ? "#c84c45" : ratioUsed >= 0.85 ? "#bc8327" : "#0f7b72";
    ctx.fillStyle = "#d9e4e7";
    ctx.fillRect(center - barW / 2, y(budget[index]), barW, plotH - (y(budget[index]) - pad.top));
    ctx.fillStyle = color;
    ctx.fillRect(center - barW / 2, y(paid[index]), barW, plotH - (y(paid[index]) - pad.top));
    ctx.fillStyle = "#66727f";
    if (index % 2 === 0 || width >= 760) ctx.fillText(month.slice(0, 3), center - 10, height - 38);
    if (paid[index] > 0) {
      ctx.save();
      ctx.translate(center - 4, y(paid[index]) - 6);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(`${Math.round(ratioUsed * 100)}%`, 0, 0);
      ctx.restore();
    }
  });

  const legendY = height - 18;
  ctx.fillStyle = "#d9e4e7";
  ctx.fillRect(pad.left, legendY - 10, 14, 10);
  ctx.fillStyle = "#66727f";
  ctx.fillText("Presupuesto mensual", pad.left + 20, legendY);
  ctx.fillStyle = "#0f7b72";
  ctx.fillRect(pad.left + 170, legendY - 10, 14, 10);
  ctx.fillStyle = "#66727f";
  ctx.fillText("Pagado real", pad.left + 190, legendY);
}

function drawMonthlyComparisonChart(canvas, paid, projected, total) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const visualHeight = 340;
  canvas.width = Math.max(320, rect.width) * ratio;
  canvas.height = visualHeight * ratio;

  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, rect.width, visualHeight);

  const width = rect.width;
  const height = visualHeight;
  const pad = { top: 18, right: 24, bottom: 72, left: 76 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const maxValue = Math.max(1, ...paid, ...projected, ...total);
  const yMax = Math.ceil(maxValue / 1000000) * 1000000 || 1000000;
  const groupW = plotW / MONTHS.length;
  const barW = Math.max(6, Math.min(18, groupW * 0.24));
  const y = (value) => pad.top + plotH - (value / yMax) * plotH;

  ctx.font = "12px Segoe UI, Arial, sans-serif";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#dbe3e6";
  ctx.fillStyle = "#66727f";

  for (let i = 0; i <= 4; i += 1) {
    const value = (yMax / 4) * i;
    const yy = y(value);
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
    ctx.fillText(compactMoney(value), 8, yy + 4);
  }

  MONTHS.forEach((month, index) => {
    const center = pad.left + groupW * index + groupW / 2;
    const paidHeight = plotH - (y(paid[index]) - pad.top);
    const projectedHeight = plotH - (y(projected[index]) - pad.top);
    ctx.fillStyle = "#0f7b72";
    ctx.fillRect(center - barW - 2, y(paid[index]), barW, paidHeight);
    ctx.fillStyle = "#bc8327";
    ctx.fillRect(center + 2, y(projected[index]), barW, projectedHeight);
    ctx.fillStyle = "#66727f";
    if (index % 2 === 0 || width >= 820) ctx.fillText(month.slice(0, 3), center - 12, height - 42);
  });

  ctx.beginPath();
  total.forEach((value, index) => {
    const center = pad.left + groupW * index + groupW / 2;
    const yy = y(value);
    if (index === 0) ctx.moveTo(center, yy);
    else ctx.lineTo(center, yy);
  });
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#315b8a";
  ctx.stroke();

  total.forEach((value, index) => {
    const center = pad.left + groupW * index + groupW / 2;
    ctx.beginPath();
    ctx.arc(center, y(value), 4, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#315b8a";
    ctx.stroke();
  });

  const legend = [
    ["Pagado mensual", "#0f7b72"],
    ["Proyectado mensual", "#bc8327"],
    ["Total mensual", "#315b8a"],
  ];
  legend.forEach(([label, color], index) => {
    const legendX = pad.left + index * 175;
    ctx.fillStyle = color;
    ctx.fillRect(legendX, height - 16, 18, 5);
    ctx.fillStyle = "#17212b";
    ctx.fillText(label, legendX + 26, height - 10);
  });
}

function compactMoney(value) {
  if (value >= 1000000) return `$${Math.round(value / 1000000)}M`;
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return money.format(value);
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseMoney(value) {
  const cleaned = String(value || "").replace(/[^\d]/g, "");
  return cleaned ? Number(cleaned) : 0;
}

function emptyDocumentFromFile(fileName, description = "No se pudo leer texto suficiente desde este PDF.") {
  return {
    bulkId: newId(),
    docType: "Factura",
    folio: "",
    provider: "",
    rut: "",
    po: "",
    employee: "",
    date: "",
    description,
    month: new Date().getMonth(),
    amount: 0,
    initiativeId: "jardin",
    sourceFile: fileName,
    rawText: "",
  };
}

function monthIndexFromText(text) {
  const normalized = normalizeText(text).toLowerCase();
  return MONTHS.findIndex((month) => normalized.includes(normalizeText(month).toLowerCase()));
}

function dateTextToInput(text) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(text || "").trim())) return String(text).trim();
  const match = normalizeText(text).match(/([0-9]{1,2})\s+de?\s*([A-Za-z]+)\s+de?\s*([0-9]{4})|([0-9]{1,2})\s+([A-Za-z]+)\s+([0-9]{4})/i);
  if (!match) return "";
  const day = match[1] || match[4];
  const monthName = match[2] || match[5];
  const year = match[3] || match[6];
  const month = MONTHS.findIndex((item) => normalizeText(item).toLowerCase() === monthName.toLowerCase());
  if (month < 0) return "";
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function extractByRegex(text, regex, fallback = "") {
  const match = text.match(regex);
  return match ? match[1].trim() : fallback;
}

function documentNumberFromText(text, isMemo) {
  if (isMemo) {
    return extractByRegex(text, /MEMOR[ÃA]NDUM\s*(?:N[Â°Âºo.]*)?\s*([0-9]+\s*\/\s*[0-9]{4})/i)
      || extractByRegex(text, /ID\s*DOC\s*:?\s*([0-9]+)/i);
  }
  return extractByRegex(text, /FACTURA[\s\S]{0,240}?(?:N[Â°Âºï¿½]?\s*|N\s+)([0-9]{3,})\s*S\.?\s*I\.?\s*I/i)
    || extractByRegex(text, /FACTURA[\s\S]{0,180}?ELECTR\S{0,4}NICA\s*(?:N[Â°Âºï¿½]?\s*|N\s+)([0-9]{3,})/i)
    || extractByRegex(text, /ELECTR\S{0,4}NICA\s*(?:N[Â°Âºï¿½]?\s*|N\s+)([0-9]{3,})/i)
    || extractByRegex(text, /(?:Folio|NRO\.?)\s*:?\s*([0-9]{3,})/i);
}

function analyzeText(text, sourceFile = "") {
  const rawLines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const clean = text.replace(/\s+/g, " ").trim();
  const normalized = normalizeText(clean).toLowerCase();
  const isMemo = normalized.includes("memorandum") || normalized.includes("modalidad excepcional");
  const docType = isMemo ? "ResoluciÃ³n" : "Factura";
  const folio = documentNumberFromText(clean, isMemo);
  const provider = isMemo
    ? "Pago excepcional sala cuna"
    : providerFromText(clean)
      || extractByRegex(clean, /(?:Observaciones\s+)?(.+?)\s+(?:ENSENANZA|JARDIN INFANTIL|JARDÃN INFANTIL|SALA CUNA|R\.?U\.?T\.?)/i)
      || rawLines.find((line) => !/^observaciones$/i.test(line))
      || clean.split(/R\.U\.T\./i)[0].trim();
  const rut = extractByRegex(clean, /R\.?U\.?T\.?:?\s*([0-9.\-Kk]+)/i);
  const po = extractByRegex(clean, /Orden De Compra\s+([0-9A-Z\-]+)/i)
    || extractByRegex(clean, /ORDEN DE COMPRA\s+([0-9A-Z\-]+)/i);
  const employee = extractByRegex(clean, /FUNC\.?\s*([A-ZÃÃ‰ÃÃ“ÃšÃ‘ ]+?)(?=\s+Monto|\s+\$|$)/i)
    || extractByRegex(clean, /HIJO\/A DE\s+([A-ZÃÃ‰ÃÃ“ÃšÃ‘ ]+?)(?=\s+Monto|\s+\$|$)/i);
  const date = extractByRegex(clean, /Fecha Emis\.?\s*:?\s*([0-9]{1,2}\s+[A-ZÃÃ‰ÃÃ“ÃšÃ‘]+\s+[0-9]{4})/i) || extractByRegex(clean, /Fecha:\s*SANTIAGO,\s*([^\.]+)/i);
  const description = extractByRegex(clean, /(MENSUALIDAD[^$]+?)(?:[0-9]{2,3}\.?[0-9]{3}|Observaciones|Montos Totales)/i);
  const serviceMonthText = extractByRegex(clean, /MENSUALIDAD\s+([A-ZÃÃ‰ÃÃ“ÃšÃ‘]+)/i);
  const serviceMonth = monthIndexFromText(`${serviceMonthText} ${description}`);
  const memoMonth = monthIndexFromText(clean.match(/mes\s+[a-zÃ¡Ã©Ã­Ã³ÃºÃ±]+/i)?.[0] || "");
  const issueMonth = monthIndexFromText(date);
  const month = serviceMonth >= 0 ? serviceMonth : memoMonth >= 0 ? memoMonth : issueMonth;
  const total = isMemo
    ? [...clean.matchAll(/\$ ?([0-9.]+)/g)].reduce((sum, match) => sum + parseMoney(match[1]), 0)
    : parseMoney(
        extractByRegex(clean, /Monto Total\s*\$ ?([0-9.]+)/i)
        || extractByRegex(clean, /Valor a Pagar\s*\$ ?([0-9.]+)/i)
        || extractByRegex(clean, /(?:Monto Exento|Exento)\s*\$ ?([0-9.]+)/i)
      );
  const initiativeId = isMemo ? "monto-directo" : providerByName(provider)?.type ? initiativeFromProviderType(providerByName(provider).type) : "jardin";

  return {
    docType,
    folio,
    provider,
    rut,
    po,
    employee,
    date,
    description,
    month: month >= 0 ? month : new Date().getMonth(),
    amount: total,
    initiativeId,
    sourceFile,
    rawText: clean,
  };
}

function memoDefaultMonth(clean, date = "") {
  const matter = extractByRegex(clean, /Materia\s*:?\s*([\s\S]{0,360}?)(?:Fecha|Por medio|Junto con|Detalle|Beneficiaria|$)/i);
  const benefitMonth = extractByRegex(clean, /Beneficio\s+mes\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i);
  const headerMonth = monthIndexFromText(benefitMonth);
  if (headerMonth >= 0) return headerMonth;

  const matterMonths = matter ? [...matter.matchAll(/(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+de)?\s+2026/gi)] : [];
  if (matterMonths.length) {
    const month = monthIndexFromText(matterMonths[matterMonths.length - 1][1]);
    if (month >= 0) return month;
  }

  const anyMatterMonths = matter ? [...matter.matchAll(/(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/gi)] : [];
  if (anyMatterMonths.length) {
    const month = monthIndexFromText(anyMatterMonths[anyMatterMonths.length - 1][1]);
    if (month >= 0) return month;
  }

  return monthIndexFromText(date);
}

function parseMemoPayments(text, sourceFile = "") {
  const clean = text.replace(/\s+/g, " ").trim();
  const normalized = normalizeText(clean).toLowerCase();
  if (!normalized.includes("modalidad excepcional") && !normalized.includes("memorandum")) return [];

  const folio = documentNumberFromText(clean, true);
  const date = extractByRegex(clean, /Fecha:\s*SANTIAGO,\s*([^\.]+)/i);
  const defaultMonth = memoDefaultMonth(clean, date);
  const tableStart = normalized.indexOf("beneficiaria");
  const tableEnd = normalized.indexOf("cabe senalar") >= 0 ? normalized.indexOf("cabe senalar") : clean.length;
  const body = clean.slice(Math.max(0, tableStart), tableEnd);
  const entries = [];

  for (const amountMatch of body.matchAll(/\$\s*([0-9.]+)/g)) {
    const amount = parseMoney(amountMatch[1]);
    const before = body.slice(Math.max(0, amountMatch.index - 520), amountMatch.index);
    const monthMatches = [...before.matchAll(/Mes\s+([a-zÃ¡Ã©Ã­Ã³ÃºÃ±]+)\./gi)];
    const monthText = monthMatches.length ? monthMatches[monthMatches.length - 1][1] : "";
    const month = monthIndexFromText(monthText);
    const benefitMatches = [...before.matchAll(/Beneficio\s+mes\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/gi)];
    const benefitText = benefitMatches.length ? benefitMatches[benefitMatches.length - 1][1] : "";
    const benefitRowMonth = monthIndexFromText(benefitText);
    const effectiveMonth = month >= 0 ? month : benefitRowMonth >= 0 ? benefitRowMonth : defaultMonth;
    const rutMatches = [...before.matchAll(/(\d{1,2}\.\d{3}\.\d{3}-\s*[0-9Kk])/g)];
    const rutMatch = rutMatches[rutMatches.length - 1];
    if (!rutMatch || effectiveMonth < 0 || !amount) continue;

    const nameArea = before.slice(0, rutMatch.index).trim();
    const nameMatch = nameArea.match(/([A-ZÃÃ‰ÃÃ“ÃšÃ‘][A-Za-zÃÃ‰ÃÃ“ÃšÃ‘Ã¡Ã©Ã­Ã³ÃºÃ±.]+(?:\s+[A-ZÃÃ‰ÃÃ“ÃšÃ‘][A-Za-zÃÃ‰ÃÃ“ÃšÃ‘Ã¡Ã©Ã­Ã³ÃºÃ±.]+){1,5})\.?\s*$/);
    const beneficiary = (nameMatch ? nameMatch[1] : "Beneficiaria no detectada")
      .replace(/^Observaciones\s+/i, "")
      .replace(/\.+$/g, "")
      .replace(/\s+/g, " ")
      .trim();

    const afterAmount = body.slice(amountMatch.index + amountMatch[0].length, amountMatch.index + amountMatch[0].length + 90);
    const observation = extractByRegex(afterAmount, /^([^A-ZÃÃ‰ÃÃ“ÃšÃ‘]*?(?:Pago proporcional [a-zÃ¡Ã©Ã­Ã³ÃºÃ±]+|Feriado legal[^A-ZÃÃ‰ÃÃ“ÃšÃ‘]*)?)/i).trim();

    entries.push({
      docType: "ResoluciÃ³n",
      folio,
      provider: beneficiary,
      rut: rutMatch[1].replace(/\s+/g, ""),
      po: "",
      employee: beneficiary,
      date,
      description: `${monthText ? `Mes ${monthText}` : `Pago excepcional ${MONTHS[effectiveMonth]}`}${observation ? ` - ${observation}` : ""}`,
      month: effectiveMonth,
      amount,
      initiativeId: "monto-directo",
      sourceFile,
      rawText: clean,
    });
  }

  return entries;
}

function analyzeDocumentEntries(text, sourceFile = "") {
  const memoEntries = parseMemoPayments(text, sourceFile);
  return memoEntries.length ? memoEntries : [analyzeText(text, sourceFile)];
}

async function extractPdfText(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const latin = new TextDecoder("latin1").decode(bytes);
  const streamMatches = extractPdfStreams(bytes);
  const chunks = [];

  for (const match of streamMatches) {
    let content = "";
    if (/FlateDecode/i.test(match.header) && "DecompressionStream" in window) {
      try {
        const stream = new Blob([match.data]).stream().pipeThrough(new DecompressionStream("deflate"));
        const inflated = new Uint8Array(await new Response(stream).arrayBuffer());
        content = new TextDecoder("latin1").decode(inflated);
      } catch {
        content = "";
      }
    } else {
      content = new TextDecoder("latin1").decode(match.data);
    }
    if (content) chunks.push(content);
  }

  const joined = chunks.length ? chunks.join("\n") : latin;
  const literalText = [...joined.matchAll(/\(([^()]*)\)\s*Tj|\(([^()]*)\)\s*'/g)]
    .map((match) => match[1] || match[2] || "")
    .join(" ");
  const arrayText = [...joined.matchAll(/\[((?:.|\n)*?)\]\s*TJ/g)]
    .map((match) => extractPdfTextArray(match[1]))
    .join(" ");
  const hexText = [...joined.matchAll(/<([0-9A-Fa-f]{4,})>\s*Tj/g)]
    .map((match) => decodePdfHexText(match[1]))
    .join(" ");
  const actualText = [...joined.matchAll(/\/ActualText\s*<([0-9A-Fa-f]+)>/g)]
    .map((match) => decodePdfHexText(match[1], true))
    .join(" ");
  return `${actualText} ${literalText} ${arrayText} ${hexText}`.replace(/\\([()\\])/g, "$1").replace(/\s+/g, " ").trim();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function extractPdfTextsWithServer(files) {
  if (!location.protocol.startsWith("http")) return null;
  try {
    const payload = {
      files: await Promise.all(files.map(async (file) => ({
        name: file.name,
        data: await fileToBase64(file),
      }))),
    };
    const response = await fetch("/api/extract-pdfs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return null;
    const result = await response.json();
    return result.files || null;
  } catch {
    return null;
  }
}

function extractPdfStreams(bytes) {
  const text = new TextDecoder("latin1").decode(bytes);
  const streams = [];
  const streamMarker = "stream";
  const endMarker = "endstream";
  let searchFrom = 0;

  while (searchFrom < text.length) {
    const streamIndex = text.indexOf(streamMarker, searchFrom);
    if (streamIndex < 0) break;
    const headerStart = text.lastIndexOf("<<", streamIndex);
    const headerEnd = text.lastIndexOf(">>", streamIndex);
    const endIndex = text.indexOf(endMarker, streamIndex);
    if (headerStart < 0 || headerEnd < headerStart || endIndex < 0) break;

    let dataStart = streamIndex + streamMarker.length;
    if (text[dataStart] === "\r" && text[dataStart + 1] === "\n") dataStart += 2;
    else if (text[dataStart] === "\n" || text[dataStart] === "\r") dataStart += 1;

    let dataEnd = endIndex;
    if (text[dataEnd - 2] === "\r" && text[dataEnd - 1] === "\n") dataEnd -= 2;
    else if (text[dataEnd - 1] === "\n" || text[dataEnd - 1] === "\r") dataEnd -= 1;

    streams.push({
      header: text.slice(headerStart, headerEnd + 2),
      data: bytes.slice(dataStart, dataEnd),
    });
    searchFrom = endIndex + endMarker.length;
  }
  return streams;
}

function extractPdfTextArray(value) {
  const literal = [...value.matchAll(/\(([^()]*)\)/g)].map((part) => part[1]).join("");
  const hex = [...value.matchAll(/<([0-9A-Fa-f]{4,})>/g)].map((part) => decodePdfHexText(part[1])).join("");
  return `${literal} ${hex}`;
}

function decodePdfHexText(hex, preferUnicode = false) {
  const clean = hex.replace(/\s+/g, "");
  if (!clean) return "";
  const direct = decodeHexAsUtf16(clean);
  if (preferUnicode || clean.startsWith("FEFF")) return direct;
  const shifted = decodeHexWithCommonPdfOffset(clean);
  return scoreDecodedText(shifted) > scoreDecodedText(direct) ? shifted : direct;
}

function decodeHexAsUtf16(hex) {
  const chars = [];
  for (let index = hex.startsWith("FEFF") ? 4 : 0; index + 3 < hex.length; index += 4) {
    const code = parseInt(hex.slice(index, index + 4), 16);
    if (code > 0) chars.push(String.fromCharCode(code));
  }
  return chars.join("");
}

function decodeHexWithCommonPdfOffset(hex) {
  const chars = [];
  for (let index = 0; index + 3 < hex.length; index += 4) {
    const code = parseInt(hex.slice(index, index + 4), 16);
    const shifted = code + 0x1d;
    if (shifted >= 32 && shifted <= 255) chars.push(String.fromCharCode(shifted));
  }
  return chars.join("");
}

function scoreDecodedText(value) {
  return [...String(value || "")].reduce((score, char) => {
    if (/[A-Za-zÃÃ‰ÃÃ“ÃšÃ‘Ã¡Ã©Ã­Ã³ÃºÃ±0-9]/.test(char)) return score + 2;
    if (/\s|[.$:;,\-\/]/.test(char)) return score + 1;
    return score - 1;
  }, 0);
}

function renderDocumentResult(data) {
  lastDocumentData = data;
  const fields = [
    ["Tipo", data.docType],
    ["NÃºmero documento", data.folio || "No detectado"],
    ["Proveedor/persona", data.provider || "No detectado"],
    ["RUT", data.rut || "No detectado"],
    ["Orden de compra", data.po || "No detectada"],
    ["Funcionario/a", data.employee || "No detectado"],
    ["Mes sugerido", MONTHS[data.month] || "No detectado"],
    ["Monto detectado", money.format(data.amount || 0)],
  ];
  document.querySelector("#documentResult").innerHTML = fields.map(([label, value]) => `
    <div class="doc-field"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function documentNotes(data) {
  return [
    data.po ? `OC ${data.po}` : "",
    data.employee ? `Funcionario/a: ${data.employee}` : "",
    data.rut ? `RUT: ${data.rut}` : "",
    data.sourceFile ? `Archivo: ${data.sourceFile}` : "",
    data.description ? `Detalle: ${data.description}` : "",
  ].filter(Boolean).join(" | ");
}

function fillExpenseFormFromDocument(data) {
  clearExpenseEditMode();
  document.querySelector("#initiative").value = data.initiativeId;
  document.querySelector("#month").value = String(data.month);
  document.querySelector("#docType").value = data.docType;
  document.querySelector("#docNumber").value = data.folio || `${data.docType.toUpperCase()}-SIN-NUMERO`;
  document.querySelector("#docDate").value = dateTextToInput(data.date) || document.querySelector("#docDate").value;
  document.querySelector("#vendor").value = data.provider || data.employee || "";
  document.querySelector("#amount").value = data.amount || "";
  document.querySelector("#notes").value = documentNotes(data);
  renderPaymentRule();
}

function setExpenseFormMode() {
  const isEditing = Boolean(editingExpenseId);
  const submit = document.querySelector("#expenseSubmit");
  const cancel = document.querySelector("#cancelExpenseEdit");
  const status = document.querySelector("#expenseEditStatus");
  if (submit) submit.textContent = isEditing ? "Actualizar registro" : "Guardar registro";
  if (cancel) cancel.hidden = !isEditing;
  if (status) {
    status.textContent = isEditing
      ? "EstÃ¡s editando un movimiento guardado. Al actualizar no se crearÃ¡ un duplicado."
      : "";
  }
}

function clearExpenseEditMode() {
  editingExpenseId = null;
  setExpenseFormMode();
}

function fillExpenseFormFromExpense(expense) {
  editingExpenseId = expense.id;
  document.querySelector("#initiative").value = expense.initiativeId;
  document.querySelector("#month").value = String(expense.month);
  document.querySelector("#docType").value = expense.docType;
  document.querySelector("#docNumber").value = expense.docNumber;
  document.querySelector("#docDate").value = expense.date;
  document.querySelector("#vendor").value = expense.vendor;
  document.querySelector("#amount").value = Number(expense.amount || 0);
  document.querySelector("#notes").value = expense.notes || "";
  setExpenseFormMode();
  renderPaymentRule();
}

function expenseFromForm(existing = {}) {
  return {
    ...existing,
    id: existing.id || newId(),
    initiativeId: document.querySelector("#initiative").value,
    month: Number(document.querySelector("#month").value),
    docType: document.querySelector("#docType").value,
    docNumber: document.querySelector("#docNumber").value.trim(),
    date: document.querySelector("#docDate").value,
    vendor: document.querySelector("#vendor").value.trim(),
    amount: Number(document.querySelector("#amount").value),
    notes: document.querySelector("#notes").value.trim(),
  };
}

function saveExpenseFromDocument(data) {
  clearExpenseEditMode();
  const expense = {
    id: newId(),
    initiativeId: data.initiativeId,
    month: Number(data.month),
    docType: data.docType,
    docNumber: data.folio || `${data.docType.toUpperCase()}-SIN-NUMERO`,
    date: dateTextToInput(data.date) || new Date().toISOString().slice(0, 10),
    vendor: data.provider || data.employee || "Documento sin proveedor detectado",
    amount: Number(data.amount || 0),
    notes: documentNotes(data),
    sourceFile: data.sourceFile || "",
    sourceText: data.rawText || "",
  };
  expenses.push(expense);
  saveExpenses();
  fillExpenseFormFromDocument(data);
  renderAll();
  document.querySelector("#detalle").scrollIntoView({ behavior: "smooth" });
}

function documentDuplicate(data) {
  const docNumber = String(data.folio || "").trim().toLowerCase();
  const vendor = String(data.provider || data.employee || "").trim().toLowerCase();
  if (!docNumber || !vendor) return false;
  const alreadySaved = expenses.some((item) =>
    String(item.docNumber || "").trim().toLowerCase() === docNumber
    && String(item.vendor || "").trim().toLowerCase() === vendor
    && Number(item.month) === Number(data.month)
    && Number(item.amount || 0) === Number(data.amount || 0)
  );
  const repeatedInBatch = bulkDocuments.some((item) =>
    item.bulkId !== data.bulkId
    && String(item.folio || "").trim().toLowerCase() === docNumber
    && String(item.provider || item.employee || "").trim().toLowerCase() === vendor
    && Number(item.month) === Number(data.month)
    && Number(item.amount || 0) === Number(data.amount || 0)
  );
  return alreadySaved || repeatedInBatch;
}

function documentStatus(data) {
  if (documentDuplicate(data)) return "Duplicado";
  if (!data.folio || !data.provider || !data.amount || data.amount <= 0) return "Revisar";
  return "Listo";
}

function statusClass(status) {
  if (status === "Listo") return "status-ready";
  if (status === "Duplicado") return "status-duplicate";
  return "status-review";
}

function renderBulkDocuments() {
  const readyCount = bulkDocuments.filter((item) => documentStatus(item) === "Listo").length;
  const selectedReadyCount = bulkDocuments.filter((item) => item.selected && documentStatus(item) === "Listo").length;
  const selectButton = document.querySelector("#selectAllBulkDocuments");
  if (selectButton) {
    selectButton.textContent = readyCount > 0 && selectedReadyCount === readyCount ? "Deseleccionar todos" : "Seleccionar todos";
  }
  const rows = bulkDocuments.map((data) => {
    const status = documentStatus(data);
    const canSelect = status === "Listo";
    return `
      <tr>
        <td><input class="bulk-check" type="checkbox" data-id="${data.bulkId}" ${data.selected && canSelect ? "checked" : ""} ${canSelect ? "" : "disabled"} /></td>
        <td><span class="status-pill ${statusClass(status)}">${status}</span></td>
        <td>${data.sourceFile || "Texto pegado"}</td>
        <td>${MONTHS[data.month] || "No detectado"}</td>
        <td>${byInitiative(data.initiativeId)?.shortName || "No detectada"}</td>
        <td>${data.docType}<br><strong>${data.folio || "Sin nÃºmero"}</strong></td>
        <td>${data.provider || data.employee || "No detectado"}<br><small>${data.description || data.employee || ""}</small></td>
        <td>${money.format(data.amount || 0)}</td>
        <td>
          <button class="mini-btn" type="button" data-action="review" data-id="${data.bulkId}">Revisar</button>
          <button class="delete-btn" type="button" data-action="remove" data-id="${data.bulkId}">Quitar</button>
        </td>
      </tr>
    `;
  }).join("");
  document.querySelector("#bulkDocumentRows").innerHTML = rows
    || `<tr><td colspan="9">Selecciona varias facturas o resoluciones PDF para analizarlas en lote.</td></tr>`;
}

function saveBulkDocuments() {
  const valid = bulkDocuments.filter((data) => data.selected && documentStatus(data) === "Listo");
  if (!valid.length) {
    alert("No hay documentos seleccionados y vÃ¡lidos para guardar. Revisa duplicados, documentos incompletos o marca los check correspondientes.");
    return;
  }
  valid.forEach((data) => {
    expenses.push({
      id: newId(),
      initiativeId: data.initiativeId,
      month: Number(data.month),
      docType: data.docType,
      docNumber: data.folio || `${data.docType.toUpperCase()}-SIN-NUMERO`,
      date: dateTextToInput(data.date) || new Date().toISOString().slice(0, 10),
      vendor: data.provider || data.employee || "Documento sin proveedor detectado",
      amount: Number(data.amount || 0),
      notes: documentNotes(data),
      sourceFile: data.sourceFile || "",
      sourceText: data.rawText || "",
    });
  });
  saveExpenses();
  bulkDocuments = bulkDocuments.filter((data) => !valid.some((saved) => saved.bulkId === data.bulkId));
  renderAll();
  renderBulkDocuments();
  document.querySelector("#detalle").scrollIntoView({ behavior: "smooth" });
}

function renderRows() {
  const search = document.querySelector("#searchBox").value.trim().toLowerCase();
  const rows = expenses
    .filter((item) => {
      const text = `${item.docType} ${item.docNumber} ${item.vendor} ${item.notes} ${byInitiative(item.initiativeId)?.shortName}`.toLowerCase();
      return !search || text.includes(search);
    })
    .sort((a, b) => Number(a.month) - Number(b.month) || String(a.date).localeCompare(String(b.date)));

  document.querySelector("#expenseRows").innerHTML = rows.length
    ? rows.map((item) => `
        <tr>
          <td>${MONTHS[item.month]}</td>
          <td>${byInitiative(item.initiativeId).shortName}</td>
          <td><strong>${item.docType}</strong><br>${item.docNumber}</td>
          <td>${item.date}</td>
          <td>${item.vendor}<br><small>${item.notes || ""}</small></td>
          <td>${money.format(item.amount)}</td>
          <td>
            <div class="row-actions">
              <button class="edit-btn" type="button" data-action="edit" data-id="${item.id}">Editar</button>
              <button class="delete-btn" type="button" data-action="delete" data-id="${item.id}">Eliminar</button>
            </div>
          </td>
        </tr>
      `).join("")
    : `<tr><td colspan="7">AÃºn no hay registros. Ingresa una factura o resoluciÃ³n para comenzar el seguimiento.</td></tr>`;
}

function renderProjectionRows() {
  if (!document.querySelector("#projectionRows")) return;
  document.querySelector("#projectionRows").innerHTML = projections.length
    ? projections.map((item) => {
        const extraTotal = Number(item.extraCount || 0) * Number(item.extraAmount || 0);
        const activeMonths = projectionActiveMonths(item);
        const paidMonths = projectionPaidMonths(item);
        return `
          <tr>
            <td>${byInitiative(item.initiativeId).shortName}<br><small>${item.scenario}</small></td>
            <td>${item.provider}<br><small>${item.notes || ""}</small></td>
            <td>${MONTHS[item.startMonth]} a ${MONTHS[item.endMonth]}<br><small>Activos: ${activeMonths.length ? activeMonths.map((month) => MONTHS[month].slice(0, 3)).join(", ") : "Sin meses pendientes"}</small></td>
            <td>${money.format(item.monthlyAmount)}</td>
            <td>${Number(item.extraCount || 0)} x ${money.format(item.extraAmount || 0)}<br><small>${paidMonths.length ? `Pagado real: ${paidMonths.map((month) => MONTHS[month].slice(0, 3)).join(", ")}` : money.format(extraTotal)}</small></td>
            <td>${money.format(projectionTotal(item))}</td>
            <td><button class="delete-btn" type="button" data-id="${item.id}">Eliminar</button></td>
          </tr>
        `;
      }).join("")
    : `<tr><td colspan="7">AÃºn no hay proyecciones. Carga proveedores, meses futuros y margen extra para estimar el cierre anual.</td></tr>`;
}

function renderProjectionGrid() {
  const container = document.querySelector("#projectionGridSections");
  if (!container) return;

  const renderRows = (projectionProviders) => projectionProviders.map((provider) => {
    const initiative = byInitiative(providerInitiative(provider));
    let rowTotal = 0;
    const cells = MONTHS.map((monthName, month) => {
      const key = projectionGridKey(provider.id, month);
      const realPaid = providerMonthPaid(provider, month);
      const realAmount = providerMonthPaidAmount(provider, month);
      const manualPaid = projectionCellIsPaid(provider, month) && !realPaid;
      const inRange = providerMonthIsWithinPayments(provider, month);
      const value = Number(projectionGrid[key] || 0);
      if (!realPaid && !manualPaid && inRange) rowTotal += value;
      return `
        <td class="${realPaid ? "projection-real" : manualPaid ? "projection-paid" : !inRange ? "projection-out" : ""}" data-real-paid="${realPaid ? "true" : "false"}">
          <label class="projection-cell">
            <span>
              <input class="projection-paid-check" type="checkbox" data-provider-id="${provider.id}" data-month="${month}" ${realPaid || manualPaid ? "checked" : ""} ${realPaid || !inRange ? "disabled" : ""} title="${realPaid ? "Pago real cargado desde registros" : inRange ? "Marcar como pagado manual" : "Fuera de rango de pago"}" />
              <small>${realPaid ? "Real" : manualPaid ? "Pagado" : "Proy."}</small>
            </span>
            <input class="projection-month-input" type="number" min="0" step="1" data-provider-id="${provider.id}" data-month="${month}" value="${inRange ? (realPaid ? realAmount || "" : value || "") : ""}" ${realPaid || !inRange ? "disabled" : ""} placeholder="${!inRange ? "-" : realPaid ? "Real" : "$"}" />
          </label>
        </td>
      `;
    }).join("");
    return `
      <tr>
        <td><strong>${provider.name}</strong><br><small>${initiative?.shortName || ""}${provider.employee ? ` Â· ${provider.employee}` : ""}</small></td>
        ${cells}
        <td><strong>${money.format(rowTotal)}</strong></td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="14">No hay proveedores suficientes para armar la matriz de proyecciÃ³n.</td></tr>`;

  const projectionProviders = visibleProjectionProviders();
  const groups = INITIATIVES.map((initiative) => {
    const providersForInitiative = projectionProviders.filter((provider) => providerInitiative(provider) === initiative.id);
    const total = providersForInitiative.reduce((sum, provider) => sum + MONTHS.reduce((monthSum, _, month) => {
      const realPaid = providerMonthPaid(provider, month);
      const manualPaid = projectionCellIsPaid(provider, month) && !realPaid;
      const inRange = providerMonthIsWithinPayments(provider, month);
      return monthSum + (!realPaid && !manualPaid && inRange ? projectionGridValue(provider, month) : 0);
    }, 0), 0);
    return { initiative, providers: providersForInitiative, total };
  });

  container.innerHTML = groups.map(({ initiative, providers, total }, index) => `
    <details class="projection-grid-section" ${index === 0 ? "open" : ""}>
      <summary>
        <span>
          <strong>${initiative.shortName}</strong>
          <small>${providers.length} proveedor${providers.length === 1 ? "" : "es"} o escenario${providers.length === 1 ? "" : "s"}</small>
        </span>
        <b>${money.format(total)}</b>
      </summary>
      <div class="table-wrap compact-table projection-grid-wrap">
        <table>
          <thead>
            <tr>
              <th>Proveedor/persona</th>
              ${MONTHS.map((month) => `<th>${month.slice(0, 3)}</th>`).join("")}
              <th>Total proyectado</th>
            </tr>
          </thead>
          <tbody>${renderRows(providers)}</tbody>
        </table>
      </div>
    </details>
  `).join("");
}

function renderProjectionSummary() {
  const budget = INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0);
  const spent = expenseTotal();
  const forecast = projectedTotal();
  const close = spent + forecast;
  const balance = budget - close;
  const estimatedCells = visibleProjectionProviders().reduce((count, provider) =>
    count + MONTHS.filter((_, month) =>
      providerMonthIsWithinPayments(provider, month)
      && !projectionCellIsPaid(provider, month)
      && projectionGridValue(provider, month) > 0
    ).length, 0);
  const riskInitiative = INITIATIVES
    .map((item) => {
      const itemClose = expenseTotal(item.id) + projectedTotal(item.id);
      return { item, ratio: totalBudget(item) ? itemClose / totalBudget(item) : 0 };
    })
    .sort((a, b) => b.ratio - a.ratio)[0];

  document.querySelector("#projectionSummary").innerHTML = `
    <article class="projection-card">
      <span>ProyecciÃ³n cargada</span>
      <strong>${money.format(forecast)}</strong>
      <small>${estimatedCells} mes${estimatedCells === 1 ? "" : "es"} estimado${estimatedCells === 1 ? "" : "s"} en la matriz.</small>
    </article>
    <article class="projection-card">
      <span>Cierre anual estimado</span>
      <strong>${money.format(close)}</strong>
      <small>Incluye gasto real mÃ¡s proveedores, personas y mÃ¡rgenes extra.</small>
    </article>
    <article class="projection-card">
      <span>Saldo al cierre</span>
      <strong>${money.format(balance)}</strong>
      <small>${balance >= 0 ? "Escenario dentro del presupuesto." : "Escenario requiere ajuste presupuestario."} Mayor presiÃ³n: ${riskInitiative.item.shortName}.</small>
    </article>
  `;
}

function suggestedPaymentAmount() {
  const initiativeId = document.querySelector("#initiative").value;
  const documentAmount = Number(document.querySelector("#amount").value || 0);
  const ufValue = Number(document.querySelector("#ufValue").value || 0);
  if (initiativeId === "jardin") return Math.round(ufValue * 4.9);
  if (initiativeId === "monto-directo") return 357000;
  return documentAmount;
}

function renderPaymentRule() {
  const initiativeId = document.querySelector("#initiative").value;
  const ruleTitle = document.querySelector("#paymentRuleTitle");
  const detail = document.querySelector("#paymentRuleDetail");
  const suggested = suggestedPaymentAmount();

  if (initiativeId === "jardin") {
    ruleTitle.textContent = "JardÃ­n infantil: 4,9 UF";
    detail.textContent = "Ingresa la UF del Ãºltimo dÃ­a del mes cobrado. La app sugerirÃ¡ 4,9 x UF.";
  } else if (initiativeId === "sala-cuna") {
    ruleTitle.textContent = "Sala cuna: total factura";
    detail.textContent = "No hay tope. Se paga el total del documento registrado.";
  } else {
    ruleTitle.textContent = "Monto directo: $357.000";
    detail.textContent = "Monto fijo mensual para modalidad excepcional, salvo proporcionalidad informada.";
  }
  document.querySelector("#suggestedAmount").value = suggested ? money.format(suggested) : "";
}

function renderSummary() {
  renderExecutiveReport();
  const html = INITIATIVES.map((item) => {
    const budget = totalBudget(item);
    const spent = expenseTotal(item.id);
    const forecast = projectedTotal(item.id);
    const close = spent + forecast;
    const balance = budget - close;
    const topMonthIndex = monthlyExpense(item.id).reduce((best, value, index, array) => value > array[best] ? index : best, 0);
    const message = spent === 0 && forecast === 0
      ? "Sin gasto real ni proyecciÃ³n cargada. El presupuesto sigue Ã­ntegro y listo para contrastar con prÃ³ximas facturas o resoluciones."
      : `Cierre estimado de ${Math.round((close / budget) * 100)}%. Mayor gasto real registrado en ${MONTHS[topMonthIndex]}. ProyecciÃ³n futura: ${money.format(forecast)}. Saldo estimado: ${money.format(balance)}.`;
    return `
      <article class="summary-item">
        <strong>${item.shortName}</strong>
        <p>${message}</p>
      </article>
    `;
  }).join("");
  document.querySelector("#executiveSummary").innerHTML = html;
}

function initiativeDecision(item) {
  const budget = totalBudget(item);
  const spent = expenseTotal(item.id);
  const forecast = projectedTotal(item.id);
  const close = spent + forecast;
  const ratio = budget ? close / budget : 0;
  if (ratio > 1) return { label: "Solicitar ajuste", className: "risk", text: "El cierre estimado supera el presupuesto disponible." };
  if (ratio >= 0.9) return { label: "Revisar", className: "warn", text: "Queda poco margen para nuevos gastos." };
  if (ratio <= 0.55 && new Date().getMonth() >= 6) return { label: "Evaluar rebaja", className: "ok", text: "La ejecuciÃ³n proyectada es baja frente al presupuesto anual." };
  return { label: "Mantener", className: "ok", text: "La ejecuciÃ³n estimada se mantiene dentro del marco." };
}

function providerReportRows() {
  return providers.map((provider) => {
    const providerExpenses = expensesForProvider(provider);
    const total = providerExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const paidMonths = [...new Set(providerExpenses.map((expense) => Number(expense.month)))].sort((a, b) => a - b);
    const expected = expectedMonthsForProvider(provider, Number(document.querySelector("#providerControlMonth").value || new Date().getMonth()));
    const missing = expected.filter((month) => !paidMonths.includes(month));
    return { provider, providerExpenses, total, paidMonths, expected, missing };
  });
}

function executiveAlerts() {
  const alerts = [];
  INITIATIVES.forEach((item) => {
    const budget = totalBudget(item);
    const spent = expenseTotal(item.id);
    const forecast = projectedTotal(item.id);
    const close = spent + forecast;
    if (budget && close > budget) {
      alerts.push({ level: "risk", title: item.shortName, text: `Cierre estimado supera presupuesto en ${money.format(close - budget)}.` });
    } else if (budget && close / budget >= 0.9) {
      alerts.push({ level: "warn", title: item.shortName, text: `EjecuciÃ³n estimada en ${Math.round((close / budget) * 100)}%. Revisar margen.` });
    }
  });

  providerReportRows().forEach((row) => {
    if (row.missing.length) {
      alerts.push({
        level: "warn",
        title: row.provider.name,
        text: `Meses pendientes: ${row.missing.map((month) => MONTHS[month].slice(0, 3)).join(", ")}.`,
      });
    }
    const end = row.provider.endDate ? new Date(`${row.provider.endDate}T00:00:00`) : null;
    if (end && end.getFullYear() === 2026) {
      const today = new Date();
      const days = Math.ceil((end - today) / 86400000);
      if (days >= 0 && days <= 60) {
        alerts.push({ level: "warn", title: row.provider.name, text: `Derecho termina pronto: ${row.provider.endDate}.` });
      }
    }
    if (row.provider.requiresF30 === "SÃƒÂ­" && !String(row.provider.f30 || "").trim()) {
      alerts.push({ level: "risk", title: row.provider.name, text: "Requiere F30-1, pero falta indicar quÃƒÂ© pedir." });
    }
  });

  const duplicateKeys = new Set();
  expenses.forEach((expense) => {
    const key = `${expense.docType}|${expense.docNumber}|${expense.vendor}|${expense.month}|${expense.amount}`.toLowerCase();
    if (duplicateKeys.has(key)) {
      alerts.push({ level: "risk", title: "Posible duplicado", text: `${expense.docType} ${expense.docNumber} - ${expense.vendor}.` });
    }
    duplicateKeys.add(key);
  });

  return alerts.slice(0, 12);
}

function executiveReportText() {
  const budget = INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0);
  const spent = expenseTotal();
  const forecast = projectedTotal();
  const close = spent + forecast;
  const balance = budget - close;
  const risk = INITIATIVES.map((item) => ({
    name: item.shortName,
    decision: initiativeDecision(item),
    close: expenseTotal(item.id) + projectedTotal(item.id),
    budget: totalBudget(item),
  })).sort((a, b) => (b.budget ? b.close / b.budget : 0) - (a.budget ? a.close / a.budget : 0))[0];
  const alerts = executiveAlerts();
  return [
    "Resumen ejecutivo control sala cuna y jardÃƒÂ­n 2026",
    `Presupuesto anual: ${money.format(budget)}.`,
    `Gasto real registrado: ${money.format(spent)}.`,
    `ProyecciÃƒÂ³n vigente: ${money.format(forecast)}.`,
    `Cierre estimado: ${money.format(close)} (${balance >= 0 ? "saldo" : "dÃƒÂ©ficit"} ${money.format(Math.abs(balance))}).`,
    `Mayor atenciÃƒÂ³n: ${risk.name} - ${risk.decision.label}.`,
    alerts.length ? `Alertas principales: ${alerts.slice(0, 5).map((item) => `${item.title}: ${item.text}`).join(" | ")}` : "Sin alertas crÃƒÂ­ticas registradas.",
  ].join("\n");
}

function renderExecutiveReport() {
  const budget = INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0);
  const spent = expenseTotal();
  const forecast = projectedTotal();
  const close = spent + forecast;
  const balance = budget - close;
  const execution = budget ? Math.round((close / budget) * 100) : 0;
  const state = close > budget ? { text: "Requiere ajuste", className: "risk" } : execution >= 90 ? { text: "AtenciÃƒÂ³n", className: "warn" } : { text: "Controlado", className: "ok" };

  document.querySelector("#executiveReportCards").innerHTML = `
    <article class="projection-card"><span>Estado general</span><strong><span class="badge ${state.className}">${state.text}</span></strong><small>Cierre estimado al ${execution}% del presupuesto anual.</small></article>
    <article class="projection-card"><span>Real + proyecciÃƒÂ³n</span><strong>${money.format(close)}</strong><small>Real ${money.format(spent)} + proyecciÃƒÂ³n ${money.format(forecast)}.</small></article>
    <article class="projection-card"><span>Saldo estimado</span><strong>${money.format(balance)}</strong><small>${balance >= 0 ? "Disponible para reasignar o cubrir variaciones." : "Monto que conviene solicitar como ajuste."}</small></article>
  `;

  document.querySelector("#decisionMatrix").innerHTML = INITIATIVES.map((item) => {
    const decision = initiativeDecision(item);
    const budgetItem = totalBudget(item);
    const spent = expenseTotal(item.id);
    const forecast = projectedTotal(item.id);
    const close = spent + forecast;
    return `
      <article class="decision-item">
        <span class="badge ${decision.className}">${decision.label}</span>
        <div><strong>${item.shortName}</strong><small>${decision.text}</small></div>
        <b>${Math.round((close / budgetItem) * 100)}%</b>
      </article>
    `;
  }).join("");

  const alerts = executiveAlerts();
  document.querySelector("#executiveAlerts").innerHTML = alerts.length
    ? alerts.map((alert) => `<article class="alert-item ${alert.level}"><strong>${alert.title}</strong><span>${alert.text}</span></article>`).join("")
    : `<article class="alert-item ok"><strong>Sin alertas</strong><span>No hay riesgos relevantes con la informaciÃƒÂ³n cargada.</span></article>`;

  const select = document.querySelector("#providerReportSelect");
  const selected = select.value || providers[0]?.id || "";
  select.innerHTML = providers
    .map((provider) => `<option value="${provider.id}" ${provider.id === selected ? "selected" : ""}>${provider.name}</option>`)
    .join("");
  renderProviderReportCard();
  document.querySelector("#executiveReportText").value = executiveReportText();
}

function renderProviderReportCard() {
  const providerId = document.querySelector("#providerReportSelect").value || providers[0]?.id;
  const row = providerReportRows().find((item) => item.provider.id === providerId);
  if (!row) {
    document.querySelector("#providerReportCard").innerHTML = "Sin proveedor seleccionado.";
    return;
  }
  const lastExpense = [...row.providerExpenses].sort((a, b) => Number(b.month) - Number(a.month) || String(b.date).localeCompare(String(a.date)))[0];
  document.querySelector("#providerReportCard").innerHTML = `
    <div class="doc-field"><span>Estado</span><strong>${row.provider.status}</strong></div>
    <div class="doc-field"><span>Pagos</span><strong>${row.provider.startDate || "Sin inicio"} a ${row.provider.endDate || "Sin tÃƒÂ©rmino"}</strong></div>
    <div class="doc-field"><span>Total pagado</span><strong>${money.format(row.total)}</strong></div>
    <div class="doc-field"><span>Meses pagados</span><strong>${row.paidMonths.length ? row.paidMonths.map((month) => MONTHS[month].slice(0, 3)).join(", ") : "Sin pagos"}</strong></div>
    <div class="doc-field"><span>Pendientes</span><strong>${row.missing.length ? row.missing.map((month) => MONTHS[month].slice(0, 3)).join(", ") : "Sin pendientes"}</strong></div>
    <div class="doc-field"><span>F30-1</span><strong>${row.provider.requiresF30 || "No"}${row.provider.f30 ? ` - ${row.provider.f30}` : ""}</strong></div>
    <div class="doc-field"><span>ÃƒÅ¡ltimo pago</span><strong>${lastExpense ? `${MONTHS[lastExpense.month]} ${money.format(lastExpense.amount)}` : "Sin registro"}</strong></div>
  `;
}

function renderRows() {
  const search = document.querySelector("#searchBox").value.trim().toLowerCase();
  const rows = expenses
    .filter((item) => {
      const text = `${item.docType} ${item.docNumber} ${item.vendor} ${item.notes} ${byInitiative(item.initiativeId)?.shortName}`.toLowerCase();
      return !search || text.includes(search);
    })
    .sort((a, b) => Number(a.month) - Number(b.month) || String(a.date).localeCompare(String(b.date)));

  if (!rows.length) {
    document.querySelector("#expenseSections").innerHTML = `
      <div class="empty-state">Aun no hay registros. Ingresa una factura o resolucion para comenzar el seguimiento.</div>
    `;
    return;
  }

  const groups = rows.reduce((map, item) => {
    const key = item.vendor || "Sin proveedor/persona";
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
    return map;
  }, new Map());

  document.querySelector("#expenseSections").innerHTML = [...groups.entries()].map(([vendor, items], index) => {
    const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const paidMonths = [...new Set(items.map((item) => Number(item.month)))]
      .sort((a, b) => a - b)
      .map((month) => MONTHS[month].slice(0, 3))
      .join(", ");
    const last = [...items].sort((a, b) => Number(b.month) - Number(a.month) || String(b.date).localeCompare(String(a.date)))[0];
    const initiatives = [...new Set(items.map((item) => byInitiative(item.initiativeId)?.shortName).filter(Boolean))].join(", ");
    return `
      <details class="expense-group" ${index < 4 || search ? "open" : ""}>
        <summary>
          <div>
            <strong>${vendor}</strong>
            <small>${initiatives || "Sin iniciativa"} | ${items.length} pago${items.length === 1 ? "" : "s"} | Meses: ${paidMonths || "Sin meses"}</small>
          </div>
          <div class="expense-group-metrics">
            <span>${money.format(total)}</span>
            <small>Ultimo: ${last ? `${MONTHS[last.month]} ${money.format(last.amount)}` : "Sin registro"}</small>
          </div>
        </summary>
        <div class="table-wrap compact-table">
          <table>
            <thead>
              <tr>
                <th>Mes</th>
                <th>Iniciativa</th>
                <th>Documento</th>
                <th>Fecha</th>
                <th>Observacion</th>
                <th>Monto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item) => `
                <tr>
                  <td>${MONTHS[item.month]}</td>
                  <td>${byInitiative(item.initiativeId).shortName}</td>
                  <td><strong>${item.docType}</strong><br>${item.docNumber}</td>
                  <td>${item.date}</td>
                  <td>${item.notes || ""}</td>
                  <td>${money.format(item.amount)}</td>
                  <td>
                    <div class="row-actions">
                      <button class="edit-btn" type="button" data-action="edit" data-id="${item.id}">Editar</button>
                      <button class="delete-btn" type="button" data-action="delete" data-id="${item.id}">Eliminar</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </details>
    `;
  }).join("");
}

function renderRows() {
  const search = document.querySelector("#searchBox").value.trim().toLowerCase();
  const filtered = expenses
    .filter((item) => {
      const text = `${item.docType} ${item.docNumber} ${item.vendor} ${item.notes} ${byInitiative(item.initiativeId)?.shortName}`.toLowerCase();
      return !search || text.includes(search);
    })
    .sort((a, b) => Number(a.month) - Number(b.month) || String(a.date).localeCompare(String(b.date)));

  if (!filtered.length) {
    document.querySelector("#expenseSections").innerHTML = `
      <div class="empty-state">AÃºn no hay registros. Ingresa una factura o resoluciÃ³n para comenzar el seguimiento.</div>
    `;
    return;
  }

  const providerGroups = (rows, openAll = false) => {
    const groups = rows.reduce((map, item) => {
      const key = item.vendor || "Sin proveedor/persona";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
      return map;
    }, new Map());

    return [...groups.entries()].map(([vendor, items], index) => {
      const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
      const paidMonths = [...new Set(items.map((item) => Number(item.month)))]
        .sort((a, b) => a - b)
        .map((month) => MONTHS[month].slice(0, 3))
        .join(", ");
      const last = [...items].sort((a, b) => Number(b.month) - Number(a.month) || String(b.date).localeCompare(String(a.date)))[0];
      return `
        <details class="expense-group" ${openAll || index < 3 ? "open" : ""}>
          <summary>
            <div>
              <strong>${vendor}</strong>
              <small>${items.length} pago${items.length === 1 ? "" : "s"} | Meses: ${paidMonths || "Sin meses"}</small>
            </div>
            <div class="expense-group-metrics">
              <span>${money.format(total)}</span>
              <small>Ãšltimo: ${last ? `${MONTHS[last.month]} ${money.format(last.amount)}` : "Sin registro"}</small>
            </div>
          </summary>
          <div class="table-wrap compact-table">
            <table>
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Documento</th>
                  <th>Fecha</th>
                  <th>ObservaciÃ³n</th>
                  <th>Monto</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${items.map((item) => `
                  <tr>
                    <td>${MONTHS[item.month]}</td>
                    <td><strong>${item.docType}</strong><br>${item.docNumber}</td>
                    <td>${item.date}</td>
                    <td>${item.notes || ""}</td>
                    <td>${money.format(item.amount)}</td>
                    <td>
                      <div class="row-actions">
                        <button class="edit-btn" type="button" data-action="edit" data-id="${item.id}">Editar</button>
                        <button class="delete-btn" type="button" data-action="delete" data-id="${item.id}">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </details>
      `;
    }).join("");
  };

  document.querySelector("#expenseSections").innerHTML = INITIATIVES.map((initiative) => {
    const rows = filtered.filter((item) => item.initiativeId === initiative.id);
    const total = rows.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const providerCount = new Set(rows.map((item) => item.vendor || "Sin proveedor/persona")).size;
    return `
      <details class="expense-initiative-group" ${rows.length ? "open" : ""}>
        <summary>
          <div>
            <strong>${initiative.shortName}</strong>
            <small>${providerCount} proveedor${providerCount === 1 ? "" : "es"}/persona${providerCount === 1 ? "" : "s"} | ${rows.length} pago${rows.length === 1 ? "" : "s"}</small>
          </div>
          <span>${money.format(total)}</span>
        </summary>
        <div class="expense-provider-list">
          ${rows.length ? providerGroups(rows, Boolean(search)) : `<div class="empty-state">Sin pagos registrados en esta materia.</div>`}
        </div>
      </details>
    `;
  }).join("");
}

function renderBudgetBase() {
  const body = document.querySelector("#budgetBaseRows");
  if (!body) return;

  body.innerHTML = INITIATIVES.map((item) => {
    const cells = item.monthlyBudget.map((value, index) => `
      <td>
        <input
          class="budget-month-input"
          type="number"
          min="0"
          step="1"
          value="${value}"
          data-initiative-id="${item.id}"
          data-month="${index}"
          aria-label="Presupuesto ${item.shortName} ${MONTHS[index]}"
        />
      </td>
    `).join("");

    return `
      <tr>
        <th>
          <strong>${item.shortName}</strong>
          <small>${item.name}</small>
        </th>
        ${cells}
        <td class="amount-cell">${money.format(totalBudget(item))}</td>
      </tr>
    `;
  }).join("");

  const grandTotal = INITIATIVES.reduce((sum, item) => sum + totalBudget(item), 0);
  const totalElement = document.querySelector("#budgetBaseGrandTotal");
  if (totalElement) totalElement.textContent = money.format(grandTotal);
}

function renderAll() {
  renderKpis();
  renderInitiativeCards();
  renderChart();
  renderMonthlyComparison();
  renderBudgetBase();
  renderProviders();
  renderProviderControl();
  renderRows();
  renderProjectionRows();
  renderProjectionGrid();
  renderProjectionSummary();
  renderPaymentRule();
  renderSummary();
  renderBulkDocuments();
  cleanVisibleText();
}

function exportCsv() {
  const headers = ["Tipo", "Mes/Periodo", "Iniciativa", "Documento/Escenario", "Fecha", "Proveedor/persona", "Monto", "Observacion"];
  const expenseData = expenses.map((item) => [
    "Gasto real",
    MONTHS[item.month],
    byInitiative(item.initiativeId).name,
    `${item.docType} ${item.docNumber}`,
    item.date,
    item.vendor,
    item.amount,
    item.notes || "",
  ]);
  const projectionData = projections.map((item) => [
    "ProyecciÃ³n",
    `${MONTHS[item.startMonth]} a ${MONTHS[item.endMonth]}`,
    byInitiative(item.initiativeId).name,
    item.scenario,
    "",
    item.provider,
    projectionTotal(item),
    `${item.notes || ""} | Mensual: ${money.format(item.monthlyAmount)} | Extra: ${item.extraCount} x ${money.format(item.extraAmount || 0)}`,
  ]);
  const csv = [headers, ...expenseData, ...projectionData]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "control_presupuestario_sala_cuna_jardin.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function backupData() {
  const payload = {
    createdAt: new Date().toISOString(),
    expenses,
    projections,
    projectionGrid,
    projectionPaidGrid,
    providers,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `respaldo_control_presupuestario_${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ";" && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim());
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

function initiativeIdFromName(name) {
  const normalized = normalizeText(name).toLowerCase();
  const initiative = INITIATIVES.find((item) => normalizeText(item.name).toLowerCase() === normalized || normalized.includes(normalizeText(item.shortName).toLowerCase()));
  return initiative?.id || "jardin";
}

function splitDocument(value) {
  const [docType = "Documento", ...rest] = String(value || "").trim().split(/\s+/);
  return { docType, docNumber: rest.join(" ") || "SIN-NUMERO" };
}

function importCsvRows(rows) {
  let addedExpenses = 0;
  let addedProjections = 0;

  rows.forEach((row) => {
    if (row.Tipo === "Gasto real") {
      const doc = splitDocument(row["Documento/Escenario"]);
      const expense = {
        id: newId(),
        initiativeId: initiativeIdFromName(row.Iniciativa),
        month: Math.max(0, MONTHS.findIndex((month) => normalizeText(month).toLowerCase() === normalizeText(row["Mes/Periodo"]).toLowerCase())),
        docType: doc.docType,
        docNumber: doc.docNumber,
        date: row.Fecha || new Date().toISOString().slice(0, 10),
        vendor: row["Proveedor/persona"] || "Sin proveedor",
        amount: Number(row.Monto || 0),
        notes: row.Observacion || "",
      };
      const exists = expenses.some((item) =>
        item.docNumber === expense.docNumber &&
        item.vendor === expense.vendor &&
        Number(item.amount) === Number(expense.amount)
      );
      if (!exists) {
        expenses.push(expense);
        addedExpenses += 1;
      }
    } else if (row.Tipo === "ProyecciÃ³n") {
      const [startText, endText] = String(row["Mes/Periodo"] || "").split(/\s+a\s+/i);
      const startMonth = MONTHS.findIndex((month) => normalizeText(month).toLowerCase() === normalizeText(startText).toLowerCase());
      const endMonth = MONTHS.findIndex((month) => normalizeText(month).toLowerCase() === normalizeText(endText).toLowerCase());
      projections.push({
        id: newId(),
        initiativeId: initiativeIdFromName(row.Iniciativa),
        provider: row["Proveedor/persona"] || "",
        startMonth: startMonth >= 0 ? startMonth : 0,
        endMonth: endMonth >= 0 ? endMonth : 11,
        monthlyAmount: Number(row.Monto || 0),
        extraCount: 0,
        extraAmount: 0,
        scenario: row["Documento/Escenario"] || "Base",
        notes: row.Observacion || "",
      });
      addedProjections += 1;
    }
  });

  saveExpenses();
  saveProjections();
  renderAll();
  return { addedExpenses, addedProjections };
}

async function restoreLatestBackupIfRequested() {
  const params = new URLSearchParams(location.search);
  if (params.get("restoreBackup") !== "1") return;
  const response = await fetch("/api/latest-backup-csv");
  if (!response.ok) {
    alert("No pude encontrar el respaldo CSV para restaurar.");
    return;
  }
  const result = importCsvRows(parseCsv(await response.text()));
  history.replaceState(null, "", location.pathname);
  alert(`RestauraciÃ³n lista: ${result.addedExpenses} gastos recuperados.`);
}

document.querySelector("#expenseForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (editingExpenseId) {
    const current = expenses.find((item) => item.id === editingExpenseId);
    expenses = expenses.map((item) => item.id === editingExpenseId ? expenseFromForm(current) : item);
  } else {
    expenses.push(expenseFromForm());
  }
  saveExpenses();
  form.reset();
  clearExpenseEditMode();
  document.querySelector("#docDate").valueAsDate = new Date();
  renderAll();
});
document.querySelector("#cancelExpenseEdit").addEventListener("click", () => {
  document.querySelector("#expenseForm").reset();
  clearExpenseEditMode();
  document.querySelector("#docDate").valueAsDate = new Date();
  renderPaymentRule();
});

document.querySelector("#providerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (editingProviderId) {
    const current = providers.find((item) => item.id === editingProviderId);
    providers = providers.map((item) => item.id === editingProviderId ? providerFromForm(current) : item);
  } else {
    providers.push(providerFromForm());
  }
  saveProviders();
  refreshProviderList();
  form.reset();
  clearProviderEditMode();
  renderProviderF30Fields();
  renderAll();
});
document.querySelector("#cancelProviderEdit").addEventListener("click", () => {
  document.querySelector("#providerForm").reset();
  clearProviderEditMode();
  renderProviderF30Fields();
});
document.querySelector("#providerRequiresF30").addEventListener("change", renderProviderF30Fields);
document.querySelector("#providerF30").addEventListener("input", () => {
  if (document.querySelector("#providerF30").value.trim()) {
    document.querySelector("#providerRequiresF30").value = "SÃ­";
  }
  renderProviderF30Fields();
});

if (document.querySelector("#projectionForm")) {
  document.querySelector("#projectionForm").addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

document.querySelector("#providerSections").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const provider = providers.find((item) => item.id === button.dataset.id);
  if (!provider) return;
  if (button.dataset.action === "edit") {
    fillProviderForm(provider);
    document.querySelector("#proveedores").scrollIntoView({ behavior: "smooth" });
    return;
  }
  providers = providers.map((item) => item.id === button.dataset.id
    ? { ...item, status: item.status === "Vigente" ? "No vigente" : "Vigente" }
    : item);
  saveProviders();
  refreshProviderList();
  renderAll();
});

document.querySelector("#expenseSections").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const expense = expenses.find((item) => item.id === button.dataset.id);
  if (!expense) return;
  if (button.dataset.action === "edit") {
    fillExpenseFormFromExpense(expense);
    document.querySelector("#registro").scrollIntoView({ behavior: "smooth" });
    return;
  }
  expenses = expenses.filter((item) => item.id !== button.dataset.id);
  if (editingExpenseId === button.dataset.id) clearExpenseEditMode();
  saveExpenses();
  renderAll();
});

if (document.querySelector("#projectionRows")) {
  document.querySelector("#projectionRows").addEventListener("click", (event) => {
    const button = event.target.closest(".delete-btn");
    if (!button) return;
    projections = projections.filter((item) => item.id !== button.dataset.id);
    saveProjections();
    renderAll();
  });
}

document.querySelector("#projectionGridSections").addEventListener("change", (event) => {
  const checkbox = event.target.closest(".projection-paid-check");
  if (checkbox) {
    const key = projectionGridKey(checkbox.dataset.providerId, Number(checkbox.dataset.month));
    if (checkbox.closest("td")?.dataset.realPaid === "true") return;
    projectionPaidGrid[key] = checkbox.checked;
    saveProjectionPaidGrid();
    renderAll();
    return;
  }

  const input = event.target.closest(".projection-month-input");
  if (!input) return;
  const key = projectionGridKey(input.dataset.providerId, Number(input.dataset.month));
  if (input.closest("td")?.dataset.realPaid === "true") return;
  const value = Number(input.value || 0);
  if (value > 0) projectionGrid[key] = value;
  else delete projectionGrid[key];
  saveProjectionGrid();
  renderAll();
});

document.querySelector("#bulkDocumentRows").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const data = bulkDocuments.find((item) => item.bulkId === button.dataset.id);
  if (!data) return;
  if (button.dataset.action === "remove") {
    bulkDocuments = bulkDocuments.filter((item) => item.bulkId !== button.dataset.id);
    renderBulkDocuments();
    return;
  }
  renderDocumentResult(data);
  fillExpenseFormFromDocument(data);
  document.querySelector("#registro").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#bulkDocumentRows").addEventListener("change", (event) => {
  const checkbox = event.target.closest(".bulk-check");
  if (!checkbox) return;
  bulkDocuments = bulkDocuments.map((item) =>
    item.bulkId === checkbox.dataset.id ? { ...item, selected: checkbox.checked } : item
  );
});

document.querySelector("#initiativeFilter").addEventListener("change", renderChart);
document.querySelector("#monthlyComparisonFilter").addEventListener("change", renderMonthlyComparison);
window.addEventListener("resize", () => {
  renderChart();
  renderMonthlyComparison();
});
document.querySelector("#searchBox").addEventListener("input", renderRows);
document.querySelector("#providerSearch").addEventListener("input", renderProviders);
document.querySelector("#providerControlMonth").addEventListener("change", renderProviderControl);
document.querySelector("#providerReportSelect").addEventListener("change", renderProviderReportCard);
if (document.querySelector("#projectionProvider")) {
  document.querySelector("#projectionProvider").addEventListener("change", () => {
    const selectedProvider = providers.find((item) => item.id === document.querySelector("#projectionProvider").value);
    if (selectedProvider && document.querySelector("#projectionInitiative")) {
      document.querySelector("#projectionInitiative").value = initiativeFromProviderType(selectedProvider.type);
    }
  });
}
document.querySelector("#initiative").addEventListener("change", renderPaymentRule);
document.querySelector("#amount").addEventListener("input", renderPaymentRule);
document.querySelector("#ufValue").addEventListener("input", renderPaymentRule);
document.querySelector("#applySuggestedAmount").addEventListener("click", () => {
  const suggested = suggestedPaymentAmount();
  if (suggested) {
    document.querySelector("#amount").value = String(suggested);
    renderPaymentRule();
  }
});
async function analyzeDocumentInput() {
  const files = [...document.querySelector("#documentFile").files];
  let text = document.querySelector("#documentText").value.trim();
  if (files.length > 1) {
    bulkDocuments = [];
    document.querySelector("#documentResult").innerHTML = "";
    const serverTexts = await extractPdfTextsWithServer(files);
    for (const file of files) {
      let data;
      try {
        const serverItem = serverTexts?.find((item) => item.name === file.name);
        const fileText = serverItem ? serverItem.text : location.protocol.startsWith("http") ? "" : await extractPdfText(file);
        if (fileText) {
          const entries = analyzeDocumentEntries(fileText, file.name);
          entries.forEach((entry) => {
            entry.bulkId = newId();
            entry.selected = documentStatus(entry) === "Listo";
            bulkDocuments.push(entry);
          });
          continue;
        }
        data = emptyDocumentFromFile(file.name, serverTexts === null ? "Extractor local no disponible. Abre el sistema con ABRIR SISTEMA.bat." : "No se pudo leer texto suficiente desde este PDF.");
      } catch {
        data = emptyDocumentFromFile(file.name, "No se pudo leer automÃ¡ticamente este PDF.");
      }
      data.bulkId = data.bulkId || newId();
      data.selected = documentStatus(data) === "Listo";
      bulkDocuments.push(data);
    }
    renderBulkDocuments();
    const firstReady = bulkDocuments.find((item) => documentStatus(item) === "Listo") || bulkDocuments[0];
    if (firstReady) {
      renderDocumentResult(firstReady);
      fillExpenseFormFromDocument(firstReady);
    }
    return firstReady || null;
  }
  const file = files[0];
  if (!text && file) {
    const serverTexts = await extractPdfTextsWithServer([file]);
    text = serverTexts?.[0]?.text || (location.protocol.startsWith("http") ? "" : await extractPdfText(file));
    document.querySelector("#documentText").value = text || "No se pudo leer texto suficiente desde este PDF. Copia y pega el texto aquÃ­ para analizarlo.";
  }
  if (!text) {
    alert("Carga un PDF o pega texto del documento para analizarlo.");
    return null;
  }
  const entries = analyzeDocumentEntries(text, file?.name || "");
  entries.forEach((entry) => {
    entry.bulkId = newId();
    entry.selected = documentStatus(entry) === "Listo";
  });
  const data = entries[0];
  renderDocumentResult(data);
  fillExpenseFormFromDocument(data);
  bulkDocuments = entries;
  renderBulkDocuments();
  return data;
}

document.querySelector("#analyzeDocument").addEventListener("click", async () => {
  await analyzeDocumentInput();
});
document.querySelector("#documentFile").addEventListener("change", async () => {
  document.querySelector("#documentText").value = "";
  await analyzeDocumentInput();
});
document.querySelector("#useDocument").addEventListener("click", () => {
  if (!lastDocumentData) {
    alert("Primero analiza un documento.");
    return;
  }
  fillExpenseFormFromDocument(lastDocumentData);
  document.querySelector("#registro").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#saveDocumentExpense").addEventListener("click", async () => {
  const data = lastDocumentData || await analyzeDocumentInput();
  if (!data) return;
  if (!data.amount || data.amount <= 0) {
    alert("No se detectÃ³ monto. Revisa el texto o ingresa el monto manualmente antes de guardar.");
    return;
  }
  saveExpenseFromDocument(data);
});
document.querySelector("#saveBulkDocuments").addEventListener("click", saveBulkDocuments);
document.querySelector("#importCsv").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  const result = importCsvRows(parseCsv(text));
  alert(`ImportaciÃ³n lista: ${result.addedExpenses} gastos y ${result.addedProjections} proyecciones agregadas.`);
  event.target.value = "";
});
document.querySelector("#selectAllBulkDocuments").addEventListener("click", () => {
  const readyCount = bulkDocuments.filter((item) => documentStatus(item) === "Listo").length;
  const selectedReadyCount = bulkDocuments.filter((item) => item.selected && documentStatus(item) === "Listo").length;
  const shouldSelect = selectedReadyCount !== readyCount;
  bulkDocuments = bulkDocuments.map((item) => documentStatus(item) === "Listo" ? { ...item, selected: shouldSelect } : item);
  document.querySelector("#selectAllBulkDocuments").textContent = shouldSelect ? "Deseleccionar todos" : "Seleccionar todos";
  renderBulkDocuments();
});
document.querySelector("#clearBulkDocuments").addEventListener("click", () => {
  bulkDocuments = [];
  lastDocumentData = null;
  document.querySelector("#documentResult").innerHTML = "";
  document.querySelector("#documentText").value = "";
  document.querySelector("#documentFile").value = "";
  renderBulkDocuments();
});
document.querySelector("#budgetBaseRows")?.addEventListener("change", (event) => {
  const input = event.target.closest(".budget-month-input");
  if (!input) return;
  const initiative = byInitiative(input.dataset.initiativeId);
  const month = Number(input.dataset.month);
  if (!initiative || Number.isNaN(month)) return;
  initiative.monthlyBudget[month] = Math.max(0, Math.round(Number(input.value || 0)));
  saveBudgets();
  renderAll();
});
document.querySelector("#saveBudgetBase")?.addEventListener("click", async () => {
  saveBudgets();
  sharedDataReady = true;
  await saveSharedDataNow();
  renderAll();
  alert("Presupuesto base guardado. Tus compañeros deben recargar con Ctrl + F5 para verlo actualizado.");
});
document.querySelector("#restoreBudgetBase")?.addEventListener("click", () => {
  if (!confirm("Se restauraran los montos originales del maestro presupuestario. Tus gastos y proyecciones no se borran.")) return;
  applyBudgetOverrides(DEFAULT_BUDGETS);
  saveBudgets();
  renderAll();
});
document.querySelector("#exportCsv").addEventListener("click", exportCsv);
document.querySelector("#syncSharedData").addEventListener("click", async () => {
  captureProjectionGridFromDom();
  sharedDataReady = true;
  await saveSharedDataNow();
  renderAll();
  alert("Datos sincronizados con el archivo central. Tus compañeros deben recargar con Ctrl + F5.");
});
document.querySelector("#backupData").addEventListener("click", backupData);
document.querySelector("#clearProjectionGrid").addEventListener("click", () => {
  if (!Object.keys(projectionGrid).length || confirm("Se eliminarÃ¡n todas las estimaciones futuras escritas en la matriz.")) {
    projectionGrid = {};
    saveProjectionGrid();
    renderAll();
  }
});
document.querySelector("#copyExecutiveReport").addEventListener("click", async () => {
  const text = document.querySelector("#executiveReportText").value;
  try {
    await navigator.clipboard.writeText(text);
    alert("Resumen copiado para pegar en correo, memo o minuta.");
  } catch {
    document.querySelector("#executiveReportText").select();
    alert("No pude copiar automÃƒÂ¡ticamente. El texto quedÃƒÂ³ seleccionado para copiarlo manualmente.");
  }
});
document.querySelector("#resetDemo").addEventListener("click", () => {
  if ((!expenses.length && !projections.length) || confirm("Se eliminarÃ¡n todos los registros y proyecciones guardados en este navegador.")) {
    expenses = [];
    projections = [];
    projectionGrid = {};
    projectionPaidGrid = {};
    saveExpenses();
    saveProjections();
    saveProjectionGrid();
    saveProjectionPaidGrid();
    renderAll();
  }
});

async function initializeApp() {
  await loadSharedData();
  sharedDataReady = true;
  fillSelectors();
  renderProviderF30Fields();
  setupCollapsiblePanels();
  renderAll();
  restoreLatestBackupIfRequested();
}

initializeApp();

