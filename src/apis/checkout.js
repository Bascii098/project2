import http from '@/utils/http'
export function getCheckInfoAPI(){
    return http({
        url:'/member/order/pre'
    })
  }
  // 导出
  
// 创建订单
export const createOrderAPI = (data) => {
    return http({
      url: '/member/order',
      method: 'POST',
      data
    })
  }