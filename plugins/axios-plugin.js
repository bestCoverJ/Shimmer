import axios from 'axios'
import { message } from 'ant-design-vue'

axios.defaults.withCredentials = true// 跨域处理 允许携带cookie
export default function ({ $axios, app, redirect }) {
  // 正常请求返回处理
  $axios.onRequest((config) => {
    // 获取cookie放在头部传到后端
    const token = app.$cookies.get('token')
    if (token) {
      config.headers.Authorization = token
    }
    return Promise.resolve(config)
  })
  $axios.onResponse((response) => {
    return Promise.resolve(response.data)
  })
  // 错误请求返回处理
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      // 错误代码
      case 401:
        message.error('请重新登录')
        sessionStorage.clear()
        redirect('/login')
        break
      case 403:
        // sessionStorage.clear()
        message.error('请求资源不可用')
        redirect('/login')
        break
      case 404:
        message.error('请求地址不存在')
        // sessionStorage.clear()
        break
      case 500:
        message.error('服务器异常')
        break
      case 502:
        message.error('服务响应异常')
        break
      case 503:
        message.error('服务器正忙,请稍后')
        break
      case 504:
        message.error('服务访问超时')
        break
      default:
        break
    }
  })
}
