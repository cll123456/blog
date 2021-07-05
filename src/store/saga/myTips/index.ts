import { takeEvery, put, call } from "@redux-saga/core/effects"
import { apiGetMyTips } from "../../../api/layout";
import { ITipsRes } from "../../../types/layout/myTips";
import { getTipData, setTipData, setTipIsLoading } from "../../actions/myTips"

export default function* () {
  yield takeEvery(getTipData, getTipDataEffects)
}


function* getTipDataEffects() {
  yield put(setTipIsLoading(true));
  try {
    const res: ITipsRes = yield call(apiGetMyTips);
    yield put(setTipData(res.data))
  } catch (error) {
    throw Error('标签查询失败' + error.message)
  } finally {
    yield put(setTipIsLoading(false));
  }
}