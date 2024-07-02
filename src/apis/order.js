/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/

import http from '@/utils/http'

export const getUserOrder = (params) => {
  return http({
    url:'/member/order',
    method:'GET',
    params
  })
}