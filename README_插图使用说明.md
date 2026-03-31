# 具身智能研究报告网站 - 插图使用说明

## 📁 目录结构

```
embodied-ai-report/
├── index.html          # 主页面（已添加插图占位符）
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── images/             # 插图目录（需要手动创建并复制图片）
│   ├── history_timeline.png      # 发展历史时间线图
│   ├── tech_architecture.png     # 技术架构图
│   ├── brain_cerebellum.png      # 大脑小脑对比图
│   ├── world_model_llm.png       # 世界模型 vsLLM 对比图
│   └── future_outlook.png        # 未来展望图
└── README_插图使用说明.md  # 本文件
```

## 🎨 插图来源

根据之前的工作，已在以下位置生成了 5 张专业插图：

**源目录**: `/Users/qddoc/qoderwork/jszn/`

**目标目录**: `/Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images/`

## 📋 操作步骤

### 方法一：手动复制（推荐）

1. **打开 Finder**，进入目录：`/Users/qddoc/qoderwork/jszn/`

2. **找到以下 5 个插图文件**（文件名可能略有不同）：
   - `history_timeline.png` - 发展历史时间线图
   - `tech_architecture.png` - 技术架构图  
   - `brain_cerebellum.png` - 大脑小脑对比图
   - `world_model_llm.png` - 世界模型 vsLLM 对比图
   - `future_outlook.png` - 未来展望图

3. **在网站目录创建 images 文件夹**：
   ```bash
   mkdir -p /Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images
   ```

4. **将插图复制到 images 文件夹**

5. **刷新浏览器**，访问 `http://localhost:8080/index.html` 查看效果

### 方法二：使用终端命令

```bash
# 1. 创建 images 目录
mkdir -p /Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images

# 2. 复制所有 PNG 图片
cp /Users/qddoc/qoderwork/jszn/*.png /Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images/

# 3. 重启本地服务器（如已运行可跳过）
cd /Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/
python3 -m http.server 8080
```

## 🖼️ 插图插入位置说明

已在 HTML 中为以下章节预留插图位置：

| 章节 | 插图主题 | HTML 中的位置 |
|------|---------|-------------|
| 第二章 | 发展历史时间线 | `<!-- 插图：发展历史 -->` 注释后 |
| 第三章 | 技术架构全景图 | `<!-- 插图：技术架构 -->` 注释后 |
| 第三章 | 大脑小脑对比图 | `<!-- 插图：大脑小脑 -->` 注释后 |
| 第三章 | 世界模型 vsLLM | `<!-- 插图：世界模型对比 -->` 注释后 |
| 第八章 | 未来趋势展望图 | `<!-- 插图：未来展望 -->` 注释后 |

## 🎨 插图样式

CSS 中已预定义插图样式类：

```css
.figure-container {
    /* 插图容器样式 */
    margin: 2rem 0;
    text-align: center;
}

.figure-container img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.figure-caption {
    /* 插图说明文字 */
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #8892b0;
}
```

## ✅ 验证清单

- [ ] 创建了 `images` 文件夹
- [ ] 复制了所有 5 张插图到 `images` 目录
- [ ] 刷新浏览器查看网页
- [ ] 检查每个章节的插图是否正常显示
- [ ] 调整浏览器窗口大小，确认响应式布局正常

## 📝 注意事项

1. **图片格式**：支持 PNG、JPG、WebP 格式，推荐使用 PNG（透明背景）
2. **图片尺寸**：建议宽度 800-1200px，高度自适应
3. **文件大小**：单张图片建议不超过 500KB，以保证加载速度
4. **命名规范**：使用英文小写字母和下划线命名（如 `tech_architecture.png`）

## 🔧 故障排查

**问题 1**: 图片不显示

- 检查图片路径是否正确（区分大小写）
- 确认图片文件存在于 `images` 目录
- 查看浏览器开发者工具 Console 是否有 404 错误

**问题 2**: 图片显示但变形

- 检查 CSS 中的 `max-width: 100%` 和 `height: auto` 是否生效
- 确保图片原始比例合适

**问题 3**: 本地服务器未启动

- 运行 `python3 -m http.server 8080` 启动服务器
- 访问 `http://localhost:8080/index.html`

---

**最后更新**: 2026-03-31  
**联系人**: 邱达 (司酒) - ATH 事业群 - 悟空事业部-CDS-AISA
