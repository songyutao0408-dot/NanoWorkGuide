import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '纳米Work实战手册',
  description: '纳米Work中文实战手册，从快速上手到真实案例、核心能力、岗位与行业落地，一套让企业AI专家团真正用起来的指南。',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0f2247' }],
  ],

  cleanUrls: true,
  lastUpdated: true,

  // ---------------------------------------------------------------
  // 部署到 GitHub Pages 时，如果仓库名不是 "用户名.github.io"，
  // 需要把 base 设置为 "/仓库名/"。
  // 例如仓库是 songyutao0408-dot/NanoWorkGuide，则 base 为 '/NanoWorkGuide/'
  // ---------------------------------------------------------------
  base: '/NanoWorkGuide/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/第一篇 快速上手/' },
      { text: '实战案例', link: '/第二篇 实战案例/' },
      { text: '帮你解决', link: '/help/' },
      { text: '阅读指南', link: '/reading-guide' },
    ],

    // ---------------------------------------------------------------
    // 侧边栏：全书统一结构。无论当前在哪一页，左侧都展示完整目录，
    // 当前所在篇章自动展开高亮，其余篇章折叠——对齐 WorkBuddy 的阅读体验。
    // ---------------------------------------------------------------
    sidebar: [
      {
        text: '蓝皮书总览',
        link: '/',
      },
      {
        text: '第一篇 · 快速上手',
        collapsed: false,
        items: [
          { text: '本篇导读', link: '/第一篇 快速上手/index' },
          { text: '第1章 什么是纳米Work', link: '/第一篇 快速上手/第1章 什么是纳米Work' },
          { text: '第2章 注册登录与账号切换', link: '/第一篇 快速上手/第2章 注册登录与账号切换' },
          { text: '第3章 认识主界面与对话模式', link: '/第一篇 快速上手/第3章 认识主界面与对话模式' },
          { text: '第4章 你的专家团', link: '/第一篇 快速上手/第4章 你的专家团' },
          { text: '第5章 项目与知识库', link: '/第一篇 快速上手/第5章 项目与知识库' },
          { text: '第6章 云盘与工作空间', link: '/第一篇 快速上手/第6章 云盘与工作空间' },
          { text: '第7章 算力豆：计费与消耗', link: '/第一篇 快速上手/第7章 算力豆：计费与消耗' },
          { text: '第8章 5分钟跑通第一个任务', link: '/第一篇 快速上手/第8章 5分钟跑通第一个任务' },
        ],
      },
      {
        text: '第二篇 · 实战案例',
        collapsed: false,
        items: [
          { text: '本篇导读', link: '/第二篇 实战案例/index' },
          { text: '第9章 写材料', link: '/第二篇 实战案例/第9章 写材料' },
          { text: '第10章 出报表', link: '/第二篇 实战案例/第10章 出报表' },
          { text: '第11章 做物料', link: '/第二篇 实战案例/第11章 做物料' },
          { text: '第12章 查风险', link: '/第二篇 实战案例/第12章 查风险' },
          { text: '第13章 盯经营', link: '/第二篇 实战案例/第13章 盯经营' },
          { text: '第14章 攒资产', link: '/第二篇 实战案例/第14章 攒资产' },
        ],
      },
      {
        text: '第三篇 · 核心能力深挖',
        collapsed: false,
        items: [
          { text: '本篇导读', link: '/第三篇 核心能力深挖/index' },
          { text: '第15章 报告自动生成', link: '/第三篇 核心能力深挖/第15章 报告自动生成' },
          { text: '第16章 盯住目标做到底', link: '/第三篇 核心能力深挖/第16章 盯住目标做到底' },
          { text: '第17章 定时任务与7x24自动运转', link: '/第三篇 核心能力深挖/第17章 定时任务与7x24自动运转' },
          { text: '第18章 把方法蒸馏成技能', link: '/第三篇 核心能力深挖/第18章 把方法蒸馏成技能' },
          { text: '第19章 连接器与外部系统接入', link: '/第三篇 核心能力深挖/第19章 连接器与外部系统接入' },
          { text: '第20章 安全与数据合规', link: '/第三篇 核心能力深挖/第20章 安全与数据合规' },
          { text: '第21章 团队协作与能力共享', link: '/第三篇 核心能力深挖/第21章 团队协作与能力共享' },
        ],
      },
      {
        text: '第四篇 · 岗位与行业落地',
        collapsed: false,
        items: [
          { text: '本篇导读', link: '/第四篇 岗位与行业落地/index' },
          { text: '第22章 岗位路线图', link: '/第四篇 岗位与行业落地/第22章 岗位路线图' },
          { text: '第23章 行业路线图', link: '/第四篇 岗位与行业落地/第23章 行业路线图' },
        ],
      },
      {
        text: '附录',
        collapsed: false,
        items: [
          { text: '附录导读', link: '/附录/index' },
          { text: '附录A 常用指令模板', link: '/附录/附录A 常用指令模板' },
          { text: '附录B 场景速查表', link: '/附录/附录B 场景速查表' },
          { text: '附录C 渠道合作伙伴专区', link: '/附录/附录C 渠道合作伙伴专区' },
        ],
      },
    ],

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lastUpdatedText: '最后更新',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/songyutao0408-dot/NanoWorkGuide' },
    ],

    footer: {
      message: '以真实任务为主线的纳米Work实战手册',
      copyright: 'Copyright © 2026 NanoWork Guide Contributors',
    },

    editLink: {
      pattern: 'https://github.com/songyutao0408-dot/NanoWorkGuide/edit/main/docs/:path',
      text: '在 GitHub 上改进此页',
    },
  },
})
