import { IArticleObjParams } from "../store/action/article";

/**
 * 卡片属性
 */
export interface IMyCardProps extends IArticleObjParams {
  /**
   * 其他属性
   */
  [prop: string]: any
}