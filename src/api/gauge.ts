import { IGaugeReqParam } from "../types/store/action/gauge";
import request from "../utils/request";

/**
 * 获取归档的数据
 * @returns 
 */
export function apiGetGaugeData(params: IGaugeReqParam) {
  return request({
    url: 'article/list',
    method: 'get',
    params
  })
}