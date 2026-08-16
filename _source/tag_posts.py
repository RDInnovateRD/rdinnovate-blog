#!/usr/bin/env python3
"""Classify each post into a category and write it into front matter."""
import re, pathlib

POSTS = pathlib.Path.home()/"Documents"/"CodingProjects"/"rdinnovate-blog"/"_posts"
FM = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.S)

# order matters: first category whose keywords score highest wins
CATS = [
    ("Quantum",   ["quantum", "entangl", "qubit", "coherence", "photon pair",
                   "superposition", "entangled"]),
    ("Compute & AI", ["transistor", "lithography", "silicon", "chip", "processor",
                   "parameter", "ai model", "neural", "computing", "compute",
                   "open weights", "gpu", "semiconductor", "nanometer"]),
    ("Energy",    ["fuel cell", "battery", "hydrogen", "turbine", "grid", "flow batter",
                   "vanadium", "solar", "electricity", "power plant", "fusion"]),
    ("Materials", ["catalyst", "crystal", "oxide", "nitride", "lignin", "nanocrystal",
                   "polymer", "alloy", "mining", "material", "chemistry", "molecule",
                   "electron transfer", "nanoreactor", "peroxide"]),
    ("Bio",       ["gene", "genome", "crispr", "mammal", "regrow", "regenerat",
                   "cell wall", "protein", "enzyme", "biolog", "salamander"]),
    ("Physics & Space", ["neutrino", "black hole", "planet", "atmosphere", "meteorite",
                   "astronom", "cosmic", "penrose", "relativ", "heat wave", "phonon"]),
]

def classify(title, body):
    hay = (title + " " + body[:2500]).lower()
    best, top = "Physics & Space", 0
    for name, kws in CATS:
        score = sum(hay.count(k) * (3 if k in title.lower() else 1) for k in kws)
        if score > top:
            best, top = name, score
    return best

counts = {}
for p in sorted(POSTS.glob('*.md')):
    raw = p.read_text(encoding='utf-8')
    m = FM.match(raw)
    if not m:
        continue
    fm, body = m.group(1), m.group(2)
    title = re.search(r'^title:\s*"?(.*?)"?\s*$', fm, re.M)
    title = title.group(1) if title else p.stem

    cat = classify(title, body)
    counts[cat] = counts.get(cat, 0) + 1
    slug = re.sub(r'[^a-z]+', '-', cat.lower()).strip('-')

    fm = re.sub(r'^category:.*$', '', fm, flags=re.M)
    fm = re.sub(r'^catslug:.*$', '', fm, flags=re.M)
    fm = re.sub(r'\n{2,}', '\n', fm).strip()
    fm += '\ncategory: "%s"\ncatslug: "%s"' % (cat, slug)

    p.write_text('---\n%s\n---\n\n%s\n' % (fm, body.strip()), encoding='utf-8')

for k, v in sorted(counts.items(), key=lambda x: -x[1]):
    print("%-18s %d" % (k, v))
print("total:", sum(counts.values()))
