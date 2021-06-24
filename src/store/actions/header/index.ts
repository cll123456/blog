import { createActions, handleActions } from 'redux-actions';
import { EbgColor, EHeaderBgColor, EMainBodyCompBgColor, IHeaderStore } from '../../../types/store/action/header';

// 默认值
const defaultState: IHeaderStore = { bgColor: EbgColor.Sun, headerBgColor: EHeaderBgColor.Sun, bodyCompBgColor: EMainBodyCompBgColor.Sun };

const headerActions = createActions({
  /**
   * canvas背景颜色
   * @param color 
   * @returns 
   */
  CHANGE_BG_COLOR: (color: EbgColor) => color,
  /**
   * 头部背景颜色
   * @param color 
   * @returns 
   */
  CHANGE_HEADER_BG_COLOR: (color: EHeaderBgColor) => color,
  /**
     * 组件背景颜色
     * @param color 
     * @returns 
     */
  CHANGE_MAIN_COMP_BG_COLOR: (color: EMainBodyCompBgColor) => color,
});

/**
 * header actions
 */
export const { changeHeaderBgColor, changeBgColor, changeMainCompBgColor } = headerActions


const headerReducers = handleActions<IHeaderStore, any>({
  /**
   * 改变背景的reducer
   * @param state 
   * @param param1 
   * @returns 
   */
  [changeBgColor.toString()]: (state: IHeaderStore, { payload }: { payload: EbgColor }) => ({ ...state, ...{ bgColor: payload } }),
  /**
   * 修改canvas背景颜色
   * @param state 
   * @param param1 
   * @returns 
   */
  [changeHeaderBgColor.toString()]: (state: IHeaderStore, { payload }: { payload: EHeaderBgColor }) => ({ ...state, ...{ headerBgColor: payload } }),
  /**
     * 组件背景颜色
     * @param state 
     * @param param1 
     * @returns 
     */
  [changeMainCompBgColor.toString()]: (state: IHeaderStore, { payload }: { payload: EMainBodyCompBgColor }) => ({ ...state, ...{ bodyCompBgColor: payload } }),
}, defaultState)

export default headerReducers;