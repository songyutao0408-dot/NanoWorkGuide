# 纳米Work实战手册

纳米Work中文实战手册，从快速上手到真实案例、核心能力、岗位与行业落地。

基于 [VitePress](https://vitepress.dev) 构建，通过 GitHub Pages 自动部署。

## 本地开发

```bash
npm install
npm run docs:dev
```

打开 `http://localhost:5173` 即可预览。

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。

首次启用需要在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

## 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts       # 站点配置（导航、侧边栏等）
│   └── theme/            # 自定义主题（首页组件、样式）
├── index.md              # 首页
├── reading-guide.md       # 阅读指南
├── help/                  # 帮你解决
├── 第一篇 快速上手/
├── 第二篇 实战案例/
├── 第三篇 核心能力深挖/
├── 第四篇 岗位与行业落地/
└── 附录/
```

## 内容贡献

每章内容以 Markdown 文件形式维护，直接编辑对应文件、提交 Pull Request 即可。
