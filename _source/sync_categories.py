#!/usr/bin/env python3
"""Ensure every category used by a post has a colour in _data/categories.yml.

Run after writing a new article and before `git add`. Deterministic: the same
slug always produces the same colour. Existing entries are never modified, so
hand-tuned colours survive.

Exit 0 always. Prints any category it added.
"""
import re, colorsys, pathlib

ROOT  = pathlib.Path(__file__).resolve().parent.parent
POSTS = ROOT/"_posts"
DATA  = ROOT/"_data"/"categories.yml"

def hue_of(slug):
    """FNV-1a hash -> hue 0..359, shifted clear of brand maroon (~0 deg)."""
    h = 2166136261
    for ch in slug:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    hue = h % 360
    return (hue + 40) % 360 if (hue < 24 or hue > 336) else hue

def hexof(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h/360.0, l, s)
    return "#%02x%02x%02x" % (int(r*255), int(g*255), int(b*255))

def palette(slug):
    h = hue_of(slug)
    return (hexof(h, .58, .36),
            hexof((h+34) % 360, .72, .52),
            hexof((h+348) % 360, .56, .20))

# slugs already defined
existing = set()
text = DATA.read_text(encoding="utf-8") if DATA.exists() else ""
for line in text.splitlines():
    m = re.match(r'^([a-z0-9][a-z0-9-]*):\s*$', line)
    if m:
        existing.add(m.group(1))

# slugs actually used by posts
used = {}
for p in sorted(POSTS.glob("*.md")):
    fm = p.read_text(encoding="utf-8").split("---")
    if len(fm) < 3:
        continue
    slug = re.search(r'^catslug:\s*"?([a-z0-9-]+)"?\s*$', fm[1], re.M)
    name = re.search(r'^category:\s*"?(.+?)"?\s*$', fm[1], re.M)
    if slug:
        used[slug.group(1)] = name.group(1) if name else slug.group(1)

added = []
lines = []
for slug in sorted(used):
    if slug in existing:
        continue
    c1, c2, c3 = palette(slug)
    lines.append('%s:\n  c1: "%s"\n  c2: "%s"\n  c3: "%s"\n' % (slug, c1, c2, c3))
    added.append("%s (%s) -> %s" % (slug, used[slug], c1))

if lines:
    with DATA.open("a", encoding="utf-8") as f:
        if text and not text.endswith("\n"):
            f.write("\n")
        f.writelines(lines)

if added:
    print("Added category colours:")
    for a in added:
        print("  " + a)
else:
    print("No new categories. %d in use, all have colours." % len(used))
