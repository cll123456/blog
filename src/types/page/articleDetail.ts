import {  IArticleDetailStore } from "../store/action/articleDetail";
import * as CRR from 'connected-react-router';
export interface IArticleDetailProps {
  // 文章store数据
  articleDetailStore: IArticleDetailStore,
  // 路由数据
  router: CRR.RouterState,
  // 获取文章详情
  getDetailData: () => void,
  /**
   * 设置目录
   */
  setArticleDetailDialog:(arr: any[]) => void
}