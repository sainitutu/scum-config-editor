# 🎮 SCUM 伺服器設定編輯器

一個專為SCUM遊戲伺服器管理員設計的中文化設定編輯工具，讓您輕鬆管理和編輯伺服器設定檔。

## ✨ 功能特色

- 📝 **直觀的設定編輯** - 將複雜的設定檔轉換為易於理解的中文介面
- 🔍 **智能解析** - 自動識別和分類各種設定項目
- 📚 **詳細說明** - 每個設定項目都有完整的中文說明和範例
- 🎯 **類別分組** - 按功能將設定項目分組，便於管理
- 💾 **一鍵輸出** - 生成完整的設定檔，可直接複製使用
- 📱 **響應式設計** - 支援桌面和行動裝置
- 🌐 **純前端** - 無需安裝，直接在瀏覽器中使用

## 🚀 線上使用

訪問 GitHub Pages 部署的線上版本：
[https://sainitutu.github.io/scum-config-editor/](https://sainitutu.github.io/scum-config-editor/)


## 📖 使用方法

1. **輸入設定檔**
   - 將您的SCUM伺服器設定檔內容貼到輸入框中
   - 或點擊「載入範例設定」查看示例

2. **解析設定**
   - 點擊「🔍 解析設定」按鈕
   - 系統會自動解析並顯示所有設定項目

3. **編輯設定**
   - 在設定編輯區域中修改各項參數
   - 每個設定都有詳細的中文說明和範例
   - 可使用「重置」按鈕恢復原始值

4. **生成輸出**
   - 點擊「生成設定檔」按鈕
   - 使用「📋 複製到剪貼板」功能複製結果
   - 將生成的設定檔貼到您的伺服器中

## 🎯 支援的設定類別

- **基本設定** - 伺服器名稱、玩家數量、密碼等
- **網路設定** - 端口配置
- **遊戲玩法** - 難度、PvP、生成倍數等
- **玩家設定** - 生命值、體力、消耗速度等
- **載具設定** - 燃料消耗、傷害倍數等
- **建築設定** - 衰減速度、建築限制等
- **時間設定** - 白天/夜晚持續時間
- **天氣設定** - 雨天、暴風雨頻率
- **經驗值設定** - 經驗值和技能點倍數
- **日誌設定** - 聊天和擊殺日誌
- **安全設定** - 反作弊、延遲限制等

## 🛠️ 本地開發

```bash
# 克隆專案
git clone https://github.com/your-username/scum-config-editor.git

# 進入專案目錄
cd scum-config-editor

# 直接在瀏覽器中打開 index.html
# 或使用本地伺服器
python -m http.server 8000
# 然後訪問 http://localhost:8000
```

## 📁 專案結構

```
scum-config-editor/
├── index.html              # 主頁面
├── style.css               # 樣式文件
├── script.js               # 主要邏輯
├── config-definitions.js   # 設定項目定義和中文說明
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages 自動部署
└── README.md               # 專案說明
```

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個工具！

### 如何添加新的設定項目

1. 在 `config-definitions.js` 中的 `CONFIG_DEFINITIONS` 對象中添加新項目
2. 提供中文說明、範例和類別信息
3. 測試確保功能正常

### 範例格式

```javascript
'SettingName': {
    description: '設定說明 - 詳細描述這個設定的作用',
    example: 'SettingName=預設值',
    type: 'string|number|float|boolean',
    category: '設定類別'
}
```

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 🙏 致謝

- SCUM 遊戲開發團隊
- 所有貢獻者和使用者的反饋

## 📞 聯絡

如有問題或建議，請通過 GitHub Issues 聯絡我們。

---

**注意**: 請在使用前備份您的原始設定檔，並在測試環境中驗證生成的設定檔。
