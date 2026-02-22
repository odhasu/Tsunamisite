#!/bin/bash
# ============================================================
#  TSUNAMI CLIENT — AUTO PUSH TO GITHUB
#  Repo: https://github.com/odhasu/Tsunamisite.git
#  Usage: bash push.sh "your commit message"
#  Or just: bash push.sh   (uses auto timestamp message)
# ============================================================

set -e

REPO_URL="https://github.com/odhasu/Tsunamisite.git"
BRANCH="main"

# ---- Commit message: use arg or auto timestamp ----
if [ -n "$1" ]; then
  COMMIT_MSG="$1"
else
  COMMIT_MSG="Update site - $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo ""
echo "🌊 Tsunami Client — GitHub Auto Push"
echo "======================================"
echo "📁 Repo : $REPO_URL"
echo "🌿 Branch: $BRANCH"
echo "💬 Commit: $COMMIT_MSG"
echo ""

# ---- Init git if not already ----
if [ ! -d ".git" ]; then
  echo "⚙️  Initializing git repo..."
  git init
  git remote add origin "$REPO_URL"
  echo "✅ Git initialized"
else
  # Make sure remote is set correctly
  git remote set-url origin "$REPO_URL" 2>/dev/null || git remote add origin "$REPO_URL"
  echo "✅ Git repo already initialized"
fi

# ---- Stage all files ----
echo ""
echo "📦 Staging all files..."
git add -A

# ---- Check if there's anything to commit ----
if git diff --cached --quiet; then
  echo "⚠️  No changes to commit. Everything is up to date!"
  exit 0
fi

# ---- Commit ----
echo "💾 Committing..."
git commit -m "$COMMIT_MSG"

# ---- Set branch to main ----
git branch -M "$BRANCH"

# ---- Push ----
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin "$BRANCH"

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "🔗 https://github.com/odhasu/Tsunamisite"
echo ""
echo "📡 If connected to Netlify, your site will auto-deploy in ~30 seconds."
echo ""
