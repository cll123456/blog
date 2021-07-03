import { takeEvery, call, put, select } from "@redux-saga/core/effects"
import { apiGetArticleByParams, apiGetHotArticle } from "../../../api/article";
import { IStore } from "../../../types/store/action";
import { IArticleListRes, IArticleParams } from "../../../types/store/action/article";
import { getHotArticleData, getTotalArticleData, setHotArticleData, setTotalArticleCondition, setTotalArticleData, setTotalArticleLoading, setTotalArticleTotal } from "../../actions/article"

export default function* () {
  yield takeEvery(getHotArticleData, getHotArticleDataEffects);
  yield takeEvery(getTotalArticleData, getTotalArticleDataEffects);
}

/**
 * 获取热门文章数据
 */
function* getHotArticleDataEffects() {
  try {
    const res: IArticleListRes = yield call(apiGetHotArticle);
    yield put(setHotArticleData(res.data.rows))
  } catch (err) {
    throw Error('查询热门文章失败' + err.message)
  }
}

/**
 * 获取全部文章副作用
 */
function* getTotalArticleDataEffects() {
  yield put(setTotalArticleLoading(true));
  // get req params
  const store: IStore = yield select();
  // 发送请求
  try {
    const res: IArticleListRes = yield call(apiGetArticleByParams, store.article.totalArticleCondition);
    // set total
    yield put(setTotalArticleTotal(res.data.count));
    // set data
    yield put(setTotalArticleData(res.data.rows))
  } catch (error) {
    throw Error('查询热门文章失败' + error.message)
  } finally {
    yield put(setTotalArticleLoading(false));
  }
}

