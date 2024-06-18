import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/headerList'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('Category', () => {
  const categoryList = ref([])
  const getCategory=async()=> {
   const res = await getCategoryAPI()
      categoryList.value = res.result
    }
  

  return { 
    getCategory,
    categoryList
   }
})
