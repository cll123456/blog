import { IProjectCondition } from "../types/store/action/project";
import request from "../utils/request";

/**
 * 获取热门项目关于我的数据
 * @returns 
 */
export function apiGetHotProject() {
  return request({
    url: '/project/getHotProject',
    method: 'get',
  })
}

/**
 * 通过条件查询项目
 * @param params 
 * @returns 
 */
export function apiGetProjectByParams(params: IProjectCondition) {
  return request({
    url: '/project/list',
    method: 'get',
    params
  })
}