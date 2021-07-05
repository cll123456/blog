import { createActions, handleActions } from "redux-actions";
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
    },
    comments: []
  },
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
  }

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
   * 设置文章阅读数量，每一次打开，文章的阅读数量加1
   */
  SET_ARTICLE_LIKE_NUM: () => { },
  /**
   * 添加评论文章
   */
  SET_ARTICLE_COMMENT: (data: IArticleCommentObj) => data,
  /**
   * 通过gitup来进行授权登录
   */
  LOGIN_BY_GITUP: () => { },
  /**
   * 从localstorage中获取评论的用户信息
   */ 
  Get_USER_INFO: () => {}
})

export const { setArticleDetailData, setArticleDetailId,setArticleLikeNum, setArticleComment, setArticleDetailLoading, getArticleDetailData, loginByGitup } = createArticleActions;


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
    * 设置获取文章详情的数据
    */
  [setArticleDetailData.toString()]: (state, { payload }) => ({ ...state, articleDetailData:{...state.articleDetailData, ... payload } }),
  /**
    * 设置获取文章详情的评论
    */
  [setArticleComment.toString()]: (state, { payload }) => ({ ...state, commentParams:{ ...state.commentParams, ... payload} }),
 
}, initData);

export default articleDetailReducers;