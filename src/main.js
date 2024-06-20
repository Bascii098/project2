import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import { useIntersectionObserver } from '@vueuse/core'

import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.directive('img-lazy',{
  mounted(el,binding){
 useIntersectionObserver(
  el,
  ([{ isIntersecting }], ) => {
   if(isIntersecting){
    el.src=binding.value
   }
  },
)
  }
})
