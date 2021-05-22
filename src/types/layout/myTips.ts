/**
 * 标签云云接口参数
 */
export interface IMyTipsProps {
 dataList?: tipObj[]
}
/**
 * 单个标签对象
 */
export interface tipObj {
 /**
   * 标签图片
   */
  imgUrl: string,
  /**
   * 标签标题
   */
  title: string,
  /**
   * 标签的数量
   */
  num: number | string
}