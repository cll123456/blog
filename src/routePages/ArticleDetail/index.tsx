import { Spin } from 'antd'
import React, { Dispatch, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { getArticleDetailData, setArticleDetailDialog, setArticleDetailId } from '../../store/actions/articleDetail'
import { ILinkObj } from '../../types/layout/articleDetail'
import { IArticleDetailProps } from '../../types/page/articleDetail'
import { IStore } from '../../types/store/action'
import ArticleDetailBody from './ArticleDetailBody'
import ArticleDetailComment from './ArticleDetailComment'
import ArticleDetailHeader from './ArticleDetailHeader'
import './index.less'




function ArticleDetail(props: IArticleDetailProps) {
  useLayoutEffect(() => {
    // 当当前的store中的文章id和路由文章id不一样时，请求后台
    if (props.articleDetailStore.currentArticleId !== props.router.location.query.articleId) {
      // 请求数据
      props.getDetailData();
    
    }
  }, []);



  return (
    <div className='articleDetail-container'>
      <Spin spinning={props.articleDetailStore.articleDetailLoading}>
        <ArticleDetailHeader {...props.articleDetailStore.articleDetailData.details}></ArticleDetailHeader>
        <ArticleDetailBody
          content={props.articleDetailStore.articleDetailData.details.content}
        ></ArticleDetailBody>
        <ArticleDetailComment></ArticleDetailComment>
      </Spin>
    </div>
  )
}

const mapStateToProps = (store: IStore) => ({
  articleDetailStore: store.articleDetail,
  router: store.router
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // 获取数据
  getDetailData() {
    const storeData: IStore = store.getState() as unknown as IStore;
    dispatch(setArticleDetailId(storeData.router.location.query.articleId));
    dispatch(getArticleDetailData())
  },
  /**
   * 设置文章的目录
   */
  setArticleDetailDialog(dialogArr: ILinkObj[]) {
    dispatch(setArticleDetailDialog(dialogArr));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)