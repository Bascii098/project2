import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import{LazyPlugin}from '@/directives/lazyLoad'

import router from './router'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  // 路由发生变化修改页面title 
  if (to.meta.title) {
    document.title = to.meta.title;
    next();
  }
})
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(componentPlugin)
app.use(pinia)
app.use(router)
app.use(LazyPlugin)
app.mount('#app')

