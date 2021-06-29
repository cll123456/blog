import { call, put, takeEvery } from "@redux-saga/core/effects";
import { apiGetAboutMe } from "../../../api/about";
import { IAboutListRes } from "../../../types/store/action/about";
import { getAsyncData, setData, setIsLoading } from "../../actions/about";
export default function* () {
  // 监听获取异步关于我的数据
  yield takeEvery(getAsyncData.toString(), getAboutMeData);

}

/**
 * 获取关于我的数据
 */
function* getAboutMeData() {
  // 启动加载
  yield put(setIsLoading(true));
  // 发送axios请求
  const res: IAboutListRes = yield call(apiGetAboutMe);
  // 赋值data
  yield put(setData(res.data));
  // 关闭加载
  yield put(setIsLoading(false))
}