/**
 * 登录用户基本信息
 */
export interface IUserInfo {
  id: string,
  nickName: string,
  accounter: string,
  email: string,
  avatar: string
}

/**
 * 用户登录信息
 */
export interface IUserRes {
  code: string,
  data: {
    data: IUserInfo
  }
}

export interface IUserUrlRes {
  code: string,
  data: string,
}
/**
 * 用户数据
 */
export interface IUserStore {
  /**
   * 用户数据
   */
  userInfo: Partial<IUserInfo>,
  /**
   * 用户登录的类型，然后使用对应的方法进行授权登录
   */
  loginType: ELoginType,
  /**
   * 授权回调的code
   */
  code: string,
}
/**
 * 登录的类型
 */
export enum ELoginType {
  /**
   * githup登录
   */
  'loginByGithub' = 'apiLoginByGithub',
  /**
   * gitee登录
   */
  'loginByGitee' = 'apiLoginByGitee'
}