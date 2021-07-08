import request from "../utils/request";

/**
 * 通过github 获取code
 * @returns 
 */
export function apiLoginByGithub() {
  return request({
    url: '/login/gitup',
    method: 'get',
  })
}

/**
 * 通过gitee 获取code
 * @returns 
 */
export function apiLoginByGitee() {
  return request({
    url: '/login/gitee',
    method: 'get',
  })
}

/**
 * 通过gitee的回调来获取参数
 * @param code 
 * @returns 
 */
export function apiLoginByGiteeCallback(code: string) {
  return request({
    url: '/gitee/oauth/callback?code=' + code,
    method: 'get',
  })
}

/**
 * 通过github的回调来获取参数
 * @param code 
 * @returns 
 */
export function apiLoginByGithubCallback(code: string) {
  return request({
    url: '/gitup/oauth/callback?code=' + code,
    method: 'get',
  })
}

