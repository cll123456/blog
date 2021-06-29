import { put, takeEvery, select, call } from "@redux-saga/core/effects"
import { apiGetGaugeData } from "../../../api/gauge";
import { IStore } from "../../../types/store/action";
import { IGaugeRes } from "../../../types/store/action/gauge";
import { getGaugeData, setGaugeArticleTotal, setGaugeData, setGaugeLoading, setGaugeReqParam } from "../../actions/gauge"

export default function* () {
  yield takeEvery(getGaugeData.toString(), getGaugeDataEffect);
  yield takeEvery(setGaugeReqParam, getGaugeDataEffect);
}

/**
 * 获取归档数据
 */
function* getGaugeDataEffect() {
  yield put(setGaugeLoading(true));
  const store: IStore = yield select()
  try {
    const res: IGaugeRes = yield call(apiGetGaugeData, store.gauge.gaugeReqParam);
    yield put(setGaugeArticleTotal(res.data.count));
    yield put(setGaugeData(res.data.rows))
  } catch (err) {
    console.log('归档获取数据失败');
  } finally {
    yield put(setGaugeLoading(false));
  }
}