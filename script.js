// 全局變數
let parsedConfig = {};
let configItems = [];

// DOM 元素
const configInput = document.getElementById('configInput');
const configEditor = document.getElementById('configEditor');
const configOutput = document.getElementById('configOutput');
const parseBtn = document.getElementById('parseBtn');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const loadSampleBtn = document.getElementById('loadSampleBtn');
const clearBtn = document.getElementById('clearBtn');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

// 事件監聽器初始化
function initializeEventListeners() {
    parseBtn.addEventListener('click', parseConfig);
    generateBtn.addEventListener('click', generateConfig);
    copyBtn.addEventListener('click', copyToClipboard);
    loadSampleBtn.addEventListener('click', loadSampleConfig);
    clearBtn.addEventListener('click', clearInput);
}

// 載入範例設定
function loadSampleConfig() {
    configInput.value = SAMPLE_CONFIG;
    showMessage('已載入範例設定檔', 'success');
}

// 清空輸入
function clearInput() {
    configInput.value = '';
    configEditor.innerHTML = '<div class="placeholder"><p>請先在上方輸入設定檔內容，然後點擊「解析設定」按鈕</p></div>';
    configOutput.value = '';
    parsedConfig = {};
    configItems = [];
    showMessage('已清空所有內容', 'success');
}

// 解析設定檔
function parseConfig() {
    const inputText = configInput.value.trim();
    
    if (!inputText) {
        showMessage('請先輸入設定檔內容', 'error');
        return;
    }

    try {
        parsedConfig = {};
        configItems = [];
        
        const lines = inputText.split('\n');
        
        lines.forEach((line, index) => {
            line = line.trim();
            
            // 跳過空行、註解行和區段標題行
            if (!line || line.startsWith('#') || (line.startsWith('[') && line.endsWith(']'))) {
                return;
            }
            
            // 解析 key=value 格式
            const equalIndex = line.indexOf('=');
            if (equalIndex > 0) {
                const key = line.substring(0, equalIndex).trim();
                const value = line.substring(equalIndex + 1).trim();
                
                parsedConfig[key] = value;
                configItems.push({ key, value, lineNumber: index + 1 });
            }
        });
        
        renderConfigEditor();
        showMessage(`成功解析 ${configItems.length} 個設定項目`, 'success');
        
    } catch (error) {
        showMessage('解析設定檔時發生錯誤: ' + error.message, 'error');
    }
}

// 渲染設定編輯器
function renderConfigEditor() {
    if (configItems.length === 0) {
        configEditor.innerHTML = '<div class="placeholder"><p>沒有找到有效的設定項目</p></div>';
        return;
    }

    // 按類別分組
    const groupedItems = groupConfigItemsByCategory();
    
    let html = '';
    
    Object.keys(groupedItems).forEach(category => {
        const categoryId = category.replace(/\s+/g, '-').toLowerCase();
        html += `<div class="config-category">
            <h3 class="category-title collapsible" data-target="${categoryId}">
                <span class="collapse-icon">▼</span>
                ${category} (${groupedItems[category].length} 項)
            </h3>
            <div class="category-items" id="${categoryId}">`;
        
        groupedItems[category].forEach(item => {
            html += renderConfigItem(item);
        });
        
        html += '</div></div>';
    });
    
    configEditor.innerHTML = html;
    
    // 添加事件監聽器
    addConfigItemEventListeners();
    addCollapseEventListeners();
}

// 按類別分組設定項目
function groupConfigItemsByCategory() {
    const grouped = {};
    
    configItems.forEach(item => {
        const definition = CONFIG_DEFINITIONS[item.key];
        const category = definition ? definition.category : '其他設定';
        
        if (!grouped[category]) {
            grouped[category] = [];
        }
        
        grouped[category].push(item);
    });
    
    return grouped;
}

// 渲染單個設定項目
function renderConfigItem(item) {
    const definition = CONFIG_DEFINITIONS[item.key];
    const isKnown = !!definition;
    
    let html = `<div class="config-item" data-key="${item.key}">
        <div class="config-item-header">
            <span class="config-key">${item.key}</span>
            <span class="config-type ${isKnown ? definition.type : 'unknown'}">${isKnown ? definition.type : '未知'}</span>
        </div>`;
    
    if (isKnown) {
        html += `<div class="config-description">${definition.description}</div>
            <div class="config-example">範例: ${definition.example}</div>`;
    } else {
        html += `<div class="config-description">此設定項目暫無中文說明，請參考官方文檔。</div>`;
    }
    
    html += `<div class="config-input-group">
            <input type="text" class="config-input" value="${escapeHtml(item.value)}" data-key="${item.key}">
            <button class="btn btn-secondary reset-btn" data-key="${item.key}" title="重置為原始值">重置</button>
        </div>
    </div>`;
    
    return html;
}

// 添加設定項目事件監聽器
function addConfigItemEventListeners() {
    // 輸入框變更事件
    document.querySelectorAll('.config-input').forEach(input => {
        input.addEventListener('input', function() {
            const key = this.dataset.key;
            parsedConfig[key] = this.value;
        });
    });
    
    // 重置按鈕事件
    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const key = this.dataset.key;
            const originalItem = configItems.find(item => item.key === key);
            if (originalItem) {
                const input = document.querySelector(`.config-input[data-key="${key}"]`);
                input.value = originalItem.value;
                parsedConfig[key] = originalItem.value;
                showMessage(`已重置 ${key} 為原始值`, 'success');
            }
        });
    });
}

// 生成設定檔
function generateConfig() {
    if (Object.keys(parsedConfig).length === 0) {
        showMessage('請先解析設定檔', 'error');
        return;
    }
    
    try {
        let output = '# SCUM 伺服器設定檔\n';
        output += '# 由 SCUM 設定編輯器生成\n';
        output += '# 生成時間: ' + new Date().toLocaleString('zh-TW') + '\n\n';
        
        // 按類別分組輸出
        const groupedItems = groupConfigItemsByCategory();
        
        Object.keys(groupedItems).forEach(category => {
            output += `# ${category}\n`;
            
            groupedItems[category].forEach(item => {
                const currentValue = parsedConfig[item.key];
                const definition = CONFIG_DEFINITIONS[item.key];
                
                if (definition) {
                    output += `# ${definition.description}\n`;
                }
                
                output += `${item.key}=${currentValue}\n`;
            });
            
            output += '\n';
        });
        
        configOutput.value = output;
        showMessage('設定檔生成成功', 'success');
        
    } catch (error) {
        showMessage('生成設定檔時發生錯誤: ' + error.message, 'error');
    }
}

// 複製到剪貼板
async function copyToClipboard() {
    if (!configOutput.value) {
        showMessage('請先生成設定檔', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(configOutput.value);
        showMessage('設定檔已複製到剪貼板', 'success');
    } catch (error) {
        // 降級方案
        configOutput.select();
        document.execCommand('copy');
        showMessage('設定檔已複製到剪貼板', 'success');
    }
}

// 顯示訊息
function showMessage(message, type = 'info') {
    // 移除現有訊息
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // 創建新訊息
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    
    // 插入到第一個 section 前面
    const firstSection = document.querySelector('section');
    firstSection.parentNode.insertBefore(messageDiv, firstSection);
    
    // 3秒後自動移除
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// HTML 轉義
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 驗證設定值
function validateConfigValue(key, value, type) {
    switch (type) {
        case 'number':
            return !isNaN(value) && value !== '';
        case 'float':
            return !isNaN(parseFloat(value)) && value !== '';
        case 'boolean':
            return value === 'true' || value === 'false';
        case 'string':
            return true; // 字串總是有效的
        default:
            return true;
    }
}

// 搜索功能（可選）
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索設定項目...';
    searchInput.className = 'search-input';
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const configItems = document.querySelectorAll('.config-item');
        
        configItems.forEach(item => {
            const key = item.dataset.key.toLowerCase();
            const description = item.querySelector('.config-description')?.textContent.toLowerCase() || '';
            
            if (key.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // 將搜索框插入到編輯器前面
    const editorSection = document.querySelector('.editor-section h2');
    editorSection.parentNode.insertBefore(searchInput, editorSection.nextSibling);
}

// 導出功能
function exportConfig(format = 'txt') {
    if (!configOutput.value) {
        showMessage('請先生成設定檔', 'error');
        return;
    }
    
    const blob = new Blob([configOutput.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scum-server-config.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showMessage('設定檔已下載', 'success');
}

// 添加收起/展開事件監聽器
function addCollapseEventListeners() {
    document.querySelectorAll('.collapsible').forEach(title => {
        title.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetElement = document.getElementById(targetId);
            const icon = this.querySelector('.collapse-icon');
            
            if (targetElement.style.display === 'none') {
                targetElement.style.display = 'block';
                icon.textContent = '▼';
                this.classList.remove('collapsed');
            } else {
                targetElement.style.display = 'none';
                icon.textContent = '▶';
                this.classList.add('collapsed');
            }
        });
    });
}

// 全部展開/收起功能
function toggleAllCategories(expand = true) {
    document.querySelectorAll('.category-items').forEach(items => {
        items.style.display = expand ? 'block' : 'none';
    });
    
    document.querySelectorAll('.collapse-icon').forEach(icon => {
        icon.textContent = expand ? '▼' : '▶';
    });
    
    document.querySelectorAll('.collapsible').forEach(title => {
        if (expand) {
            title.classList.remove('collapsed');
        } else {
            title.classList.add('collapsed');
        }
    });
}

// 鍵盤快捷鍵
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
        switch (e.key) {
            case 's':
                e.preventDefault();
                generateConfig();
                break;
            case 'Enter':
                e.preventDefault();
                parseConfig();
                break;
        }
    }
});
