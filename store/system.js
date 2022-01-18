import axios from 'axios'

const header = '/api'
const user = header + '/user'

export const state = () => ({
  token: '',
  login: user + '/login',
  signup: user + '/signup',
  searchPwd: user + '/searchPwd',
  sendEmail: user + '/sendEmail'
})

export const mutations = ({
})

export const actions = {
  // 用户登录
  async loginByPwd (context, params) {
    // {
    //   "account": "string",
    //   "password": "string"
    // }
    return await axios.post(context.state.login, {
      ...params
    }).catch(() => {})
  },
  // 账号注册
  async registerByPwd (context, params) {
    // {
    //   "code": "string",
    //   "email": "string",
    //   "password": "string",
    //   "username": "string"
    // }
    return await axios.post(context.state.signup, {
      ...params
    }).catch(() => {})
  },
  // 忘记密码
  async searchPwd (context, params) {
    // {
    //   "code": "string",
    //   "email": "string",
    //   "password": "string",
    //   "pwd": "string"
    // }
    return await axios.post(context.state.searchPwd, {
      ...params
    }).catch(() => {})
  },
  // 发送邮箱验证码
  async sendEmail (context, params) {
    // email
    return await axios.post(context.state.sendEmail + `/${params}`).catch(() => {})
  }
}
