/**
 * 通过路径获取路径上的参数
 * @param url 
 */
 export function getParamByPath(url: string):object {
  if (url.indexOf('?') !== -1) {
    let query = url.split('?')[1]

    let paramStrings: string[] = []
    if (query.indexOf('&') !== -1) {
      paramStrings = query.split('&')
    } else {
      paramStrings.push(query)
    }

    let params:any = {}

    if (paramStrings.length === 0) {
      return {}
    }
    paramStrings.forEach(function (value: string) {
      let paramArr = value.split('=')
      params[paramArr[0]] = paramArr[1] || ''
    })

    return params
  }
  return {}
}