import request from "../utils/request";

/**
 * 获取关于我的数据
 * @returns 
 */
export function apiGetMyTips() {
  return request({
    url: '/tagCloud/findAll',
    method: 'get',
  })
}