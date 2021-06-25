/**
 * 标签云云接口参数
 */
 import * as H from 'history';
export interface IMyTipsProps {
  // 标签云数据对象
 dataList?: tipObj[],
 // 是否加载中
 loading: boolean, 
 /**
  * 点击标签，获取对应的文章
  */
 onClickTips: (id:string, history: H.History) => void
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
  num: number | string,
  // 标签的id， 通过标签id查询对应的文章
  id: string,
}

/**
 * 布局数据
 */
export interface IMyTipStore {
  // 标签数据
  dataList: tipObj[],
  // 是否加载中
  loading: boolean
}