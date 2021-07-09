import { IArticleCommentObj } from "../store/action/articleDetail";
import { ELoginType, IUserStore } from "../store/action/user";
import * as CRR from 'connected-react-router'
export interface IMyCommentProps {
  /**
   * 评论的pid
   */
  pid: string | number,
  /**
   * 用户信息
   */
  user: IUserStore,
  /**
   * 当前文章id
   */
  articleId: string | number,
  /**
   * 路由
   */
  router: CRR.RouterState,
  /**
   * 设置登录类型
   */
  setUserLoginType:(type: ELoginType) => void,
  /**
   * 初始化获取用户数据
   */
  getUserInfo: () => void,
  /**
   * 设置评论参数
   */
  setCommentParam:(commentObj: IArticleCommentObj)=> void
}