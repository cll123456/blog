import { createActions, handleActions } from "redux-actions";
import { IArticleObjParams, IArticleParams, IArticleStore } from "../../../types/store/action/article";

const initData: IArticleStore = {
  hotArticleData: [],
  hotArticleLoading: false,
  totalArticleLoading: false,
  totalArticleCondition: {
    pageNo: 1,
    pageSize: 12,
    title: '',
    tagCloudId: ''
  },
  totalArticleData: [],
  articleTotal: 0
}

const articleActions = createActions({
  /**
   * 设置热门文章
   * @param data 
   * @returns 
   */
  SET_HOT_ARTICLE_DATA: (data: IArticleObjParams[]) => data,
  /**
   * 设置文章是否加载中
   * @param loading 
   * @returns 
   */
  SET_TOTAL_ARTICLE_LOADING: (loading: boolean) => loading,
  /**
   * 设置热门文件加载中
   * @param loading 
   * @returns 
   */
  SET_HOT_ARTICLE_LOADING: (loading: boolean) => loading,
  /**
   * 设置所以的文章
   * @param data 
   * @returns 
   */
  SET_TOTAL_ARTICLE_DATA: (data: IArticleObjParams[]) => data,
  /**
   * 设置文章的条件
   * @param param 
   * @returns 
   */
  SET_TOTAL_ARTICLE_CONDITION: (param: IArticleParams) => param,
  /**
   * 设置文章总数
   */
  SET_TOTAL_ARTICLE_TOTAL: (count: number) => count,
  /**
   * 获取全部文章，用于saga
   */
  GET_TOTAL_ARTICLE_DATA: () => { },
  /**
   * 获取热门文章， 用于saga
   */
  GET_HOT_ARTICLE_DATA: () => { }
})

/**
 * 对外导出的actions
 */
export const { setHotArticleData, setTotalArticleData, setHotArticleLoading, setTotalArticleLoading, setTotalArticleTotal, setTotalArticleCondition, getTotalArticleData, getHotArticleData } = articleActions;


const articleReducers = handleActions<IArticleStore, any>({
  /**
   * 判断是否位设置热门文章
   */
  [setHotArticleData.toString()]: (state, { payload }) => ({ ...state, ...{ hotArticleData: payload } }),
  /**
  * 判断是否位设置全部文章
  */
  [setTotalArticleData.toString()]: (state, { payload }) => ({ ...state, ...{ totalArticleData: payload } }),
  /**
  * 判断是否位设置热门文章loading
  */
  [setTotalArticleLoading.toString()]: (state, { payload }) => ({ ...state, ...{ totalArticleLoading: payload } }),
  /**
   * 设置热门文章加载中
   * @param state 
   * @param param1 
   * @returns 
   */
  [setHotArticleLoading.toString()]: (state, { payload }) => ({ ...state, ...{ hotArticleLoading: payload } }),
  /**
   * 设置文章总数
   */
  [setTotalArticleTotal.toString()]: (state, { payload }) => ({ ...state, ...{ articleTotal: payload } }),
  /**
  * 判断是否位设置热门文章条件
  */
  [setTotalArticleCondition.toString()]: (state, { payload }) => ({ ...state, totalArticleCondition: { ...state.totalArticleCondition, ...payload, } }),
}, initData);

export default articleReducers;