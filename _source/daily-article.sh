#!/bin/bash
#
# Daily R&D Innovate article — runs at 06:30 via launchd.
# Invokes Claude Code headless against the house-style instructions,
# which write the post into _posts/ and push it to GitHub.
#
# Test manually first:  bash _source/daily-article.sh
#

set -uo pipefail

REPO="$HOME/Documents/CodingProjects/rdinnovate-blog"
INSTRUCTIONS="$REPO/_source/daily-task-instructions.md"
LOGDIR="$HOME/Library/Logs/rdinnovate"
LOG="$LOGDIR/$(date +%Y-%m-%d).log"

# launchd starts with a minimal PATH — add the usual install locations
export PATH="$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:$HOME/.npm-global/bin:$PATH"

mkdir -p "$LOGDIR"

{
  echo "════════════════════════════════════════════════════"
  echo "run started: $(date)"
  echo "════════════════════════════════════════════════════"

  if ! command -v claude >/dev/null 2>&1; then
    echo "ERROR: claude CLI not on PATH. Install it, then re-test."
    exit 1
  fi
  echo "claude: $(command -v claude)  $(claude --version 2>&1 | head -1)"

  if [ ! -f "$INSTRUCTIONS" ]; then
    echo "ERROR: instructions not found at $INSTRUCTIONS"
    exit 1
  fi

  cd "$REPO" || { echo "ERROR: cannot cd to $REPO"; exit 1; }

  BEFORE=$(ls _posts | wc -l | tr -d ' ')
  echo "posts before: $BEFORE"
  echo "----------------------------------------------------"

  # NOTE: if these flags error on first manual run, check `claude --help`
  # and adjust. Print mode plus explicit tool allowances keeps this
  # non-interactive without disabling permissions wholesale.
  claude -p "$(cat "$INSTRUCTIONS")" \
      --permission-mode acceptEdits \
      --allowedTools "Read,Write,Edit,Bash" 2>&1

  STATUS=$?
  echo "----------------------------------------------------"
  echo "claude exit status: $STATUS"

  AFTER=$(ls _posts | wc -l | tr -d ' ')
  echo "posts after: $AFTER"

  if [ "$AFTER" -gt "$BEFORE" ]; then
    echo "NEW POST: $(ls -t _posts | head -1)"
  else
    echo "WARNING: no new post was created."
  fi

  # Safety net: if the article landed but was never pushed, push it.
  if [ -n "$(git status --porcelain)" ]; then
    echo "uncommitted changes found — committing and pushing"
    python3 _source/sync_categories.py
    git add -A
    git commit -m "Article: $(date +%Y-%m-%d)"
    git push && echo "pushed OK" || echo "ERROR: push failed"
  else
    echo "working tree clean"
  fi

  echo "run finished: $(date)"
  echo ""
} >> "$LOG" 2>&1
