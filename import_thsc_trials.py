import re
import json
import base64
import hashlib
import urllib.parse
import urllib.request
import time
from io import BytesIO
from pathlib import Path
from pypdf import PdfReader

SCRIPT_ENDPOINT = "https://script.google.com/macros/s/AKfycbx69GPoJtf9sSevsUbWtPr46vpa01u4oNkHjFmkkWxmj62AZ0q-/exec"
SUBJECTS = ["Physics", "Chemistry", "Biology"]
BASE_URL = "https://thsconline.github.io/s/yr12/{subject}/trialpapers.html"
MIN_YEAR = 2017
MAX_PAPERS_PER_SUBJECT = 220
MAX_PAGES_PER_PDF = 38
MAX_QUESTIONS_PER_PAPER = 60
MAX_BUCKET_PER_MODULE = 1200


def fetch(url, timeout=60, retries=3):
    last_err = None
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(url, timeout=timeout) as r:
                return r.read().decode("utf-8", "ignore")
        except Exception as exc:
            last_err = exc
            if attempt < retries - 1:
                time.sleep(1.2 * (attempt + 1))
                continue
            raise last_err


def parse_trial_entries(html):
    entries = []
    pattern = re.compile(r'<a href="#v"\s+onClick="pdf\(this,\s*(\d+)\)">(.*?)</a>', re.I)
    for m in pattern.finditer(html):
        viewno = m.group(1)
        title = re.sub(r"\s+", " ", m.group(2).strip())
        year_match = re.search(r"(20\d{2})", title)
        if not year_match:
            continue
        year = int(year_match.group(1))
        if year < MIN_YEAR:
            continue
        entries.append({"viewno": viewno, "title": title, "year": year})

    unique = {}
    for e in entries:
        key = (e["viewno"], e["title"])
        if key not in unique:
            unique[key] = e
    entries = sorted(unique.values(), key=lambda x: (-x["year"], x["title"]))
    return entries[:MAX_PAPERS_PER_SUBJECT]


def fetch_pdf_bytes(viewno, title):
    q = urllib.parse.urlencode(
        {
            "export": "data",
            "field": title,
            "base": viewno,
            "hash": hashlib.sha256(viewno.encode()).hexdigest(),
        }
    )
    url = f"{SCRIPT_ENDPOINT}?{q}"
    payload = fetch(url, timeout=90, retries=4)
    m = re.search(r"downloadfile\((\{.*\})\)\s*$", payload, re.S)
    if not m:
        return None
    obj = json.loads(m.group(1))
    data = obj.get("data")
    if not data:
        return None
    return base64.b64decode(data)


def extract_text(pdf_bytes):
    reader = PdfReader(BytesIO(pdf_bytes))
    page_count = min(len(reader.pages), MAX_PAGES_PER_PDF)
    chunks = []
    for i in range(page_count):
        try:
            t = reader.pages[i].extract_text() or ""
        except Exception:
            t = ""
        chunks.append(t)
    return "\n".join(chunks)


def clean_line(line):
    line = re.sub(r"\s+", " ", line).strip()
    return line


def infer_module(subject, text):
    t = text.lower()
    if subject == "physics":
        if any(k in t for k in ["centripetal", "projectile", "momentum", "torque", "gravit"]):
            return "m5"
        if any(k in t for k in ["magnetic", "induction", "motor", "generator", "current", "coil"]):
            return "m6"
        if any(k in t for k in ["photoelectric", "photon", "wavelength", "interference", "spectrum", "relativity"]):
            return "m7"
        return "m8"
    if subject == "chemistry":
        if any(k in t for k in ["equilibrium", "le chatelier", "ksp", "keq", "yield"]):
            return "m5"
        if any(k in t for k in ["ph", "poh", "ka", "kb", "titration", "buffer", "acid", "base"]):
            return "m6"
        if any(k in t for k in ["organic", "polymer", "alkane", "alkene", "functional", "isomer"]):
            return "m7"
        return "m8"
    if any(k in t for k in ["allele", "meiosis", "inherit", "pedigree", "dna"]):
        return "m5"
    if any(k in t for k in ["selection", "evolution", "speciation", "gene pool", "mutation"]):
        return "m6"
    if any(k in t for k in ["pathogen", "immune", "vaccine", "antibiotic", "disease"]):
        return "m7"
    return "m8"


def infer_type(text):
    t = text.lower()
    if any(k in t for k in ["investigation", "validity", "reliability", "method"]):
        return "working_scientifically"
    if any(k in t for k in ["calculate", "determine", "estimate", "find", "show that", "using the equation", "molar", "mol", "%"]):
        return "short_answer"
    if any(k in t for k in ["identify", "state", "define", "outline"]):
        return "short_answer"
    return "extended_response"


def infer_marks(line, context_lines):
    search = " ".join(context_lines)
    m = re.search(r"(\d{1,2})\s*marks?", search, re.I)
    if m:
        marks = int(m.group(1))
        return max(1, min(12, marks))
    qtype = infer_type(line)
    if qtype == "extended_response":
        return 6
    return 4


def extract_questions_from_text(subject, text, source_tag):
    lines = [clean_line(x) for x in text.splitlines()]
    lines = [x for x in lines if len(x) > 8]

    questions = []
    seen = set()
    command_regex = re.compile(
        r"\b(calculate|determine|evaluate|assess|analyse|analyze|explain|discuss|justify|compare|describe|outline|identify|state|show)\b",
        re.I,
    )
    front_matter_regex = re.compile(r"\b(reading time|working time|general instructions|assessment task)\b", re.I)
    heading_regex = re.compile(r"^(Question\s*\d+[a-z]?|\d+[a-z]?[.)])\s*", re.I)

    for i, line in enumerate(lines):
        lower = line.lower()
        if front_matter_regex.search(lower):
            continue

        numbered_start = bool(heading_regex.match(line))
        has_command = bool(command_regex.search(lower))
        looks_like_mcq_option = bool(re.match(r"^[A-D][.)]\s+", line))
        is_candidate = (
            numbered_start
            or has_command
            or "?" in line
        )
        if not is_candidate or looks_like_mcq_option:
            continue

        block = [line]
        for j in range(1, 8):
            if i + j >= len(lines):
                break
            nxt = lines[i + j]
            if front_matter_regex.search(nxt.lower()):
                break
            if heading_regex.match(nxt) and j > 1:
                break
            if len(" ".join(block + [nxt])) > 780:
                break
            block.append(nxt)

        stem = " ".join(block)
        stem = re.sub(r"\s+", " ", stem).strip()
        stem = heading_regex.sub("", stem).strip()
        if len(stem) < 45:
            continue
        if not command_regex.search(stem) and "?" not in stem:
            continue
        normalized = re.sub(r"\s+", " ", stem).lower()
        if normalized in seen:
            continue
        seen.add(normalized)

        marks = infer_marks(line, [line] + lines[max(0, i - 1) : i + 3])
        qtype = infer_type(stem)
        module = infer_module(subject.lower(), stem)

        questions.append(
            {
                "subjectId": subject.lower(),
                "moduleId": module,
                "marks": marks,
                "type": qtype,
                "stem": stem,
                "sourceTag": source_tag,
            }
        )

        if len(questions) >= MAX_QUESTIONS_PER_PAPER:
            break

    return questions


def build_bank():
    bank = {"physics": {"m5": [], "m6": [], "m7": [], "m8": []}, "chemistry": {"m5": [], "m6": [], "m7": [], "m8": []}, "biology": {"m5": [], "m6": [], "m7": [], "m8": []}}
    meta = {"sources": []}
    seen_by_bucket = {
        subject: {module: set() for module in ["m5", "m6", "m7", "m8"]}
        for subject in ["physics", "chemistry", "biology"]
    }

    for subject in SUBJECTS:
        try:
            html = fetch(BASE_URL.format(subject=subject), timeout=40, retries=4)
        except Exception as exc:
            print(f"{subject}: failed to load trial list: {exc}")
            continue
        entries = parse_trial_entries(html)
        print(f"{subject}: considering {len(entries)} papers")

        for entry in entries:
            tag = entry["title"]
            try:
                pdf_bytes = fetch_pdf_bytes(entry["viewno"], entry["title"])
                if not pdf_bytes:
                    print(f"  skip {tag} (no bytes)")
                    continue
                text = extract_text(pdf_bytes)
                questions = extract_questions_from_text(subject, text, tag)
                if not questions:
                    print(f"  skip {tag} (no parsed questions)")
                    continue

                for q in questions:
                    bucket = bank[q["subjectId"]][q["moduleId"]]
                    seen = seen_by_bucket[q["subjectId"]][q["moduleId"]]
                    fingerprint = re.sub(r"\s+", " ", q["stem"]).strip().lower()
                    if fingerprint in seen:
                        continue
                    if len(bucket) >= MAX_BUCKET_PER_MODULE:
                        continue
                    seen.add(fingerprint)
                    bucket.append(q)

                meta["sources"].append({
                    "subject": subject.lower(),
                    "title": entry["title"],
                    "year": entry["year"],
                    "viewno": entry["viewno"],
                    "questionCount": len(questions),
                })
                print(f"  imported {tag}: {len(questions)} questions")
            except Exception as exc:
                print(f"  failed {tag}: {exc}")

    return bank, meta


def write_js(bank, meta):
    payload = {
        "bank": bank,
        "meta": meta,
    }
    out = "window.TRIAL_QUESTION_BANK = " + json.dumps(payload, ensure_ascii=False) + ";\n"
    Path("trial_bank.js").write_text(out, encoding="utf-8")


if __name__ == "__main__":
    bank, meta = build_bank()
    write_js(bank, meta)
    print("written trial_bank.js")
    print("counts:")
    for subj in ["physics", "chemistry", "biology"]:
        for mid in ["m5", "m6", "m7", "m8"]:
            print(subj, mid, len(bank[subj][mid]))
