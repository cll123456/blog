/**
 * 文章返回的对象
 */
export interface IArticleResData {
  /**
   * 文章详情
   */
  details: IArticleDetailObj,
  /**
   * 评论
   */
  comments: IArticleDetailCommentObj[]
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
  * 评论邮箱
  */
  email: string,
  /**
  * 评论头像地址
  */
  avatar: string
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
  articleDetailDialog: IArticleDetailDialogObj[]
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
  data: IArticleResData
}

export interface IArticleDetailDialogObj {
  [key: string]: any
}