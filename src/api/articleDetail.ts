import { IArticleDetailReadOrLike } from "../types/store/action/articleDetail";
import request from "../utils/request";

/**
 * 通过文字id获取文字
 * @returns 
 */
export function apiGetArticleDetailById(id: string | number) {
  return request({
    url: '/article/findArticleDetailById/' + id,
    method: 'get',
  })
}

/**
 * 添加文字阅读
 */ 
export function apiSetArticleReadOrLike(params: IArticleDetailReadOrLike) {
  return request({
    url: '/readLike/add/',
    method: 'post',
    data: params
  })
}