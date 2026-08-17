#!/bin/bash
#
# Daily R&D Innovate article — runs at 06:30 via launchd.
# Invokes Claude Code headless against the house-style instructions,
# which write the post into _posts/ and push it to GitHub.
#
# Test manually:  bash _source/daily-article.sh
#
# NOTE: launchd provides no TTY and no usable stdin. Claude Code blocks
# forever if stdin is left connected, so it is redirected from /dev/null.
# A watchdog also hard-kills the run after TIMEOUT seconds; macOS has no
# `timeout` command.
#

set -uo pipefail

REPO="$HOME/Documents/CodingProjects/rdinnovate-blog"
INSTRUCTIONS="$REPO/_source/daily-task-instructions.md"
LOGDIR="$HOME/Library/Logs/rdinnovate"
LOG="$LOGDIR/$(date +%Y-%m-%d).log"
TIMEOUT=900          # 15 minutes

export PATH="$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:$HOME/.npm-global/bin:$PATH"

mkdir -p "$LOGDIR"

{
  echo "════════════════════════════════════════════════════"
  echo "run started: $(date)"
  echo "════════════════════════════════════════════════════"

  if ! command -v claude >/dev/null 2>&1; then
    echo "ERROR: claude CLI not on PATH."; exit 1
  fi
  echo "claude: $(command -v claude)  $(claude --version 2>&1 | head -1)"

  [ -f "$INSTRUCTIONS" ] || { echo "ERROR: instructions missing"; exit 1; }
  cd "$REPO" || { echo "ERROR: cannot cd to $REPO"; exit 1; }

  # wait for network — launchd may fire before wifi is up after a wake
  for i in $(seq 1 30); do
    if ping -c1 -W2 api.anthropic.com >/dev/null 2>&1; then
      echo "network up after ${i}s"; break
    fi
    [ "$i" -eq 30 ] && echo "WARNING: no network after 30s, trying anyway"
    sleep 1
  done

  BEFORE=$(ls _posts | wc -l | tr -d ' ')
  echo "posts before: $BEFORE"
  echo "----------------------------------------------------"

  # stdin from /dev/null: without it, claude blocks under launchd
  claude -p "$(cat "$INSTRUCTIONS")" \
      --permission-mode acceptEdits \
      --allowedTools "Read,Write,Edit,Bash,WebSearch,WebFetch" \
      </dev/null 2>&1 &
  CLAUDE_PID=$!

  ( sleep "$TIMEOUT"; kill -9 "$CLAUDE_PID" 2>/dev/null ) &
  WATCHDOG=$!

  wait "$CLAUDE_PID"
  STATUS=$?
  kill "$WATCHDOG" 2>/dev/null

  echo "----------------------------------------------------"
  if [ "$STATUS" -eq 137 ]; then
    echo "ERROR: killed by watchdog after ${TIMEOUT}s (hung)"
  else
    echo "claude exit status: $STATUS"
  fi

  AFTER=$(ls _posts | wc -l | tr -d ' ')
  echo "posts after: $AFTER"
  if [ "$AFTER" -gt "$BEFORE" ]; then
    echo "NEW POST: $(ls -t _posts | head -1)"
  else
    echo "WARNING: no new post was created."
  fi

  # safety net: article written but not pushed
  if [ -n "$(git status --porcelain)" ]; then
    echo "uncommitted changes — committing and pushing"
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
