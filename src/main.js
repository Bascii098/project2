import './assets/main.css'
import{getCategoryAPI}from "@/apis/test"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/element/common.scss'
import App from './App.vue'
import router from './router'
getCategoryAPI().then(res=>{
  console.log(res)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
