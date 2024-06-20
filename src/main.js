import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import{LazyPlugin}from '@/directives/lazyLoad'

import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LazyPlugin)
app.mount('#app')

