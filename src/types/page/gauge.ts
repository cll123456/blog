import { IGaugeDataObj } from "../store/action/gauge";

/**
 * 归档列表
 */
export interface IGaugeListProps {
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
}

export interface IGaugeProps extends IGaugeListProps {
  // 获取归档数据
  getGaugeData: () => void
}