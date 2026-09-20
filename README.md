# blog.rdinnovate.com

Astro static site, hosted on GitHub Pages, published by GitHub Actions.
Nothing depends on a Mac being awake: Actions is the server.

## How a day works

1. **20:00 UTC** (06:00 AEST / 07:00 AEDT) the `Publish blog` workflow starts.
2. `scripts/generate-article.mjs` picks the least recently covered category,
   pulls ~12 recent papers with real abstracts (arXiv or Europe PMC, both free,
   no key), and hands them to the model. The model picks one by number and writes
   only from that abstract. **The citation is built from API metadata. The model
   never types a URL.**
3. The draft must pass every check in `scripts/lib/validate.mjs` (length,
   structure, no links/HTML, no hype, no R&D-tax eligibility claims, figures must
   appear in the abstract, no 12-word run copied from it, preprints disclosed).
   If a model fails, the next one on the ladder tries. If none passes, **nothing
   is written**. A missed day is better than a weak article.
4. The article is committed as `RDInnovateRD`, then the site is built,
   `check-compliance.mjs` runs (any error blocks the deploy), and it deploys.
5. If no article was written, the run is marked failed **after** deploying, so
   GitHub emails you. Open the run → **Summary** for the model that answered,
   its finish reason, token counts, every check, and the raw output.

## Adding a post by hand

Create `src/content/posts/YYYY-MM-DD-kebab-slug.md`:

```yaml
---
title: "Headline in sentence case"
date: 2026-09-21
excerpt: "One or two sentences, under 200 characters, no angle brackets."
category: "Quantum"
catslug: "quantum"
---
```

Commit and push to `main`. A future date stays hidden until the daily rebuild on
or after that date. A hand-written post for today also stops the generator from
writing one (it never writes two for a day).

Categories and their colours live in `src/data/categories.json`. The house list
is in `src/lib/categories.mjs`.

## Commands

| | |
|---|---|
| `npm run dev` | local preview at http://localhost:4321 (needs Node 22+) |
| `npm run verify` | build + compliance + launch checks |
| `npm run generate:dry` | full generation run without writing (needs an API key) |
| `node scripts/generate-article.mjs --retrieve-only --category=quantum` | show candidate papers, no model call |

## Settings (GitHub → repo → Settings → Secrets and variables → Actions)

| Name | Kind | Purpose |
|---|---|---|
| `GEMINI_API_KEY` | secret | Google AI Studio key (free tier). Default provider. |
| `ANTHROPIC_API_KEY` | secret | Optional. Used when `AI_PROVIDER` is `anthropic` or `both`. |
| `AI_PROVIDER` | variable | `gemini` (default), `anthropic`, or `both` (Gemini ladder, then Claude) |
| `GEMINI_MODELS` | variable | Optional comma list overriding the ladder |
| `ANTHROPIC_MODEL` | variable | Optional, default `claude-sonnet-5` |

Model IDs were verified against the providers' lists in September 2026. Check
the current list before changing them. The newest model you remember may not be
the newest one available.

## Rules that exist because something broke

- No `<!-- -->` or raw `<` `>` in posts: an unclosed comment once hid every card
  below it on the homepage.
- Cron in Actions is UTC, always.
- Only 404 and 410 mean a source link is dead. 403 is a bot wall; 5xx is a bad day.
- Git identity is set per repo (`RDInnovateRD` / `rd@rdinnovate.com`), never
  `--global`.
- Old article URLs are listed in `scripts/legacy-urls.txt`; the launch check
  fails the build if any stops resolving.

`_source/` holds the original article archive and the retired Mac automation,
kept for reference. Nothing in the build reads it.
