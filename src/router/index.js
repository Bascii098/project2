import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Deatil from '@/views/Detail/index.vue'
import cartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import pay from '@/views/Pay/index.vue'
import PayBack from'@/views/PayBack/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta:{
        title:'线上商店-首页 '
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
      },
        {
          path: '/category/:id',
          name: 'Category',
          component: Category,
          meta:{
            title:'线上商店-分类页 '
          },
      },
      {
        path:'category/sub/:id',
        component:SubCategory,
        meta:{
          title:'线上商店-分类页 '
        },
      },
      {
        path:'detail/:id',
        component:Deatil,
        meta:{
          title:'线上商店-详情页 '
        },
      },
      {
        path:'cartlist',
        component:cartList,
        meta:{
          title:'线上商店-购物车 '
        },
      },
      {
        path:'checkout',
        component:CheckOut,
        meta:{
          title:'线上商店-结算页 '
        },
      },
      {
        path:'pay',
        component:pay,
        meta:{
          title:'线上商店-支付页 '
        },
      },
      {
        path: 'paycallback', // 注意路径，必须是paycallback
        component: PayBack
      },
      {
        path: '/member',
        component: Member,
        meta:{
          title:'个人中心 '
        },
        children:[
          {
          path:'',
          component:UserInfo
        },
      {
        path:'order',
        component:UserOrder
      }
    ]
    },
    ]
    },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'线上商店-登录 '
    },
  }
],
scrollBehavior(){
  return{top:0}
}
})

export default router
