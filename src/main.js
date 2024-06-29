import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import{LazyPlugin}from '@/directives/lazyLoad'

import router from './router'
import { componentPlugin } from '@/components'


const app = createApp(App)
app.use(componentPlugin)
app.use(createPinia())
app.use(router)
app.use(LazyPlugin)
app.mount('#app')

