#!/usr/bin/env python3
"""Split the R&D Innovate archive into Jekyll posts + LinkedIn companions."""
import re, pathlib

ROOT  = pathlib.Path.home()/"Documents"/"CodingProjects"/"rdinnovate-blog"
SRC   = ROOT/"_source"/"rd-innovate-articles-2026-07-16-to-2026-08-13.md"
POSTS = ROOT/"_posts"; LI = ROOT/"_linkedin"

HEAD = re.compile(r'^# (\d+)\. (\d{4}-\d{2}-\d{2}) - (.+?)\s*$', re.M)
LIRE = re.compile(r'^#{2,3}\s*LinkedIn post.*$', re.M | re.I)

def slug(t):
    t = re.sub(r"['\u2018\u2019`\"]", "", t.lower())
    return re.sub(r'^-+|-+$', '', re.sub(r'[^a-z0-9]+', '-', t))[:60]

def clean(b, title):
    b = re.sub(r'^\s*`file:.*`\s*$', '', b, flags=re.M)
    b = re.sub(r'^#\s+' + re.escape(title) + r'\s*$', '', b, flags=re.M)
    return b.strip().strip('-').strip()

def excerpt(b):
    for line in b.split('\n'):
        line = line.strip()
        if line and not line.startswith(('#', '-', '`', '*', '>', '|')):
            return (line[:197] + '...') if len(line) > 200 else line
    return ""

POSTS.mkdir(parents=True, exist_ok=True); LI.mkdir(parents=True, exist_ok=True)
text = SRC.read_text(encoding='utf-8')
m = list(HEAD.finditer(text))
print("Found %d articles" % len(m))

seen = {}
for i, mt in enumerate(m):
    _, date, title = mt.groups()
    end = m[i+1].start() if i+1 < len(m) else len(text)
    body = text[mt.end():end]

    parts = LIRE.split(body, maxsplit=1)
    article = clean(parts[0], title)
    linkedin = parts[1] if len(parts) > 1 else ""

    s = slug(title)
    key = "%s-%s" % (date, s)
    seen[key] = seen.get(key, 0) + 1
    if seen[key] > 1:
        key = "%s-%d" % (key, seen[key])

    safe = title.replace('"', "'")
    exc = excerpt(article).replace('"', "'")
    (POSTS/("%s.md" % key)).write_text(
        '---\nlayout: post\ntitle: "%s"\ndate: %s\nexcerpt: "%s"\n---\n\n%s\n'
        % (safe, date, exc, article), encoding='utf-8')
    if linkedin.strip():
        (LI/("%s.txt" % key)).write_text(
            linkedin.strip().strip('-').strip(), encoding='utf-8')
    print("  %s  %s" % (date, title[:62]))

print("\nPosts    -> %s" % POSTS)
print("LinkedIn -> %s" % LI)
