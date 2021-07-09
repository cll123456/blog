import { ILinkObj } from "../../../layout/articleDetail";

/**
 * 文章返回的对象
 */
export interface IArticleResData {
  /**
   * 文章详情
   */
  details: IArticleDetailObj,
  
}


/**
 * 文章详情对象
 */
export interface IArticleDetailObj {
  /**
   * 文章标题
   */
  title: string,
  /**
   * 创建时间
   */
  createdAt: string,
  /**
   * 文章内容
   */
  content: string,
  /**
   * 文章的标签
   */
  tags: string,
  /**
   * 文章已经被阅读的数量
   */
  readNum: string | number,
  /**
   * 文章点赞量
   */
  likeNum: string | number,
}

/**
 * 
 * 评论对象
 */
export interface IArticleDetailCommentObj {
  /**
   * 评论内容
   */
  content: string,
  /**
  * 评论父级id
  */
  pid: string | number,
  /**
  * 评论id
  */
  id: string | number,
  /**
  * 评论昵称
  */
  nickName: string,
  /**
  * 评论账号
  */
  accounter: string,
  /**
   * 时间
   */
  createdAt: string,
  /**
  * 评论邮箱
  */
  email: string,
  /**
  * 评论头像地址
  */
  avatar: string,
  /**
   * 子元素
   */
  children: IArticleDetailCommentObj[],
  /**
   * 是否显示评论组件
   */
  hasShowCommentComp: boolean
}


/**
 * 评论对象
 */
export interface IArticleCommentObj {
  /**
   * 评论父级id
   */
  pid: string,
  /**
   * 评论内容
   */
  content: string,
  /**
   * 用户id
   */
  userId: string,
  /**
   * 文章id
   */
  articleId: string
}

/**
 * 文章详情
 */
export interface IArticleDetailStore {
  /**
   * 文章加载
   */
  articleDetailLoading: boolean,
  /**
   * 文章数据
   */
  articleDetailData: IArticleResData,
  /**
   * 文章详情评论
   */
  articleDetailComments: IArticleDetailCommentObj[],
  /**
   * 文章阅读点赞参数
   */
  readLikeParams: IArticleDetailReadOrLike,
  /**
   * 评论参数
   */
  commentParams: IArticleCommentObj,
  /**
   * 当前文章id
   */
  currentArticleId: string | number,
  /**
   * 文章目录
   */
  articleDetailDialog: ILinkObj[]
}

/**
 * 文章点赞或者阅读
 */
export interface IArticleDetailReadOrLike {
  /**
     * 文章id
     */
  articleId: string | number,
  /**
   * 是否增加阅读数量
   */
  readNum: boolean,
  /**
   * 是否进行点赞
   */
  likeNum: boolean
}
/***
 * 文章详情返回数据
 */
export interface IArticleDetailRes {
  code: string,
  data: {
      details: IArticleDetailObj,
      comments: IArticleDetailCommentObj[]
  }
}

/**
 * 评论数据对象
 */
export interface IArticleCommentProps {
  /**
   * 评论数据
   */
  commentData: IArticleDetailCommentObj[],
  /**
   * 设置评论数据
   */
  setArticleCommentData: (arr: IArticleDetailCommentObj[]) => void,
}


/**
 * 增加评论返回的结果
 */
export interface IArticleDetailCommentRes {
  code: string,
  data: {
    data: IArticleDetailCommentObj[]
  }
}