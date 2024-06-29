import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
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
      }
    ]
    },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
})

export default router
