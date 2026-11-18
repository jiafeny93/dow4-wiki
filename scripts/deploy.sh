#!/bin/bash
# deploy.sh — one-command safe deploy: retry × 12 (2min apart) + homepage health check.
# The network to Cloudflare is intermittent from this machine; this script
# removes the operational risk without needing a CF API token.
#
# Usage: ./scripts/deploy.sh          (deploy current dist/)
#        ./scripts/deploy.sh build    (rebuild first, then deploy)
set -u
cd "$(dirname "$0")/.." || exit 1

if [ "${1:-}" = "build" ]; then
  echo "── build ──"
  SITE_URL=https://dow4.xyz ./node_modules/.bin/astro build || { echo "❌ build failed"; exit 1; }
  [ -f dist/index.html ] || { echo "❌ dist/index.html missing — aborting"; exit 1; }
fi

echo "── deploy (retries built in) ──"
ok=0
for i in $(seq 1 12); do
  out=$(npx wrangler pages deploy dist --project-name=dow4-wiki --branch main --commit-dirty=true 2>&1 | tail -3)
  if echo "$out" | grep -q "Success"; then
    echo "✅ deployed (attempt $i)"
    ok=1
    break
  fi
  echo "⏳ attempt $i failed — retry in 2min"
  sleep 120
done
[ $ok -eq 1 ] || { echo "❌ 12 attempts failed — run me again later: ./scripts/deploy.sh"; exit 1; }

echo "── homepage health check ──"
sleep 10
code=$(curl -s -o /dev/null --max-time 15 -w "%{http_code}" https://dow4.xyz/)
count=$(curl -s --max-time 15 https://dow4.xyz/ | grep -c "launch-countdown")
if [ "$code" = "200" ] && [ "$count" -ge 1 ]; then
  echo "✅ homepage healthy (HTTP $code, hero intact)"
else
  echo "⚠️ homepage check: HTTP $code, countdown hits: $count — investigate before next content wave"
fi
