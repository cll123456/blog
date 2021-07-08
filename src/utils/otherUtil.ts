/**
 * 防抖
 * @param f 
 * @param t 
 * @param im 
 * @returns 
 */
export function debounce(f: (...arg: any[]) => void, t: number, im = false) {
  let timer: number, flag = true;
  return (...args: unknown[]) => {
    // 需要立即执行的情况
    if (im) {
      if (flag) {
        f(...args);
        flag = false;
      } else {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          f(...args);
          flag = true
        }, t)
      }
    } else {
      // 非立即执行的情况
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        f(...args)
      }, t)
    }
  }
}

/**
 * 数组转成tree
 * @param list 
 * @returns 
 */
export  function composeTree<T>(list: T []) {
  // 拷贝数组
  const data = JSON.parse(JSON.stringify(list)) // 浅拷贝不改变源数据
  const result: T[] = []
  // 如果为空直接返回
  if (!Array.isArray(data)) {
    return result
  }
  // 怕里面会有children属性，重名
  data.forEach(item => {
    delete item.children
  })
  const map: { [key: string]: any } = {}
  data.forEach(item => {
    map[item.id] = item
  })
  data.forEach(item => {
    const parent = map[item.pid]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}