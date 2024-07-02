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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
      },
        {
          path: '/category/:id',
          name: 'Category',
          component: Category
      },
      {
        path:'category/sub/:id',
        component:SubCategory
      },
      {
        path:'detail/:id',
        component:Deatil
      },
      {
        path:'cartlist',
        component:cartList
      },
      {
        path:'checkout',
        component:CheckOut
      },
      {
        path:'pay',
        component:pay
      },
      {
        path: 'paycallback', // 注意路径，必须是paycallback
        component: PayBack
      },
    ]
    },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
],
scrollBehavior(){
  return{top:0}
}
})

export default router
