import { createActions, handleActions } from 'redux-actions';
import { IGaugeReqParam, IGaugeStore } from '../../../types/store/action/gauge';

// 初始化数据
const initData: IGaugeStore = {
  gaugeLoading: false,
  gaugeData: [],
  gaugeCount: 0,
  gaugeReqParam: {
    pageNo: 1,
    pageSize: 10,
  }
}


const gaugeActions = createActions({
  /**
   * 设置当前正在加载中
   * @param loading 
   * @returns 
   */
  SET_GAUGE_LOADING: (loading: boolean) => loading,
  /**
   * 设置归档的数据
   * @param data 
   * @returns 
   */
  SET_GAUGE_DATA: (data: IGaugeStore) => data,
  /**
   * 设置归档文章的总数
   * @param count 
   * @returns 
   */
  SET_GAUGE_ARTICLE_TOTAL: (count: number) => count,
  /**
   * 设置归档文章的总数
   * @param count 
   * @returns 
   */
  SET_GAUGE_REQ_PARAM: (param: IGaugeReqParam) => param,

  /**
   * 获取归档的数据，用于saga
   */
  GET_GAUGE_DATA: () => { }
})

export const { setGaugeLoading, setGaugeData, setGaugeArticleTotal, getGaugeData, setGaugeReqParam } = gaugeActions;

const gaugeReducers = handleActions<IGaugeStore, any>({
  /**
   * 设置loading
   * @param state 
   * @param param1 
   * @returns 
   */
  [setGaugeLoading.toString()]: (state, { payload }) => ({ ...state, ...{ gaugeLoading: payload } }),
  /**
   * 设置归档数据
   * @param state 
   * @param param1 
   * @returns 
   */
  [setGaugeData.toString()]: (state, { payload }) => ({ ...state, ...{ gaugeData: [...payload, ...state.gaugeData] } }),
  /**
   * 设置归档总数
   * @param state 
   * @param param1 
   * @returns 
   */
  [setGaugeArticleTotal.toString()]: (state, { payload }) => ({ ...state, ...{ gaugeCount: payload } }),
  /**
   * 设置归档请求参数
   * @param state 
   * @param param1 
   * @returns 
   */
  [setGaugeReqParam.toString()]: (state, { payload }) => ({ ...state, gaugeReqParam: { ...payload, ...state.gaugeReqParam } }),
}, initData)

export default gaugeReducers;