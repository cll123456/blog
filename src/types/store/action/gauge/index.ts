/**
 * 归档数据仓库数据类型
 */
export interface IGaugeStore {
  /**
   * 归档是否加载中
   */
  gaugeLoading: boolean,
  /**
   * 归档文章数据
   */
  gaugeData: IGaugeDataObj[],
  /**
   * 归档的文章总数
   */
  gaugeCount: number | string,
  /**
   * 归档的请求参数
   */
  gaugeReqParam: IGaugeReqParam
}

/**
 * 归档文章对象数据类型
 */
export interface IGaugeDataObj {
  /**
   * 文章id
   */
  id: string | number,
  /**
   * 文章创建时间
   */
  createdAt: string,
  /**
   * 文章标题
   */
  title: string,
}

/**
 * 归档请求数据接口
 */
export interface IGaugeReqParam {
  /**
   * 当前第几页
   */
  pageNo: string | number,
  /**
   * 每页多少条
   */
  pageSize: string | number,
}

/**
 * 归档请求结果数据类型
 */
export interface IGaugeRes{
  code: string | number,
  data: {
    count: string | number,
    rows: IGaugeDataObj[]
  }
}