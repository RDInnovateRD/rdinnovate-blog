#!/usr/bin/env python3
"""Strip dev.to HTML-comment metadata blocks; rebuild safe excerpts."""
import re, pathlib

POSTS = pathlib.Path.home()/"Documents"/"CodingProjects"/"rdinnovate-blog"/"_posts"
FM = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.S)
COMMENT = re.compile(r'<!--(.*?)-->', re.S)
DESC = re.compile(r'^\s*description:\s*(.+?)\s*$', re.M)

def safe(s):
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.replace('<', '').replace('>', '').replace('"', "'")
    return (s[:197] + '...') if len(s) > 200 else s

def first_prose(body):
    for line in body.split('\n'):
        t = line.strip()
        if t and not t.startswith(('#', '-', '`', '*', '>', '|', '<', '[', '!')):
            return t
    return ""

fixed = comments = 0
for p in sorted(POSTS.glob('*.md')):
    raw = p.read_text(encoding='utf-8')
    m = FM.match(raw)
    if not m:
        print("SKIP (no front matter):", p.name); continue
    fm, body = m.group(1), m.group(2)

    desc = ""
    for c in COMMENT.findall(body):
        d = DESC.search(c)
        if d and not desc:
            desc = d.group(1)
    if COMMENT.search(body):
        body = COMMENT.sub('', body); comments += 1
    body = re.sub(r'\n{3,}', '\n\n', body).strip()

    exc = safe(desc) if desc else safe(first_prose(body))
    if re.search(r'^excerpt:', fm, re.M):
        fm = re.sub(r'^excerpt:.*$', 'excerpt: "%s"' % exc, fm, count=1, flags=re.M)
    else:
        fm += '\nexcerpt: "%s"' % exc

    p.write_text('---\n%s\n---\n\n%s\n' % (fm, body), encoding='utf-8')
    fixed += 1

print("posts rewritten: %d   comment blocks stripped: %d" % (fixed, comments))
print("\n=== any excerpt still containing angle brackets ===")
bad = [p.name for p in sorted(POSTS.glob('*.md'))
       if re.search(r'^excerpt:.*[<>]', p.read_text(encoding='utf-8'), re.M)]
print(bad or "none")
