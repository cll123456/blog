import { createStore, applyMiddleware } from 'redux'
import reducers from './actions'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import sagaRoot from './saga'

// 创建一个saga中间件
const sagaMid = createSagaMiddleware();

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(sagaMid)
  ));
// 执行中间件
sagaMid.run(sagaRoot)

export default store;