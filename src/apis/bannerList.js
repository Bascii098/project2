import http from '@/utils/http'
export function getBannerAPI(params={}){
    const{distributionSite='1'}=params
    return http({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
  }
  // 导出
