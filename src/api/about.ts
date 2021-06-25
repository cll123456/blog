import request from "../utils/request";

/**
 * 获取关于我的数据
 * @returns 
 */
export function apiGetAboutMe() {
  return request({
    url: '/myself/list',
    method: 'get',
  })
}