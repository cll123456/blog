import { ELoginType, IUserStore } from "../store/action/user";

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
   * 设置登录类型
   */
  setUserLoginType:(type: ELoginType) => void,
  /**
   * 初始化获取用户数据
   */
  getUserInfo: () => void,
}