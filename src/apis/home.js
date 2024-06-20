/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
import http from '@/utils/http'
export const findNewAPI = () => {
  return http({
    url:'/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return http({
    url:'home/hot'
   })
}