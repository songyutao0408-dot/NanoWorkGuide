<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="nw-hero">
    <div class="nw-hero-inner">
      <div class="nw-hero-content">
        <p class="nw-hero-eyebrow">纳米WORK 实战手册</p>
        <h1 class="nw-hero-title">每人一支<br />AI 专家军团</h1>
        <p class="nw-hero-tagline">从 0 到 1 先把纳米Work用起来，再从 1 到 100 把每次成功沉淀为可复用的工作系统。</p>
        <div class="nw-hero-actions">
          <a class="nw-btn nw-btn-primary" :href="withBase('/第一篇 快速上手/')">开始阅读</a>
          <a class="nw-btn nw-btn-ghost" :href="withBase('/reading-guide')">查看阅读路线</a>
        </div>
      </div>

      <div class="nw-hero-graphic-wrap">
        <!-- 军团点位图：抽象表达"一支专家军团协同工作"，
             这是全站唯一的图形装饰，其余区块刻意保持安静。 -->
        <svg class="nw-hero-graphic" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- 连接线：中心节点到各外围节点，不规则分布制造真实部署感 -->
          <g stroke="#5b82c4" stroke-width="1.2" opacity="0.42">
            <line x1="300" y1="330" x2="120" y2="180" />
            <line x1="300" y1="330" x2="410" y2="90" />
            <line x1="300" y1="330" x2="560" y2="220" />
            <line x1="300" y1="330" x2="520" y2="440" />
            <line x1="300" y1="330" x2="340" y2="560" />
            <line x1="300" y1="330" x2="140" y2="490" />
            <line x1="300" y1="330" x2="70" y2="330" />
          </g>
          <!-- 稀疏的次级连接，不完整闭合，暗示"部分协同"而非机械对称 -->
          <g stroke="#8fa8cc" stroke-width="0.6" opacity="0.22">
            <line x1="120" y1="180" x2="410" y2="90" />
            <line x1="410" y1="90" x2="560" y2="220" />
            <line x1="560" y1="220" x2="520" y2="440" />
            <line x1="140" y1="490" x2="70" y2="330" />
            <line x1="70" y1="330" x2="120" y2="180" />
          </g>
          <!-- 中心节点：金圈是全站唯一的强调点缀 -->
          <circle cx="300" cy="330" r="26" stroke="#b8934f" stroke-width="1.8" opacity="0.85" fill="none" />
          <circle cx="300" cy="330" r="40" stroke="#b8934f" stroke-width="0.8" opacity="0.4" fill="none" />
          <circle cx="300" cy="330" r="6" fill="#0b1b3a" />
          <!-- 外围专家节点，大小略有差异，暗示分工不同 -->
          <circle cx="120" cy="180" r="4.5" fill="#3a5a94" />
          <circle cx="410" cy="90" r="3.5" fill="#5b82c4" />
          <circle cx="560" cy="220" r="5" fill="#3a5a94" />
          <circle cx="520" cy="440" r="4" fill="#5b82c4" />
          <circle cx="340" cy="560" r="3.5" fill="#5b82c4" />
          <circle cx="140" cy="490" r="4.5" fill="#3a5a94" />
          <circle cx="70" cy="330" r="4" fill="#5b82c4" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nw-hero {
  position: relative;
  overflow: hidden;
  padding: 80px 24px;
  display: flex;
  min-height: 480px;
}

.nw-hero-inner {
  max-width: 1152px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
}

.nw-hero-content {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 100%;
  max-width: 560px;
}

.nw-hero-graphic-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.nw-hero-graphic {
  width: 100%;
  max-width: 460px;
  height: auto;
  opacity: 0.85;
}

.dark .nw-hero-graphic {
  opacity: 0.7;
}

.nw-hero-eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--nw-gold);
  margin: 0 0 20px;
  text-transform: uppercase;
}

.nw-hero-title {
  font-size: 56px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 24px;
}

.nw-hero-tagline {
  font-size: 17px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
  max-width: 480px;
  margin: 0 0 36px;
}

.nw-hero-actions {
  display: flex;
  gap: 12px;
}

.nw-btn {
  display: inline-flex;
  align-items: center;
  padding: 11px 26px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s, background-color 0.2s;
}

.nw-btn-primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.nw-btn-primary:hover {
  opacity: 0.88;
}

.nw-btn-ghost {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.nw-btn-ghost:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

@media (max-width: 960px) {
  .nw-hero-graphic {
    max-width: 340px;
  }
}

@media (max-width: 768px) {
  .nw-hero {
    padding: 56px 24px 48px;
    min-height: auto;
  }

  .nw-hero-inner {
    flex-direction: column;
    gap: 32px;
  }

  .nw-hero-content {
    max-width: none;
  }

  .nw-hero-title {
    font-size: 38px;
  }

  .nw-hero-graphic-wrap {
    order: -1;
  }

  .nw-hero-graphic {
    max-width: 240px;
    opacity: 0.5;
  }
}
</style>
