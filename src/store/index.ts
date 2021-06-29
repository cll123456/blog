import { createStore, applyMiddleware } from 'redux'
import createRootReducer from './actions'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import sagaRoot from './saga'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'


export const history = createBrowserHistory();


// 创建一个saga中间件
const sagaMid = createSagaMiddleware();
// 创建一个路由中间件
const routerMid = routerMiddleware(history);


const store = createStore(createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMid,sagaMid)
  ));
// 执行中间件
sagaMid.run(sagaRoot)

export default store;