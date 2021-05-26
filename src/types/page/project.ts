/**
 * 项目轮播组件属性
 */
export interface IProCarouselProps {
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
   timer: number,

   data: ProCarouselObj[]
}
/**
 * 项目轮播的组件对象
 */
export interface ProCarouselObj {
  /**
   * 图片地址
   */
  imgUrl: string,
}
/**
 * 项目卡片属性
 */
export interface IProCardProps {
  /**
   * 图片地址
   */
   imgUrl: string,
   /**
    * 标题
    */
   title: string,
   /**
    * 描述
    */
   desc: string,
}

/**
 * 卡片list
 */
export interface IProCardListProps {
  cardList: IProCardProps[]
}