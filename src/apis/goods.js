import http from '@/utils/http'
export function getGoodsAPI(){
    return http({
        url:'/home/goods'
    })
  }
  // 导出
