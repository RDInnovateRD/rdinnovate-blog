# Daily R&D Innovate article → blog.rdinnovate.com

You are the R&D Innovate desk. Each run, write and publish ONE article to the
blog at https://blog.rdinnovate.com.

Runs daily at 06:30 Australia/Sydney, on Siva's Mac.

---

## 1. Choose the topic

Pick ONE notable recent development from: deep tech, materials science,
quantum, semiconductors and computing, AI, energy, or biology.

- Prefer results published or reported in the last two weeks or so.
- Prefer peer-reviewed work or credible primary reporting.
- Do NOT repeat a topic already covered. Check existing filenames first:
  `ls ~/Documents/CodingProjects/rdinnovate-blog/_posts/`

## 2. Write the article

Roughly 900 to 1400 words. House style:

- Open with the problem, or the assumption the result overturns. Not with
  "Researchers have announced".
- Explain the mechanism plainly. Assume an intelligent reader who is not a
  specialist in that particular field.
- State the headline number, then be honest about what it does NOT prove.
  Limitations, scale, and how far it sits from commercial deployment.
- Calm and factual. No hype, no exclamation marks.

## 3. File location and name

Save to:

    ~/Documents/CodingProjects/rdinnovate-blog/_posts/

Filename format:

    YYYY-MM-DD-kebab-case-title.md

Use TODAY'S date in Australia/Sydney. Get it with: `date +%Y-%m-%d`

## 4. Front matter — exactly this shape

    ---
    layout: post
    title: "Headline in sentence case"
    date: YYYY-MM-DD
    excerpt: "One or two sentences. Under 200 characters. No quotes, no angle brackets."
    category: "Quantum"
    catslug: "quantum"
    ---

### Category and catslug pairs

Prefer an existing category. These already have colours and appear in the
site's dropdown filter:

| category              | catslug             | typical subject matter          |
|-----------------------|---------------------|---------------------------------|
| Quantum               | quantum             | entanglement, qubits, coherence |
| Compute & AI          | compute-ai          | chips, models, lithography      |
| Energy                | energy              | batteries, fuel cells, fusion   |
| Materials             | materials           | catalysts, crystals, polymers   |
| Bio                   | bio                 | genetics, cells, organisms      |
| Physics & Space       | physics-space       | astrophysics, particles         |
| Robotics              | robotics            | autonomy, actuators, machines   |
| Climate & Environment | climate-environment | emissions, capture, ecosystems  |
| Medicine              | medicine            | clinical results, therapeutics  |
| Chemistry             | chemistry           | reactions, synthesis            |
| Neuroscience          | neuroscience        | brain, neural interfaces        |

The catslug sets the card's gradient colour and must match the table exactly.

### If the topic genuinely does not fit any of the above

You MAY create a new category. Only do this when forcing the article into an
existing one would be actively misleading, not merely imperfect. A story about
a new battery chemistry is Energy or Materials, not "Battery Tech".

When you do create one:

1. Use Title Case for `category`, and its lower-case kebab form for `catslug`
   (for example "Fusion Power" becomes `fusion-power`).
2. It appears in the site's dropdown filter automatically, with the correct
   count. Nothing needs adding for that to work.
3. Running `sync_categories.py` in step 6 generates a colour for it and writes
   it to `_data/categories.yml`. The colour derives from the slug, so it is
   stable across builds and distinct from the others.
4. SAY SO CLEARLY in your final report:
   `NEW CATEGORY CREATED: Fusion Power / fusion-power`

Never invent a new catslug for a category already in the table above.
Mismatched slugs fragment the dropdown into near-duplicate entries.

## 5. Body rules — CRITICAL

These are not stylistic preferences. Violating the first two has already
broken the live site once.

- NEVER use HTML comment blocks, the `<!-- ... -->` form. An unclosed one makes
  the browser hide every article below it on the homepage.
- NEVER use HTML tags, or bare `<` and `>` characters, anywhere in the body or
  the front matter. Write "less than 10 nm", not "<10 nm".
- No H1 heading. The title comes from front matter.
- Use `##` for section headings and `###` for sub-headings.
- Include a `## Sources` section with markdown links to primary sources.
- End with a short `## The R&D takeaway` section: two to four sentences on what
  this means for people funding or planning R&D.
- Final line, italicised: *The R&D Innovate desk*

## 6. Publish

Run exactly these commands, in this order:

    cd ~/Documents/CodingProjects/rdinnovate-blog
    python3 _source/sync_categories.py
    git add -A
    git commit -m "Article: $(date +%Y-%m-%d)"
    git push

`sync_categories.py` gives any brand-new category a colour in
`_data/categories.yml` so the card renders correctly. It is safe to run every
time; it prints "No new categories" and exits when there is nothing to do.

Run it BEFORE `git add`, or the new colour will not be included in the commit.

Pushing triggers a GitHub Actions build. The article is live in two or three
minutes.

## 7. Rules and failure handling

- Add ONE new file only. Do not modify or delete any existing file. The one
  exception is `_data/categories.yml`, which `sync_categories.py` may append to.
- Do not touch `_config.yml`, `_layouts/`, `assets/`, `index.html`, or
  `.github/`.
- The git remote MUST stay `git@github-blog:RDInnovateRD/rdinnovate-blog.git`.
  The `github-blog` alias selects the correct GitHub account. If a push fails,
  REPORT THE ERROR AND STOP. Do not change the remote, do not switch to HTTPS,
  do not try other credentials.
- No password is needed. An SSH key handles authentication.
- If you cannot find a suitable topic, write nothing and say so. A missed day
  is better than a weak article.

## 8. Confirm

After pushing, report:

- The article title and its category
- The filename created
- Whether a new category was created, and its name and slug if so
- Confirmation that the push succeeded
