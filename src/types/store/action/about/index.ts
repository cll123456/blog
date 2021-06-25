/**
 * 关于我的数据类型
 */
export interface IAboutMeObj {
  /**
   * 英文名字
   */
  enName: string,
  /**
  * 中文名字
  */
  znName: string,
  /**
  * 性别
  */
  sex: string,
  /**
  * 个人简介
  */
  selfIntroduce: string,
  /**
  * 出生日期
  */
  birthday: string,
  /**
  * 开始工作
  */
  startWork: string,
  /**
  * 学校名称
  */
  schoolName: string,
  /**
  * 专业
  */
  mayjor: string,
  /**
  * 学历
  */
  education: string,
  /**
  * 所属公司名称
  */
  companyName: string,
  /**
  * 岗位名称
  */
  postName: string,
  /**
  * 所属行业
  */
  industry: string,
  /**
  * 个人的技能
  */
  skill: string,
  /**
  * 个人的技能
  */
  hobby: string
}

/**
 * 关于我的数据仓库
 */
export interface IAboutStore {
  /**
   * 加载状态
   */
  loading: boolean,
  /**
   * 数据对象
   */
  dataObj: Partial<IAboutMeObj>
}

/**
 * 关于我的数据返回结果
 */
export interface IAboutListRes {
  code: string,
  data: IAboutMeObj
}