<script setup lang="ts">
</script>

<template>
  <div class="community">
    <div class="community-inner">
      <p class="eyebrow">开源共建</p>
      <h2>这本手册，也可以由你继续写下去。</h2>
      <p class="sub">如果你有值得收录的真实使用案例，欢迎通过 GitHub 提交，一起把这本手册做扎实。</p>
      <div class="community-actions">
        <a class="btn btn-brand" href="https://github.com/songyutao0408-dot/NanoWorkGuide" target="_blank" rel="noreferrer">前往 GitHub</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community {
  padding: 64px 24px 80px;
  text-align: center;
}

.community-inner {
  max-width: 640px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--nw-gold);
  margin-bottom: 10px;
}

.community h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.community .sub {
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
  font-size: 15px;
}

.community-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-brand {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.btn-brand:hover {
  opacity: 0.85;
}
</style>
