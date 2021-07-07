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