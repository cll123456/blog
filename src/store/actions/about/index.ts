import { createActions, handleActions } from 'redux-actions';
import { IAboutMeObj, IAboutStore } from '../../../types/store/action/about';

const defaultState: IAboutStore = {
  loading: false,
  dataObj: {}
}

const aboutActions = createActions({
  /**
   * 设置当前是否loading
   * @param loading 
   * @returns 
   */
  SET_IS_LOADING: (loading: boolean) => loading,
  /**
   * 设置关于我的数据
   * @param data 
   * @returns 
   */
  SET_DATA: (data: IAboutMeObj) => data,
  /**
   * 获取异步数据
   */
  GET_ASYNC_DATA: () => { }
})


/**
 * 对外导出action创建函数
 */
export const { setIsLoading, setData, getAsyncData } = aboutActions;

/**
 * 获取关于我的reducer
 */
const aboutReducers = handleActions<IAboutStore, any>({
  /**
   * 设置loading
   * @param state 
   * @param param1 
   * @returns 
   */
  [setIsLoading.toString()]: (state, { payload }) => ({ ...state, ...{ loading: payload } }),
  /**
   * 设置获取关于我的数据
   * @param state 
   * @param param1 
   * @returns 
   */
  [setData.toString()]: (state, { payload }) => ({ ...state, ...{ dataObj: payload } })
}, defaultState);

export default aboutReducers