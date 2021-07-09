import { createActions, handleActions } from "redux-actions";
import { ILinkObj } from "../../../types/layout/articleDetail";
import { IArticleCommentObj, IArticleDetailStore, IArticleResData } from "../../../types/store/action/articleDetail";

const initData: IArticleDetailStore = {
  currentArticleId: '',
  articleDetailLoading: false,
  articleDetailData: {
    details: {
      title: '',
      createdAt: '',
      content: '',
      tags: '',
      readNum: 0,
      likeNum: 0
    }
  },
  articleDetailComments: [],
  readLikeParams: {
    articleId: '',
    readNum: false,
    likeNum: false
  },
  commentParams: {
    pid: '',
    content: '',
    userId: '',
    articleId: ''
  },
  articleDetailDialog: []
}

const createArticleActions = createActions({
  /**
   * 设置文章详情数据
   */
  SET_ARTICLE_DETAIL_DATA: (data: IArticleResData) => data,
  /**
   * 当前文章id
   */
  SET_ARTICLE_DETAIL_ID: (id: string | number) => id,
  /**
   * 获取文章详情数据
   */
  GET_ARTICLE_DETAIL_DATA: () => { },
  /**
   * 设置文章详情loading
   */
  SET_ARTICLE_DETAIL_LOADING: (loading: boolean) => loading,
  /**
   * 设置文章目录
   * @param dataArr 
   * @returns 
   */
  SET_ARTICLE_DETAIL_DIALOG: (dataArr: ILinkObj[]) => dataArr,

  /**
   * 设置文章阅读数量，每一次打开，文章的阅读数量加1
   */
  SET_ARTICLE_LIKE_NUM: () => { },
  /**
   * 添加评论文章
   */
  SET_ARTICLE_COMMENT: (commentObj: IArticleCommentObj) => commentObj,
  /**
   * 添加文件列表
   * @param articleDetailComments 
   * @returns 
   */
  SET_ARTICLE_COMMENT_LIST: (data: IArticleCommentObj[]) => data

})

export const { setArticleDetailData, setArticleCommentList, setArticleDetailDialog, setArticleDetailId, setArticleLikeNum, setArticleComment, setArticleDetailLoading, getArticleDetailData } = createArticleActions;


const articleDetailReducers = handleActions<IArticleDetailStore, any>({
  /**
   * 设置获取文章详情的loading
   */
  [setArticleDetailLoading.toString()]: (state, { payload }) => ({ ...state, ...{ articleDetailLoading: payload } }),
  /**
   * 设置当前文章id
   * 
   */
  [setArticleDetailId.toString()]: (state, { payload }) => ({ ...state, ...{ currentArticleId: payload } }),
  /**
   * 设置文章详情目录
   * @param state 
   * @param param1 
   * @returns 
   */
  [setArticleDetailDialog.toString()]: (state, { payload }) => ({ ...state, articleDetailDialog: payload }),
  /**
    * 设置获取文章详情的数据
    */
  [setArticleDetailData.toString()]: (state, { payload }) => ({ ...state, articleDetailData: { ...state.articleDetailData, ...payload } }),
  /**
    * 设置获取文章详情的评论
    */
  [setArticleComment.toString()]: (state, { payload }) => ({ ...state, commentParams: { ...state.commentParams, ...payload } }),
  /**
   * 设置文章评论列表
   * @param state 
   * @param param1 
   * @returns 
   */
  [setArticleCommentList.toString()]: (state, { payload }) => ({ ...state, articleDetailComments: payload }),

}, initData);

export default articleDetailReducers;