import { combineReducers } from "redux";
// 导入路由连接redux
import { connectRouter } from 'connected-react-router'
import { History } from "history";

// 获取所有的模块
let obj: any = {};
// 这里不需要懒加载导入模块，需要直接导入模块
const modules = import.meta.globEager('./../actions/**/*.ts');
for (const path in modules) {
  if (path !== './../actions/index.ts') {
    // 获取名称， ./../actions/about/index.ts ----> about
    const prop = path.split('/')[3];
    // 获取导入的结果
    obj[prop] = modules[path].default
  }
}



// connected-react-router 需要使用一个函数使用一个函数来导出一个reducers
const createRootReducer = (history:History) => combineReducers({
  router: connectRouter(history),
  ...obj
})

export default createRootReducer


