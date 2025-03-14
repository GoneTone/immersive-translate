#!/bin/bash

SCRIPT_FILE="dist/userscript/immersive-translate.user.js"

# 檢查文件是否存在
if [ ! -f "$SCRIPT_FILE" ]; then
    echo "錯誤: 文件 $SCRIPT_FILE 不存在"
    exit 1
fi

# 修改 @name 和 @name:zh-TW，只有在沒有標記時才添加標記
sed -i -e '/^\/\/ @name[[:space:]]\+\[Modify\]/!s|^// @name\([[:space:]]\+\)\(.*\)$|// @name\1[Modify] \2|' \
       -e '/^\/\/ @name:zh-TW[[:space:]]\+【修改】/!s|^// @name:zh-TW\([[:space:]]\+\)\(.*\)$|// @name:zh-TW\1【修改】\2|' \
       -e 's|^// @namespace\([[:space:]]\+\).*$|// @namespace\1https://github.com/GoneTone/immersive-translate/|' \
       -e 's|^// @downloadURL\([[:space:]]\+\).*$|// @downloadURL\1https://github.com/GoneTone/immersive-translate/raw/refs/heads/main/dist/userscript/immersive-translate.user.js|' \
       -e 's|^// @updateURL\([[:space:]]\+\).*$|// @updateURL\1https://github.com/GoneTone/immersive-translate/raw/refs/heads/main/dist/userscript/immersive-translate.user.js|' \
       "$SCRIPT_FILE"

# 檢查是否已有新的 @connect 行，如果沒有則添加
grep -q "^// @connect.*ollama.reh.tw" "$SCRIPT_FILE" || sed -i '/^\/\/ @connect[[:space:]]\+google\.com/i // @connect    ollama.reh.tw' "$SCRIPT_FILE"
grep -q "^// @connect.*ai.reh.tw" "$SCRIPT_FILE" || sed -i '/^\/\/ @connect[[:space:]]\+google\.com/i // @connect    ai.reh.tw' "$SCRIPT_FILE"

echo "UserScript 已修改完成！"
