# 程高 - 个人职业展示网站

> **🌐 在线访问**: [https://career.chenggao.top](https://career.chenggao.top) ✅ **部署成功**

一个现代化的个人职业展示网站，专为金融工程研究生程高量身打造，展示AI技术能力、项目经验和职业成就。基于 React + TypeScript + Tailwind CSS 构建，通过 GitHub Actions 自动部署到自定义域名。

## ⚠️ 重要说明

这是一个 **Vite + React** 项目，**不能直接打开 index.html 文件**！

必须通过以下方式之一运行：
1. 启动开发服务器（推荐用于开发）
2. 构建后部署到服务器（用于生产）

## 🔧 本地开发和运行

### 方法一：开发模式（推荐）
```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 在浏览器中打开显示的地址（通常是 http://localhost:5173）
```

### 方法二：构建生产版本
```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 预览构建结果
npm run preview

# 或者将 dist 文件夹部署到服务器
```

## 🏗️ 项目架构

### 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **开发工具**: ESLint + PostCSS

### 项目结构
```
project/
├── src/
│   ├── components/         # React组件
│   │   ├── Header.tsx      # 网站头部
│   │   ├── Hero.tsx        # 英雄区块
│   │   ├── Portfolio.tsx   # 作品集展示
│   │   ├── Projects.tsx    # 项目展示
│   │   ├── Education.tsx   # 教育背景
│   │   ├── Internships.tsx # 实习经历
│   │   ├── Contact.tsx     # 联系信息
│   │   ├── Footer.tsx      # 网站底部
│   │   └── ImageModal.tsx  # 图片弹窗组件
│   ├── data/              # 数据配置
│   │   ├── links.ts        # 外链配置
│   │   ├── portfolio-images.ts # 作品集图片配置
│   │   └── 职业基础信息0804.md # 原始信息文档
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── public/                # 静态资源
│   └── images/
│       └── portfolio/     # 作品集图片
│           ├── academic-drawings/     # 学术绘图
│           ├── data-visualization/    # 数据可视化
│           └── competition-results/   # 竞赛成果
├── package.json           # 项目配置
├── vite.config.ts         # Vite配置
├── tailwind.config.js     # Tailwind配置
└── tsconfig.json          # TypeScript配置
```

## 🔗 链接配置系统

### 已配置的外链
- **个人生活网站**: https://life.chenggao.top ✅
- **AI卡片制作工具**: https://aicards.chenggao.top ✅
- **GitHub主页**: https://github.com/Cheng-hun-gu-ren ✅
- **微信公众号**: 已配置文章合集链接 ✅

### 弹窗展示功能
- **学术论文绘图**: `modal:academic-drawings` 🖼️
- **数据可视化报告**: `modal:data-visualization` 🖼️  
- **竞赛成果展示**: `modal:competition-results` 🖼️

### 链接配置文件
编辑 `src/data/links.ts` 文件来修改链接：

```typescript
export const EXTERNAL_LINKS = {
  // 个人网站和社交媒体
  personalWebsite: 'https://life.chenggao.top',
  wechatPublic: 'https://mp.weixin.qq.com/mp/appmsgalbum?...', // 公众号文章合集
  github: 'https://github.com/Cheng-hun-gu-ren',
  
  // 项目链接
  projects: {
    aiCardTool: 'https://aicards.chenggao.top',
    // ... 其他项目链接
  },
  
  // 作品集链接（支持弹窗展示）
  portfolio: {
    academicDrawings: 'modal:academic-drawings',    // 弹窗展示
    dataVisualization: 'modal:data-visualization',  // 弹窗展示
    wechatArticles: 'https://mp.weixin.qq.com/...' // 外链跳转
  }
};
```

### 弹窗系统使用方法

1. **添加图片资源**：
   ```bash
   # 把图片放到对应文件夹
   public/images/portfolio/academic-drawings/     # 学术绘图PNG文件
   public/images/portfolio/data-visualization/    # 数据报告PDF文件
   public/images/portfolio/competition-results/   # 竞赛证书图片
   ```

2. **更新图片配置**：
   编辑 `src/data/portfolio-images.ts` 添加新的图片信息

3. **链接格式**：
   - 弹窗展示：`modal:category-name`
   - 外链跳转：`https://example.com`
   - 邮件链接：`mailto:email@example.com`

## ☁️ OSS 上传指南

如需将资源上传到阿里云 OSS，请参考 `oss_upload_guide.md`。该文件包含上传流程与配置说明，**可能涉及敏感信息**，已加入 `.gitignore`，请勿提交到仓库或在 README 中粘贴密钥内容。使用时建议改为环境变量或后端配置。

## 🎨 设计特色

### 响应式设计
- ✅ 桌面端优化（1920px+）
- ✅ 平板端适配（768px-1024px）
- ✅ 移动端友好（<768px）

### 交互体验
- ✅ 平滑滚动导航
- ✅ 悬停动画效果  
- ✅ 图片弹窗预览
- ✅ 加载状态反馈

### 视觉效果
- ✅ 渐变背景和阴影
- ✅ 卡片式布局设计
- ✅ 统一的配色方案
- ✅ 现代化图标系统

## 🚀 部署配置

### 目标域名
- **主域名**: career.chenggao.top
- **现有参考**: 
  - life.chenggao.top (个人生活主页)
  - portfolio.chgr-cuhksz-gao.cn (学术页面)

### 推荐部署方案

#### 方案一：GitHub Pages + Cloudflare
```bash
# 1. 构建项目
npm run build

# 2. 推送 dist 内容到 gh-pages 分支
# 3. 在 Cloudflare 配置域名加速
```

#### 方案二：阿里云服务器 + Nginx
```nginx
server {
    listen 80;
    server_name career.chenggao.top;
    root /var/www/career-site;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|pdf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 自动化部署
创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install and Build
      run: |
        npm install
        npm run build
        
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📊 SEO 优化

### Meta 标签
```html
<meta name="description" content="程高 - 金融工程研究生，AI技术专家，to B软件开发者。专注于AI技术在金融领域的创新应用。">
<meta name="keywords" content="程高,金融工程,AI技术,全栈开发,深圳,香港中文大学,to B开发">
<meta name="author" content="程高">
```

### 结构化数据
- ✅ 个人信息 Schema.org
- ✅ 教育背景结构化
- ✅ 项目作品标记
- ✅ 技能标签优化

## 🛠️ 开发指南

### 添加新的作品项目
1. 在 `src/components/Portfolio.tsx` 的 `portfolioItems` 数组中添加新项目
2. 配置项目链接在 `src/data/links.ts`
3. 如需弹窗展示，在 `src/data/portfolio-images.ts` 添加图片配置

### 修改个人信息
1. 编辑 `src/data/职业基础信息0804.md` 更新基础信息
2. 在各个组件中同步更新显示内容
3. 更新 `src/data/links.ts` 中的联系方式

### 添加新的页面组件
1. 在 `src/components/` 创建新组件
2. 在 `src/App.tsx` 中引入并使用
3. 更新导航链接配置

## 🔍 调试技巧

### 链接调试
```typescript
// 在浏览器控制台检查链接配置
import { EXTERNAL_LINKS, getLinkConfig } from './src/data/links';
console.log(EXTERNAL_LINKS);
console.log(getLinkConfig('modal:academic-drawings'));
```

### 弹窗调试
- 检查图片路径是否正确
- 确认 `portfolio-images.ts` 配置
- 查看浏览器控制台错误信息

### 构建问题
```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm install

# 检查类型错误
npm run type-check
```

## 📞 技术支持

### 联系方式
- **邮箱**: 224040166@link.cuhk.edu.cn
- **个人网站**: https://life.chenggao.top  
- **GitHub**: https://github.com/Cheng-hun-gu-ren

### 开发环境
- **Node.js**: 18+ 
- **包管理器**: npm
- **推荐编辑器**: VSCode + TypeScript 插件
- **调试工具**: React Developer Tools

## 🚀 部署成功记录

### **✅ v1.0.0 部署里程碑** (2025-01-06)
- ✅ **网站上线**: [https://career.chenggao.top](https://career.chenggao.top)
- ✅ **GitHub Pages部署**: 自动化CI/CD流程
- ✅ **自定义域名配置**: DNS解析成功
- ✅ **HTTPS支持**: SSL证书自动配置
- ✅ **响应式体验**: 完美适配各种设备

### **🔧 技术实现亮点**
- **现代化技术栈**: React 18 + TypeScript + Vite
- **自动化部署**: GitHub Actions工作流
- **本地化图片**: 避免外部CDN依赖
- **性能优化**: Vite构建优化，资源压缩
- **交互体验**: AI工具箱横向滑动，微信二维码弹窗

## 📈 未来优化计划

### **🎯 Phase 1: 国内访问优化**
- [ ] **阿里云DNS解析**: 替换当前DNS，优化国内访问速度
- [ ] **阿里云CDN加速**: 静态资源CDN分发，全球加速
- [ ] **性能监控**: 添加访问统计和性能分析

### **🔒 Phase 2: 私有化升级**
- [ ] **GitHub Pro升级**: 获得私有仓库GitHub Pages支持
- [ ] **项目私有化**: 将仓库设为私有，保护源码
- [ ] **私有Pages**: 利用GitHub Pro的私有仓库Pages功能

### **🌟 Phase 3: 功能扩展**
- [ ] **多语言支持**: 中英文切换
- [ ] **暗色主题**: 深色模式支持
- [ ] **SEO优化**: 搜索引擎优化
- [ ] **访问分析**: Google Analytics集成

### **已完成功能**
- ✅ 简历PDF下载功能
- ✅ 竞赛成果展示
- ✅ 移动端优化体验
- ✅ 微信二维码弹窗
- ✅ 社交媒体链接更新
- ✅ AI工具箱横向滑动展示

---

## 📊 项目成果

### **技术成就**
- **🏗️ 架构设计**: 模块化组件设计，优秀的代码组织
- **🎨 UI/UX**: 现代化界面设计，流畅的动画效果
- **⚡ 性能**: 快速加载，优化的资源管理
- **📱 响应式**: 完美适配桌面、平板、手机
- **🔄 自动化**: 完整的CI/CD部署流程

### **业务价值**
- **💼 职业展示**: 完整的个人品牌建设
- **🤖 AI能力**: 深度AI应用经验展示
- **📈 项目成果**: 5个核心项目，6大作品集
- **🎓 教育背景**: 985+港校双重学历展示
- **💪 实习经验**: 4家金融机构18个月经验

---

**最后更新**: 2025-01-06  
**版本**: v1.0.0 ✅ **部署成功**  
**维护状态**: 生产环境运行中

> 🎯 **成功部署！** 专为AI时代的全栈开发者打造，展示从想法到作品的完整"输出力"。现已通过GitHub Actions自动部署到自定义域名，为未来的国内CDN优化和私有化升级做好准备。
