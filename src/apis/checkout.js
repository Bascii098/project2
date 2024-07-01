import http from '@/utils/http'
export function getCheckInfoAPI(){
    return http({
        url:'/member/order/pre'
    })
  }
  // 导出
