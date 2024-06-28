import{ getBannerAPI } from '@/apis/bannerList'
import {ref,onMounted} from 'vue'

export function  useBanner(){
  const BannerList = ref([])
  const getBanner=async()=> {
  const res = await getBannerAPI({
  distributionSite:'2'
 })
    BannerList.value = res.result
  }
  onMounted(()=>getBanner())
return{
  BannerList
}}

    