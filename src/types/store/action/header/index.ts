// header store类型
export interface IHeaderStore {
  /**
   * 背景颜色
   */
  bgColor: EbgColor,
  /**
   * 头部颜色
   */
  headerBgColor: EHeaderBgColor,
  /**
   * 网站组件颜色
   */
  bodyCompBgColor: EMainBodyCompBgColor
}

/**
 * 背景颜色的枚举
 */
export enum EbgColor {
  /**
   * 白天的颜色
   */
  Sun = '#f0f2f7',
  /**
   * 晚上的颜色
   */
  Moon = '#28374a'
}
/**
 * header背景
 */
export enum EHeaderBgColor {
  /**
  * 白天的颜色
  */
  Sun = 'rgba(255,255,255,1)',
  /**
   * 晚上的颜色
   */
  Moon = 'rgba(20,20,20,1)'
}
/**
 * 网站主要的组件颜色
 */
export enum EMainBodyCompBgColor{
  /**
  * 白天的颜色
  */
   Sun = 'rgba(255,255,255,.8)',
   /**
    * 晚上的颜色
    */
   Moon = 'rgba(20,20,20,.8)'
}