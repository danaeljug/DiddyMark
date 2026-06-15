import re
import json
import base64
import hashlib
import urllib.parse
import urllib.request
import time
from pathlib import Path
import fitz

SCRIPT_ENDPOINT = "https://script.google.com/macros/s/AKfycbx69GPoJtf9sSevsUbWtPr46vpa01u4oNkHjFmkkWxmj62AZ0q-/exec"
SUBJECTS = ["Physics", "Chemistry", "Biology"]
BASE_URL = "https://thsconline.github.io/s/yr12/{subject}/trialpapers.html"
MIN_YEAR = 2017
MAX_PAPERS_PER_SUBJECT = 8
MAX_IMAGES_PER_SUBJECT = 14

OUT_DIR = Path("paper_stimuli")
OUT_DIR.mkdir(exist_ok=True)


def fetch(url, timeout=80, retries=3):
    err = None
    for i in range(retries):
        try:
            with urllib.request.urlopen(url, timeout=timeout) as r:
                return r.read().decode("utf-8", "ignore")
        except Exception as exc:
            err = exc
            if i < retries - 1:
                time.sleep(1.1 * (i + 1))
            else:
                raise err


def parse_entries(html):
    entries = []
    pattern = re.compile(r'<a href="#v"\s+onClick="pdf\(this,\s*(\d+)\)">(.*?)</a>', re.I)
    for m in pattern.finditer(html):
        viewno = m.group(1)
        title = re.sub(r"\s+", " ", m.group(2).strip())
        y = re.search(r"(20\d{2})", title)
        if not y:
            continue
        year = int(y.group(1))
        if year < MIN_YEAR:
            continue
        entries.append({"viewno": viewno, "title": title, "year": year})

    uniq = {}
    for e in entries:
        uniq[(e["viewno"], e["title"])] = e
    values = sorted(uniq.values(), key=lambda x: (-x["year"], x["title"]))
    return values[:MAX_PAPERS_PER_SUBJECT]


def fetch_pdf_bytes(viewno, title):
    q = urllib.parse.urlencode(
        {
            "export": "data",
            "field": title,
            "base": viewno,
            "hash": hashlib.sha256(viewno.encode()).hexdigest(),
        }
    )
    payload = fetch(f"{SCRIPT_ENDPOINT}?{q}", timeout=100, retries=4)
    m = re.search(r"downloadfile\((\{.*\})\)\s*$", payload, re.S)
    if not m:
        return None
    obj = json.loads(m.group(1))
    data = obj.get("data")
    if not data:
        return None
    return base64.b64decode(data)


def sanitize(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")[:80]


def main():
    items = []

    for subject in SUBJECTS:
        subject_id = subject.lower()
        try:
            html = fetch(BASE_URL.format(subject=subject), timeout=40, retries=4)
        except Exception as exc:
            print(subject, "skip list", exc)
            continue

        entries = parse_entries(html)
        subject_count = 0
        print(subject, "entries", len(entries))

        for entry in entries:
            if subject_count >= MAX_IMAGES_PER_SUBJECT:
                break
            try:
                pdf_bytes = fetch_pdf_bytes(entry["viewno"], entry["title"])
                if not pdf_bytes:
                    continue

                doc = fitz.open(stream=pdf_bytes, filetype="pdf")
                candidates = []
                for i in range(min(len(doc), 18)):
                    if i == 0:
                        continue
                    text = (doc[i].get_text() or "").lower()
                    if any(token in text for token in ["hsc", "trial papers", "front cover", "contents"]):
                        continue
                    score = 0
                    for token in ["graph", "diagram", "figure", "table", "data", "plot", "curve", "stimulus"]:
                        if token in text:
                            score += 1
                    if score > 0:
                        candidates.append((score, i))

                if not candidates:
                    candidates = [(1, 1 if len(doc) > 1 else 0)]

                candidates = sorted(candidates, reverse=True)
                chosen_pages = [candidates[0][1]]
                if len(candidates) > 1 and candidates[1][1] != candidates[0][1]:
                    chosen_pages.append(candidates[1][1])

                for page_index in chosen_pages:
                    if subject_count >= MAX_IMAGES_PER_SUBJECT:
                        break
                    page = doc[page_index]
                    pix = page.get_pixmap(matrix=fitz.Matrix(1.4, 1.4), alpha=False)
                    fname = f"{subject_id}-{entry['year']}-{sanitize(entry['title'])}-p{page_index+1}.png"
                    out_path = OUT_DIR / fname
                    pix.save(out_path)

                    items.append(
                        {
                            "subjectId": subject_id,
                            "sourceTag": entry["title"],
                            "year": entry["year"],
                            "path": str(out_path),
                            "caption": f"{subject} trial paper stimulus ({entry['title']}), page {page_index + 1}",
                            "link": f"https://thsconline.github.io/s/yr12/{subject}/trialpapers.html",
                        }
                    )
                    subject_count += 1
                doc.close()
                print("  extracted", entry["title"], "->", subject_count)
            except Exception as exc:
                print("  fail", entry["title"], exc)

    js = "window.PAPER_STIMULI = " + json.dumps(items, ensure_ascii=False) + ";\n"
    Path("paper_stimuli.js").write_text(js, encoding="utf-8")
    print("wrote", len(items), "stimuli")


if __name__ == "__main__":
    main()
