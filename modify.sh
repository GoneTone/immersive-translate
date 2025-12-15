#!/bin/bash

SCRIPT_FILE="dist/userscript/immersive-translate.user.js"
GITHUB_URL="https://github.com/GoneTone/immersive-translate/"
SCRIPT_URL="${GITHUB_URL}raw/refs/heads/main/dist/userscript/immersive-translate.user.js"

CONNECT_DOMAINS=("ollama.reh.tw" "ai.reh.tw" "192.168.0.150")

# 檢查文件是否存在
if [ ! -f "$SCRIPT_FILE" ]; then
    echo "錯誤：文件 $SCRIPT_FILE 不存在。"
    exit 1
fi

# 將文件換行符轉換為 LF
sed -i 's/\r$//' "$SCRIPT_FILE"

# 修改 UserScript 內容
sed -i \
    -e '/^\/\/ @name:zh-TW/!{/^\/\/ @name\(:[a-zA-Z-]\+\)\?[[:space:]]\+\[Modify\]/!s|^// @name\(:[a-zA-Z-]\+\)\?\([[:space:]]\+\)\(.*\)$|// @name\1\2[Modify] \3|}' \
    -e '/^\/\/ @name:zh-TW[[:space:]]\+【修改】/!s|^// @name:zh-TW\([[:space:]]\+\)\(.*\)$|// @name:zh-TW\1【修改】\2|' \
    -e '/^\/\/ @author.*Modified by GoneTone/!s|^// @author\([[:space:]]\+\)\(.*\)$|// @author\1\2 (Modified by GoneTone)|' \
    -e "s|^// @namespace\([[:space:]]\+\).*$|// @namespace\1$GITHUB_URL|" \
    -e "s|^// @downloadURL\([[:space:]]\+\).*$|// @downloadURL\1$SCRIPT_URL|" \
    -e "s|^// @updateURL\([[:space:]]\+\).*$|// @updateURL\1$SCRIPT_URL|" \
    "$SCRIPT_FILE"

# 檢查是否已有自訂網域的 @connect 行，如果沒有則添加
for DOMAIN in "${CONNECT_DOMAINS[@]}"; do
    grep -q "^// @connect.*$DOMAIN" "$SCRIPT_FILE" || sed -i '/^\/\/ @connect[[:space:]]\+google\.com/i // @connect    '"$DOMAIN" "$SCRIPT_FILE"
done

echo "UserScript 已修改完成！"
