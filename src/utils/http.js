import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import { ElMessage,ElLoading } from 'element-plus'
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-loading.css'
let loadingInstance = null;//蒙版实例
let timer = null;//定时器
// 创建axios实例
const http = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 1000*10
})

// axios请求拦截器
http.interceptors.request.use(config => {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    //如果存在则关闭
    if (loadingInstance !== null) {
      loadingInstance.close();
    }
    loadingInstance = ElLoading.service({
      lock: true,
      text: '努力加载中！',
      background: 'rgba(0, 0, 0, 0.3)'
    });
  }, 800);
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
http.interceptors.response.use(res => {
  //如果请求返回快的话，就不需要loading
  // 清除定时器
  clearTimeout(timer);
  timer = null;
  // 请求返回后，关闭loading
  if (loadingInstance !== null) {
    loadingInstance.close();
  }
  if (res.status === 200) {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject(res.data);
  }
},
 e => {
  
  clearTimeout(timer);
  timer = null;
  // 请求返回后，关闭loading
  if (loadingInstance !== null) {
    loadingInstance.close();
  }
  const userStore = useUserStore()
  ElMessage({
  type:'warning',
  message:e.response.data?.message
})

//401token失效处理

if(e.response.status===401){
userStore.clearUserInfo()
router.push('/login')
}
  return Promise.reject(e)
})


export default http