import { IMyCardProps } from "../components/myCard";
import { ICarouselData } from "../layout/carousel";

export interface IArticleState {
  /**
   * 当前第几张
   */
  curIndex: number,
  /**
   * 轮播图片
   */
  carouselArr: ICarouselData[],
  /**
   * 文章列表
   */
  articleArr: IMyCardProps[]
}

/**
 * 文章列表
 */
export interface IArticleListProps {
  articleList: IMyCardProps[]
}