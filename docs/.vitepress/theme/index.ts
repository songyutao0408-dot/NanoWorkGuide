import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomeHero from './components/HomeHero.vue'
import HomeTaskEntry from './components/HomeTaskEntry.vue'
import HomeStats from './components/HomeStats.vue'
import HomeReadingPath from './components/HomeReadingPath.vue'
import HomeWorkflow from './components/HomeWorkflow.vue'
import HomeCommunity from './components/HomeCommunity.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
    app.component('HomeTaskEntry', HomeTaskEntry)
    app.component('HomeStats', HomeStats)
    app.component('HomeReadingPath', HomeReadingPath)
    app.component('HomeWorkflow', HomeWorkflow)
    app.component('HomeCommunity', HomeCommunity)
  },
} satisfies Theme
