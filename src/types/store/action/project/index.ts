/**
 * 项目条件
 */
export interface IProjectCondition {
  /**
   * 项目当前第几页
   */
  pageNo: string | number,
  /**
   * 项目每页多少条
   */
  pageSize: string | number,
  /**
   * 项目的标题进行搜索
   */
  title?: string
}

/**
 * 图片对象
 */
export interface IProjectObj {
  /**
   * id
   */
  id: string | number,
  /**
   * 项目标题
   */
  title: string,
  /**
   * 项目描述
   */
  desc: string,
  /**
   * 项目地址
   */
  projectUrl: string,
  /**
   * 项目gitup 地址
   */
  gitupUrl: string,
  /**
   * 图片地址
   */
  imgUrl: string,

}

/**
 * 项目仓库
 */
export interface IProjectStore {
  /**
   * 当前是否加载中
   */
  totalProjectLoading: boolean,
  /**
   * 热门文章数据
   */
  hotProjectData: Partial<IProjectObj>[],
  /**
   * 所有文章的数据
   */
  totalProjectData: Partial<IProjectObj>[],
  
  /**
   * 所有文章的条件
   */
  totalProjectCondition: IProjectCondition,
  /**
   * 总数
   */
  count: number
}

/**
 * 返回的项目数据
 */
export interface IProjectListData{
  code: string,
  data: {
    count: string,  
    rows: IProjectObj[]
  }
}



