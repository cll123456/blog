import axios from "axios";
import { message } from 'antd';


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.DEV ? '/api' : '',
  // 超时
  timeout: 0,
});

// request拦截器
request.interceptors.request.use(config => {
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    // 如果是get方法，拼接参数到url上
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      let part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof (value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            let subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    // 删除掉最后的 & 符号
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    return Promise.reject(res.data)
  } else {
    return res.data
  }
},
  error => {
    console.log('err' + error)
    let msg = error.message
    if (msg == "Network Error") {
      msg = "后端接口连接异常";
    }
    else if (msg.includes("timeout")) {
      msg = "系统接口请求超时";
    }
    else if (msg.includes("Request failed with status code")) {
      msg = "系统接口" + msg.substr(msg.length - 3) + "异常";
    }
    message.error(msg, 5);

    return Promise.reject(error)
  }
)

export default request;