import { takeEvery, put, select, call } from "@redux-saga/core/effects";
import { go, push } from "connected-react-router";
import { apiLoginByGitee, apiLoginByGiteeCallback, apiLoginByGithub, apiLoginByGithubCallback } from "../../../api/user";
import { IStore } from "../../../types/store/action";
import { ELoginType, IUserInfo, IUserRes, IUserUrlRes } from "../../../types/store/action/user";
import { setLoginCode, getUserInitInfo, setLoginType, setUserInfo } from "../../actions/user";
import { message } from 'antd';

export default function* () {
  yield takeEvery(getUserInitInfo, getUserInfoEffects);
  yield takeEvery(setLoginType, loginUserEffects);
  yield takeEvery(setLoginCode, setLoginCodeEffects);
}

/**
 * 从本地获取用户信息
 */
function* getUserInfoEffects() {
  // 首先从本地缓存获取
  const userInfo = JSON.parse(localStorage.getItem('@@userInfo') || 'null') as IUserInfo | null;
  // 为空则从后台获取
  if (userInfo?.id) {
    // 存在数据，进行放入redux
    yield put(setUserInfo(userInfo));
  }
}


/**
 * 使用不同类型的方式进行登录
 */
function* loginUserEffects() {
  // 获取登录的类型
  const loginType: ELoginType = sessionStorage.getItem('@@loginType') as any;
  // 发送请求
  try {
    let urlData: IUserUrlRes;
    if (loginType === ELoginType.loginByGitee) {
      urlData = yield call(apiLoginByGitee)
    } else {
      urlData = yield call(apiLoginByGithub)
    }
    window.location.href = urlData.data;


  } catch (error) {
    console.log('登录报错', error.message);

  }

}

/**
 * 登录回调的副作用
 */
function* setLoginCodeEffects() {
  let userData: IUserRes;
  const store: IStore = yield select();
  const loginType: ELoginType = sessionStorage.getItem('@@loginType') as any;
  try {
    if (loginType === ELoginType.loginByGitee) {
      userData = yield call(apiLoginByGiteeCallback, store.user.code);
      // 将数据存入localstorage
      localStorage.setItem('@@userInfo', JSON.stringify(userData.data.data));
      if (userData.data.data.id) {
        const path = sessionStorage.getItem('@@lastPage') as string
        // 返回上一页
        yield put(push(path));
        window.location.reload();
      }
    } else {
      userData = yield call(apiLoginByGithubCallback, store.user.code);
      // 将数据存入localstorage
      localStorage.setItem('@@userInfo', JSON.stringify(userData.data.data));
      if (userData.data.data.id) {
        const path = sessionStorage.getItem('@@lastPage') as string
        // 返回上一页
        yield put(push(path));
        window.location.reload();
      }
    }
  } catch (error) {
    yield put(push('/'));
    message.error('回调授权失败，请切换另一种方式', 5);
    console.log('回调报错', error.message);
  }


}