/**
 * 标签云云接口参数
 */
import * as H from 'history';
import * as CRR from 'connected-react-router'
export interface IMyTipsProps {
 
  myTips: IMyTipStore
  /**
   * 点击标签，获取对应的文章
   */
  onClickTips: (id: string, history: H.History) => void,
  // 初始化数据
  initTipData: () => void,
  // 路由
  router: CRR.RouterState
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
 * 标签查询结果
 */
export interface ITipsRes {
  code: string,
  data: tipObj[]
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