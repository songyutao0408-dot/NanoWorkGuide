<script setup lang="ts">
import { withBase } from 'vitepress'

const tasks = [
  {
    title: '写材料',
    desc: '投标方案 · 汇报材料 · 长文档',
    link: '/第二篇 实战案例/第9章 写材料',
  },
  {
    title: '出报表',
    desc: '财务对账 · 经营看板 · 预算表',
    link: '/第二篇 实战案例/第10章 出报表',
  },
  {
    title: '做物料',
    desc: '宣传片 · 品牌物料 · PPT官网',
    link: '/第二篇 实战案例/第11章 做物料',
  },
  {
    title: '查风险',
    desc: '合同评审 · 招标排查 · 合规巡检',
    link: '/第二篇 实战案例/第12章 查风险',
  },
  {
    title: '盯经营',
    desc: '商机线索 · 行业周报 · 日报播报',
    link: '/第二篇 实战案例/第13章 盯经营',
  },
  {
    title: '攒资产',
    desc: '专属专家 · 技能沉淀 · 知识库',
    link: '/第二篇 实战案例/第14章 攒资产',
  },
]
</script>

<template>
  <div class="task-entry">
    <div class="task-entry-inner">
      <p class="eyebrow">实战场景</p>
      <h2>你现在想让纳米Work帮你做什么？</h2>
      <p class="sub">不必从头读起，带着具体的事进来，先跑通一次能验收的结果。</p>
      <div class="task-grid">
        <a
          v-for="t in tasks"
          :key="t.title"
          class="task-card"
          :href="withBase(t.link)"
        >
          <span class="task-title">{{ t.title }}</span>
          <span class="task-desc">{{ t.desc }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-entry {
  padding: 64px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.task-entry-inner {
  max-width: 1152px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--nw-gold);
  margin-bottom: 10px;
}

.task-entry h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.task-entry .sub {
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
  font-size: 15px;
}

.task-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--vp-c-divider);
  border: 1px solid var(--vp-c-divider);
}

@media (max-width: 768px) {
  .task-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .task-grid {
    grid-template-columns: 1fr;
  }
}

.task-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 20px;
  background: var(--nw-card-bg);
  text-decoration: none;
  transition: background-color 0.2s;
}

.task-card:hover {
  background: var(--vp-c-bg-soft);
}

.task-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.task-card:hover .task-title {
  color: var(--vp-c-brand-1);
}

.task-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
