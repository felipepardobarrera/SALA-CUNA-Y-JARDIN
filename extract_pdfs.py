import base64
import json
import sys

try:
    import pdfplumber
except ImportError:
    pdfplumber = None

def extract_text(item):
    raw = base64.b64decode(item["data"])
    from io import BytesIO

    if pdfplumber is not None:
        with pdfplumber.open(BytesIO(raw)) as pdf:
            text = "\n".join((page.extract_text() or "") for page in pdf.pages)
    else:
        from pypdf import PdfReader

        reader = PdfReader(BytesIO(raw))
        text = "\n".join((page.extract_text() or "") for page in reader.pages)
    return {"name": item["name"], "text": text}


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    payload = json.load(sys.stdin)
    results = []
    for item in payload.get("files", []):
        try:
            results.append({**extract_text(item), "ok": True, "error": ""})
        except Exception as exc:
            results.append({"name": item.get("name", ""), "text": "", "ok": False, "error": str(exc)})
    json.dump({"files": results}, sys.stdout, ensure_ascii=True)


if __name__ == "__main__":
    main()
