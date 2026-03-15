#!/bin/bash

SCRIPT_FILE="dist/userscript/immersive-translate.user.js"

# 檢查文件是否存在
if [ ! -f "$SCRIPT_FILE" ]; then
    echo "錯誤：文件 $SCRIPT_FILE 不存在。"
    exit 1
fi

# 將文件換行符轉換為 LF
sed -i 's/\r$//' "$SCRIPT_FILE"

# 修改版本號，加上第四段數字
CURRENT_VERSION=$(grep -oP '(?<=^// @version)\s+\K\S+' "$SCRIPT_FILE")
if [[ -z "$CURRENT_VERSION" ]]; then
    echo "錯誤：無法從 $SCRIPT_FILE 中提取版本號。"
    exit 1
fi

if [[ "$CURRENT_VERSION" =~ ^([0-9]+\.[0-9]+\.[0-9]+)\.([0-9]+)$ ]]; then
    NEW_VERSION="${BASH_REMATCH[1]}.$(( ${BASH_REMATCH[2]} + 1 ))"
else
    NEW_VERSION="${CURRENT_VERSION}.1"
fi

sed -i "s|^// @version\([[:space:]]\+\).*$|// @version\1$NEW_VERSION|" "$SCRIPT_FILE"
echo "版本號已修改：$CURRENT_VERSION => $NEW_VERSION"