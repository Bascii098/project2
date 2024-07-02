import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import { ElMessage } from 'element-plus'
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'
// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 7000
})

// axios请求拦截器
http.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()

ElMessage({
  type:'warning',
  message:e.response.data.message
})

//401token失效处理

if(e.response.status===401){
userStore.clearUserInfo()
router.push('/login')
}
  return Promise.reject(e)
})


export default http