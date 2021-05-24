import { IMyCardProps } from "../components/myCard";


export interface IArticleState {

  /**
   * 轮播对象
   */
  carouselObj: {
    /**
      * 当前第几张
      */
    curIndex: number,
    /**
    * 轮播图片
    */
    carouselArr: ICarouselData[],
  }
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

/**
 * 轮播图所需要的数据类型
 */
export interface ICarouselData {
  /**
   * 图片地址
   */
  imgUrl: string,
  /**
   * 标签
   */
  label?: string,
  /**
   * 标题
   */
  title?: string,
}

/**
 * 文章轮播组件所需要的参数
 */
export interface IArticleCarouselProps {
  /**
   * 轮播图所需要的数据
   */
  data: ICarouselData[],
  /**
   * 当前显示第几个，
   */
  curIndex: number,
  /**
   * 上一张
   */
  onPre: (curIndex: number) => void,
  /**
   * 下一张
   */
  onNext: (curIndex: number) => void,
  /**
   * 定时器的时间
   */
  timer: number
}