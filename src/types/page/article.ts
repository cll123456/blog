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
}