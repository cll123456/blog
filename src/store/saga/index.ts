import { all } from "@redux-saga/core/effects"

/**
 * 对外导出一个saga根生成器
 */
export default function* () {
  // 收集saga 目录下面的生成器函数,使用默认导入
  const arr: any = [];
  const modules = import.meta.globEager('./../saga/**/*.ts');
  for (const path in modules) {
    if (path !== './../saga/index.ts') {
      // 获取导入的结果
      arr.push(modules[path].default())
    }
  }
  // 调度所有的saga 的副作用中间件
  yield all(arr)
}