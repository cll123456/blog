/**
 * 卡片属性
 */
export interface IMyCardProps {
  /**
   * 文章标题
   */
  title: string,
  /**
   * 文章的图片
   */
  imgUrl: string,

  /**
   * 阅读量
   */
  reading: number | string,
  /**
   * 点赞量
   */
  like: number | string,
  /**
   * 评论数量
   */
  msg: number | string,
  /**
   * 日期
   */
  date: string,
  /**
   * 其他属性
   */
  [prop: string]: any
}