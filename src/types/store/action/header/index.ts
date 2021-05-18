// header store类型
export interface IHeaderStore {
  /**
   * 背景颜色
   */
  bgColor: EbgColor,
/**
 * 头部颜色
 */
  headerBgColor: EHeaderBgColor
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
    Sun = '#ffffff',
    /**
     * 晚上的颜色
     */
    Moon = '#141414'
}