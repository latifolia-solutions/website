#!/bin/sh
# Inline src/style.css into each src/*.html page and minify into docs/ (served by GitHub Pages).
set -eu
cd "$(dirname "$0")"

for page in src/*.html; do
  out="docs/$(basename "$page")"
  python3 -c '
import sys
html, css = open(sys.argv[1]).read(), open("src/style.css").read()
link = "<link rel=\"stylesheet\" href=\"/style.css\" />"
assert link in html, f"{sys.argv[1]}: stylesheet link not found"
sys.stdout.write(html.replace(link, "<style>" + css + "</style>"))
' "$page" | npx -y html-minifier-terser@7.2.0 \
    --collapse-whitespace --remove-comments --minify-css true --minify-js true \
    --remove-attribute-quotes --remove-redundant-attributes --use-short-doctype \
    --decode-entities --sort-attributes --sort-class-name -o "$out"
  echo "$out: $(wc -c <"$out") bytes, $(gzip -9c "$out" | wc -c) gzipped"
done
