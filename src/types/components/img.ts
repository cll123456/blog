import { ImgHTMLAttributes } from "react";

/**
 * 图片占位组件属性
 */
export interface IImagProps<T> extends ImgHTMLAttributes<T> {
  /**
   * 加载中的图片
   */
  loadingImg?: string,
  /**
   * 失败加载的图片
   */
  errorImg?: string,
 /**
  * 图片正常显示的地址
  */
  src: string | undefined,
}