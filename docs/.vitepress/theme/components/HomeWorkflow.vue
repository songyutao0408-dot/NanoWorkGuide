<script setup lang="ts">
const steps = [
  { num: '01', title: '完成一个真实任务', desc: '不必想清楚全部步骤，先跑通一次能验收的结果。' },
  { num: '02', title: '复盘成可复现案例', desc: '记下用了哪个专家、怎么操作、拿到了什么。' },
  { num: '03', title: '沉淀技能与自动化', desc: '把重复的事变成一键调用的技能和定时任务。' },
  { num: '04', title: '组合成专家军团', desc: '多个专属专家协同，7×24 为你持续工作。' },
]
</script>

<template>
  <div class="workflow">
    <div class="workflow-inner">
      <p class="eyebrow">从任务到军团</p>
      <h2>一次成功，不该只发生一次。</h2>
      <p class="sub">这本手册真正关心的不是"AI 会什么"，而是如何把一个结果，沉淀成稳定、可协作、可复用的工作系统。</p>
      <div class="step-row">
        <div class="step-item" v-for="s in steps" :key="s.num">
          <span class="step-num">{{ s.num }}</span>
          <h3 class="step-title">{{ s.title }}</h3>
          <p class="step-desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workflow {
  padding: 64px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.workflow-inner {
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

.workflow h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.workflow .sub {
  color: var(--vp-c-text-2);
  margin: 0 0 40px;
  font-size: 15px;
  max-width: 640px;
}

.step-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

@media (max-width: 900px) {
  .step-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .step-item {
    border-left: none !important;
    border-top: 1px solid var(--vp-c-divider);
    padding: 20px 0 !important;
  }
  .step-item:first-child {
    border-top: none;
  }
}

.step-item {
  padding: 4px 24px;
  border-left: 1px solid var(--vp-c-divider);
}

.step-item:first-child {
  padding-left: 0;
  border-left: none;
}

.step-num {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
  margin-bottom: 12px;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--vp-c-text-1);
}

.step-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.55;
}
</style>
