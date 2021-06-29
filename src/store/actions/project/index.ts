import { createActions, handleActions } from 'redux-actions';
import { IProjectCondition, IProjectObj, IProjectStore } from '../../../types/store/action/project';

// 默认数据
const defaultState: IProjectStore = {
  totalProjectLoading: false,
  hotProjectData: [],
  totalProjectData: [],
  totalProjectCondition: {
    pageNo: 1,
    pageSize: 6,
    title: ''
  },
  count: 0
}

const projectActions = createActions({
  /**
   * 设置条件
   */
  SET_TOTAL_PROJECT_CONDITION: (condition: IProjectCondition) => condition,
  /**
   * 设置当前是否加载中
   * @param loading 
   * @returns 
   */
  SET_TOTAL_PROJECT_LOADING: (loading: boolean) => loading,
  /**
   * 设置全部文章数据
   * @param data 
   * @returns 
   */
  SET_TOTAL_PROJECT_DATA: (data: IProjectObj[]) => data,
  /**
   * 设置热门项目的数据
   * @param data 
   * @returns 
   */
  SET_HOT_PROJECT_DATA: (data: IProjectObj[]) => data,
  /**
   * 设置总共条数
   * @param count 
   * @returns 
   */
  SET_TOTAL_PROJECT_COUNT: (count: number) => count,
  /**
   * 获取热门项目
   */
  GET_HOT_PROJECT_DATA: () => { },
  /**
   * 获取全部的项目数据
   */
  GET_TOTAL_PROJECT_DATA: () => { }
})

/**
 * 默认对外导出
 */
export const { setTotalProjectCondition, setTotalProjectLoading, setTotalProjectData, setHotProjectData, setTotalProjectCount, getHotProjectData, getTotalProjectData } = projectActions;

const projectReducers = handleActions<IProjectStore, any>({
  /**
   * 设置全部文章的条件
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTotalProjectCondition.toString()]: (state, { payload }) => ({ ...state, totalProjectCondition: { ...state.totalProjectCondition, ...payload } }),
  /**
   * 设置全部文章的loading
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTotalProjectLoading.toString()]: (state, { payload }) => ({ ...state, ...{ totalProjectLoading: payload } }),
  /**
   * 设置热门文章的数据
   * @param state 
   * @param param1 
   * @returns 
   */
  [setHotProjectData.toString()]: (state, { payload }) => ({ ...state, ...{ hotProjectData: payload } }),
  /**
   * 设置全部文章的数据
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTotalProjectData.toString()]: (state, { payload }) => ({ ...state, ...{ totalProjectData: payload } }),

  /**
   * 设置全部项目的总数
   * @param state 
   * @param param1 
   * @returns 
   */
  [setTotalProjectCount.toString()]: (state, { payload }) => ({ ...state, ...{ count: payload } }),
}, defaultState);

export default projectReducers