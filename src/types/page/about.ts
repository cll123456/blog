import { IAboutStore } from "../store/action/about";

export interface IAboutProp extends IAboutStore {
  /**
   * 获取关于我的数据
   */
   getAboutData: () => void
}