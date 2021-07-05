import { createActions, handleActions } from 'redux-actions';
import { IMyTipStore, tipObj } from '../../../types/layout/myTips';

// 初始化的数据
const initState: IMyTipStore = {
  loading: false,
  dataList: []
}

const myTipsActions = createActions({
  /**
   * 设置是否加载中
   * @param loading 
   * @returns 
   */
  SET_TIP_IS_LOADING: (loading: boolean) => loading,
  /**
   * 设置标签云的数据
   * @param data 
   * @returns 
   */
  SET_TIP_DATA: (data: tipObj) => data,
  /**
   * 获取标签云的数据
   */
  GET_TIP_DATA: () => { },
})

/**
 * 对外导出layout action
 */
export const { setTipIsLoading, setTipData, getTipData } = myTipsActions;

// 创建reducer
const myTipsReducer = handleActions<IMyTipStore, any>({
  /**
   * 设置是否加载中
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTipIsLoading.toString()]: (state, { payload }) => ({ ...state, ...{ loading: payload } }),
  /**
   * 设置标签的数据
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTipData.toString()]: (state, { payload }) => ({ ...state, ...{ dataList: payload } })
}, initState);

export default myTipsReducer;