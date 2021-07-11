
/**
 * 文章对象数据
 */
export interface IArticleObjParams {
  // id
  id?: string,
  // 文字标签
  title?: string,
  // 文字图片地址
  imgUrl?: string,
  // 阅读量
  readNum?: string,
  // 创建时间
  createdAt?: string,
  // 点赞量
  likeNum?: string,
  // 标签
  tagNames?: string,
  // 评论数量
  comentNum?: string,
}


export interface IArticleParams {
  /**
   * 分页当前第几页
   */
  pageNo: string | number,
  /**
   * 
   * 分页 每页多少条
   */
  pageSize: string | number,
  /**
   * 文章的标题查询
   */
  title?: string,
  /**
   * 标签的id进行查询
   */
  tagCloudId?: string,
  
}

/**
 * 文章store数据
 */
export interface IArticleStore {
  /**
   * 热门文章数据
   */
  hotArticleData: IArticleObjParams[],
  /**
   * 全部文章
   */
  totalArticleData: IArticleObjParams[],
  /**
   * 全部文章查询loading
   */
  totalArticleLoading: boolean,
  /**
   * 热门文章是否加载中
   */
  hotArticleLoading: boolean,
  /**
   * 全部文章查询条件
   */
  totalArticleCondition: IArticleParams,
  /**
   * 文章总数
   */ 
  articleTotal: number,
}

/**
 * 查询文章列表结果
 */ 
export interface IArticleListRes {
  code: string,
  data: {
    rows: IArticleObjParams[],
    count: string,
  }
}