#!/usr/bin/env bash
# Downloads the deck's Google Fonts into engine/fonts so talks work offline on stage.
# Run once from the repo root while online:  ./scripts/vendor-fonts.sh
set -euo pipefail
cd "$(dirname "$0")/../engine"
mkdir -p fonts
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
URL="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;600&family=Schibsted+Grotesk:wght@400;500;600&display=swap"
curl -fsSL -A "$UA" "$URL" -o fonts/remote.css
i=0
cp fonts/remote.css fonts/fonts.css
grep -o 'https://fonts.gstatic.com[^)]*' fonts/remote.css | sort -u | while read -r f; do
  i=$((i + 1))
  name="font-$i.woff2"
  curl -fsSL "$f" -o "fonts/$name"
  sed -i.bak "s#$f#$name#g" fonts/fonts.css
done
rm -f fonts/remote.css fonts/fonts.css.bak
echo "Fonts saved to engine/fonts. Decks now load them locally first."
