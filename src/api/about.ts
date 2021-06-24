import request from "../utils/request";

/**
 * 获取关于我的数据
 * @returns 
 */
export function getAboutMe() {
  return request({
    url: '/myself/list',
    method: 'get',
  })
}