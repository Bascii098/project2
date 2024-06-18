<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFix from './components/LayoutFix.vue'
import { onMounted } from 'vue'
import {useCategoryStore} from '@/stores/category'

const categoryStore = useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<template>
  <LayoutFix />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>