<script setup lang="ts">
const stats = [
  { label: '23', unit: '章', desc: '共 4 篇' },
  { label: '6', unit: '类场景', desc: '真实案例' },
  { label: '25+', unit: '', desc: '真实界面截图' },
]

const badges = ['真实任务', '可复现', '源自真实用户', '持续沉淀']
</script>

<template>
  <div class="home-stats">
    <div class="home-stats-inner">
      <div class="stat-row">
        <div class="stat-item" v-for="s in stats" :key="s.desc">
          <span class="stat-number">{{ s.label }}<small v-if="s.unit">{{ s.unit }}</small></span>
          <span class="stat-desc">{{ s.desc }}</span>
        </div>
      </div>
      <div class="badge-row">
        <span class="badge-item" v-for="(b, i) in badges" :key="b">
          <span class="badge-dot" v-if="i > 0">·</span>
          {{ b }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-stats {
  padding: 40px 24px 48px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.home-stats-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.stat-row {
  display: flex;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-number {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.stat-number small {
  font-size: 15px;
  font-weight: 600;
  margin-left: 2px;
  color: var(--vp-c-text-2);
}

.stat-desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.badge-row {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.badge-dot {
  margin: 0 10px;
  color: var(--vp-c-text-3);
}
</style>
