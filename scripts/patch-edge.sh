#!/usr/bin/env bash
# 把解压后的上游 xpi 目录改造成 Chromium / Edge 可加载的扩展。
# 用法：bash scripts/patch-edge.sh <上游解压目录>，省略目录时处理当前目录。
set -euo pipefail

src="${1:-.}"
cd "$src"

if [ ! -f manifest.json ]; then
  echo "找不到 manifest.json：$src" >&2
  exit 1
fi

node - <<'NODE'
const fs = require('fs');
const path = 'manifest.json';
const m = JSON.parse(fs.readFileSync(path, 'utf8'));

if (!m.background || !Array.isArray(m.background.scripts) || m.background.scripts.length === 0) {
  throw new Error('background.scripts 结构发生变化，需要人工检查');
}
m.background = { service_worker: m.background.scripts[0] };
delete m.browser_specific_settings;
m.minimum_chrome_version = '102';

fs.writeFileSync(path, JSON.stringify(m, null, 2) + '\n');
NODE

rm -rf META-INF amo_metadata.json

for f in dist/background.bundle.js dist/content.bundle.js dist/popup.bundle.js dist/utils.bundle.js; do
  if [ -f "$f" ]; then
    sed -i 's/\bbrowser\./chrome./g' "$f"
  fi
done

if grep -q 'browser\.' dist/*.bundle.js 2>/dev/null; then
  echo "警告：dist 中仍有 browser. 引用，需要人工检查" >&2
else
  echo "完成。dist 中已无 browser. 引用"
fi
echo "manifest background：$(node -p "JSON.stringify(require('./manifest.json').background)")"
