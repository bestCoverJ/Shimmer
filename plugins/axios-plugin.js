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
        sessionStorage.clear()
        redirect('/login')
        break
      case 403:
        sessionStorage.clear()
        redirect('/login')
        break
      case 404:
        sessionStorage.clear()
        break
      case 500:
        message.error('Server exception')
        break
      case 502:
        message.error('Bad Gateway')
        break
      case 503:
        message.error(error.message)
        break
      case 504:
        message.error(error.message)
        break
      default:
        break
    }
  })
}
