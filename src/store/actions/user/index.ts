import { createActions, handleActions } from "redux-actions";
import { ELoginType, IUserInfo, IUserStore } from "../../../types/store/action/user";

const initData: IUserStore = {
  userInfo: {},
  loginType: ELoginType.loginByGitee,
  code: '',
}

const userActions = createActions({
  /**
   * 设置登录类型
   * @param type 
   * @returns 
   */
  SET_LOGIN_TYPE: (type: ELoginType) => type,
  /**
   * 设置用户信息到saga
   * @param data 
   * @returns 
   */
  SET_USER_INFO: (data: IUserInfo) => data,
  /**
   * 获取初始化的用户信息
   */
  GET_USER_INIT_INFO: () => {},
  /**
   * 设置回调的code
   * @param code 
   * @returns 
   */
  SET_LOGIN_CODE: (code: string) => code,

})

export const { getUserInitInfo, setUserInfo, setLoginType, setLoginCode } = userActions;


const userReducers = handleActions<IUserStore, any>({
  /**
   * 设置用户信息
   * @param state 
   * @param param1 
   * @returns 
   */
  [setUserInfo.toString()]: (state, { payload }) => ({ ...state, userInfo: { ...state.userInfo, ...payload } }),
  /**
   * 设置登录类型
   */
  [setLoginType.toString()]: (state, { payload }) => ({ ...state, loginType: payload }),
  /**
   * 设置回调的code
   * @param state 
   * @param param1 
   * @returns 
   */
  [setLoginCode.toString()]: (state, { payload }) => ({ ...state, code: payload })
}, initData);

export default userReducers;