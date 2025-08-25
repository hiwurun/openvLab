# OpenVlab

OpenVlab 是一个现代化的金融数据可视化和分析平台，专注于期权交易、波动率分析和量化策略构建。该项目使用 React、TypeScript 和 Tailwind CSS 构建，提供了直观的用户界面和强大的数据分析工具。

## 功能特点

- **行情数据展示**：轻量版和高级版行情数据可视化
- **波动率曲面分析**：直观展示和分析期权波动率曲面
- **策略构建器**：量化交易策略的构建和回测工具
- **教学资源**：视频教程和文档教程，帮助用户快速上手
- **响应式设计**：适配各种设备屏幕尺寸
- **现代化 UI**：基于 Tailwind CSS 的美观界面

## 技术栈

- **前端框架**：React 18
- **类型系统**：TypeScript
- **路由管理**：React Router 7
- **状态管理**：React Query
- **UI 组件**：Radix UI + Tailwind CSS
- **图表库**：Lightweight Charts
- **构建工具**：Vite
- **动画效果**：Framer Motion

## 项目结构

```
src/
├── assets/          # 静态资源文件
├── components/      # 可复用组件
│   ├── Container/   # 容器组件
│   └── ui/          # UI 基础组件
├── config/          # 配置文件
├── constans/        # 常量定义
├── hooks/           # 自定义 React Hooks
├── layout/          # 布局组件
├── lib/             # 工具函数库
├── pages/           # 页面组件
│   ├── LoadPage/    # 首页
│   ├── Market/      # 市场行情页面
│   ├── NotFound/    # 404 页面
│   └── Teaching/    # 教学资源页面
├── router/          # 路由配置
├── server/          # 服务端交互
└── types/           # TypeScript 类型定义
```

## 快速开始

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn

# 使用 pnpm
pnpm install
```

### 开发环境

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev

# 使用 pnpm
pnpm dev
```

### 构建生产版本

```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build

# 使用 pnpm
pnpm build
```

### 预览生产版本

```bash
# 使用 npm
npm run preview

# 使用 yarn
yarn preview

# 使用 pnpm
pnpm preview
```

## 主要页面

### 首页

展示平台概览和主要功能入口。

### 市场行情

提供实时市场数据、价格走势和交易量分析。

### 教学资源

包含视频教程和文档教程，涵盖以下主题：

- 行情轻量版和高级版使用指南
- 波动率曲面分析方法
- 策略构建器使用教程
- 隐含波动率计算方法

### 404 页面

当用户访问不存在的页面时显示友好的错误提示。

## 开发指南

### 添加新页面

1. 在 `src/pages` 目录下创建新的页面组件
2. 在 `src/router/index.ts` 中添加新的路由配置
3. 如果需要，更新导航菜单

### 样式指南

项目使用 Tailwind CSS 进行样式管理，遵循以下约定：

- 使用 Tailwind 的工具类优先
- 组件样式保持一致性
- 遵循响应式设计原则

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献指南

欢迎贡献代码、报告问题或提出新功能建议。请确保代码符合项目的编码规范并通过所有测试。

## 许可证

MIT
