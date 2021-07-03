import { call, put, takeEvery, select } from "@redux-saga/core/effects";
import { apiGetHotProject, apiGetProjectByParams } from "../../../api/project";
import { IStore } from "../../../types/store/action";
import { IProjectListData, } from "../../../types/store/action/project";
import { getHotProjectData, getTotalProjectData, setHotProjectData, setTotalProjectCondition, setTotalProjectCount, setTotalProjectData, setTotalProjectLoading } from "../../actions/project";


export default function* () {
  yield takeEvery(getHotProjectData.toString(), getHotProjectEffect);
  yield takeEvery(getTotalProjectData.toString(), getTotalProjectEffect);
}

/**
 * 获取热门项目的副作用
 */
function* getHotProjectEffect() {
  const res: IProjectListData = yield call(apiGetHotProject);
  yield put(setHotProjectData(res.data.rows))

}

/**
 * 获取全部的数据
 */
function* getTotalProjectEffect() {
  yield put(setTotalProjectLoading(true));
  // 获取store的参数
  const state: IStore = yield select();
  try {
    const res: IProjectListData = yield call(apiGetProjectByParams, state.project.totalProjectCondition);
    // 设置数据
    yield put(setTotalProjectCount(res.data.count));
    yield put(setTotalProjectData(res.data.rows));
  } catch (err) {
    console.log(err, '------查询项目报错');
  } finally {
    yield put(setTotalProjectLoading(false));
  }

}