<script setup lang="ts">
import { withBase } from 'vitepress'

const paths = [
  {
    num: '01',
    range: '第 1—8 章',
    title: '从 0 到 1：先把纳米Work用起来',
    desc: '注册登录、主界面、专家团、知识库、算力豆与自动化任务。',
    link: '/第一篇 快速上手/',
  },
  {
    num: '02',
    range: '第 9—14 章',
    title: '进入真实案例：让任务开始流动',
    desc: '写材料、出报表、做物料、查风险、盯经营、攒资产。',
    link: '/第二篇 实战案例/',
  },
  {
    num: '03',
    range: '第 15—21 章',
    title: '把案例变成可复用的工作系统',
    desc: '报告自动生成、目标模式、定时任务、技能沉淀、安全合规与团队协作。',
    link: '/第三篇 核心能力深挖/',
  },
  {
    num: '04',
    range: '第 22—23 章',
    title: '落到岗位与行业，组建 AI 团队',
    desc: '从通用能力出发，设计适合不同岗位和行业的工作流。',
    link: '/第四篇 岗位与行业落地/',
  },
]
</script>

<template>
  <div class="reading-path">
    <div class="reading-path-inner">
      <p class="eyebrow">阅读路径</p>
      <h2>四段路径，按你的目标进入</h2>
      <p class="sub">从个人上手到组织落地，循序渐进，构建你的纳米Work工作系统。</p>
      <div class="path-list">
        <a
          v-for="p in paths"
          :key="p.title"
          class="path-row"
          :href="withBase(p.link)"
        >
          <span class="path-num">{{ p.num }}</span>
          <div class="path-body">
            <div class="path-head">
              <h3 class="path-title">{{ p.title }}</h3>
              <span class="path-range">{{ p.range }}</span>
            </div>
            <p class="path-desc">{{ p.desc }}</p>
          </div>
          <span class="path-arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reading-path {
  padding: 64px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.reading-path-inner {
  max-width: 900px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--nw-gold);
  margin-bottom: 10px;
}

.reading-path h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.reading-path .sub {
  color: var(--vp-c-text-2);
  margin: 0 0 8px;
  font-size: 15px;
}

.path-list {
  margin-top: 32px;
}

.path-row {
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition: padding-left 0.2s ease;
}

.path-list a:last-child {
  border-bottom: 1px solid var(--vp-c-divider);
}

.path-row:hover {
  padding-left: 8px;
}

.path-num {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  min-width: 24px;
  font-variant-numeric: tabular-nums;
}

.path-body {
  flex: 1;
}

.path-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.path-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.path-row:hover .path-title {
  color: var(--vp-c-brand-1);
}

.path-range {
  font-size: 12px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.path-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 6px 0 0;
  line-height: 1.5;
}

.path-arrow {
  color: var(--vp-c-text-3);
  font-size: 16px;
  align-self: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.path-row:hover .path-arrow {
  opacity: 1;
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .path-row {
    gap: 14px;
  }
  .path-arrow {
    display: none;
  }
}
</style>
