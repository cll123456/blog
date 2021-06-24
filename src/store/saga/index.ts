import { all, call } from "@redux-saga/core/effects"

// 文件动态导入的类型
type fileImportType = { default: () => undefined } | undefined

/**
 * 对外导出一个saga根生成器
 */
export default function* () {
  // 收集saga 目录下面的生成器函数,使用默认导入
  const modules = import.meta.glob('./../saga/**/*.ts');
  const arr: any = [];
  for (const path in modules) {
    if (path !== './../saga/index.ts') {
      const res: fileImportType = yield call(modules[path]);
      arr.push(!!res && res.default())
    }
  }
  // 调度所有的saga 的副作用中间件
  yield all(arr)
}