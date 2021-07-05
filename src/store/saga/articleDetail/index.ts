import { takeEvery, put, select, call } from "@redux-saga/core/effects"
import { apiGetArticleDetailById, apiSetArticleReadOrLike } from "../../../api/articleDetail";
import { IStore } from "../../../types/store/action";
import { IArticleDetailReadOrLike, IArticleDetailRes } from "../../../types/store/action/articleDetail";
import { getArticleDetailData, setArticleDetailData, setArticleDetailLoading, setArticleLikeNum } from "../../actions/articleDetail"

export default function* () {
  yield takeEvery(getArticleDetailData, getArticleDetailDataEffects);
  yield takeEvery(setArticleLikeNum, setLike);
}


// 获取文章详情副作用
function* getArticleDetailDataEffects() {
  yield put(setArticleDetailLoading(true));
  // 获取仓库
  const store: IStore = yield select();
  try {
    const res: IArticleDetailRes = yield call(apiGetArticleDetailById, store.articleDetail.currentArticleId)
    yield put(setArticleDetailData(res.data))
    yield articleCreateReadOrLike({ articleId: store.articleDetail.currentArticleId, readNum: true, likeNum: false })
  } catch (error) {
    throw Error('文章详情获取数据失败' + error.message)
  } finally {
    yield put(setArticleDetailLoading(false));
  }
}

/**
 * 点赞
 */ 
function* setLike() {
  // 获取仓库
  const store: IStore = yield select();
  yield articleCreateReadOrLike({ articleId: store.articleDetail.currentArticleId, readNum: false, likeNum: true })
}

/**
 * 文字的点赞或者阅读
 */
function* articleCreateReadOrLike(params: IArticleDetailReadOrLike) {
  yield call(apiSetArticleReadOrLike, params)
}