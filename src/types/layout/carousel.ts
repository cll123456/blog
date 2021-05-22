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
 * 轮播组件所需要的参数
 */
export interface ICarouselProps {
  /**
   * 轮播图所需要的数据
   */
  data:  ICarouselData[],
  /**
   * 当前显示第几个，
   */
  curIndex: number,
  /**
   * 上一张
   */
  onPre: (curIndex: number)=>void,
  /**
   * 下一张
   */
  onNext: (curIndex: number)=>void,

}