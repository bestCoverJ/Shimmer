import axios from 'axios'

const header = '/api'
const user = header + '/user'

export const state = () => ({
  token: '',
  logged: false,
  keepState: false,
  login: user + '/login',
  signup: user + '/register',
  searchPwd: user + '/searchPwd',
  sendEmail: user + '/sendEmail'
})

export const mutations = ({
  // 检查用户登录状态
  checkLoginState (state, payload) {
    if (this.$cookies.get('token')) {
      state.logged = true
      console.log('-----用户已登录-----')
    }
  },
  userLogin (state, payload) {
    state.token = payload.token
    state.keepState = payload.keepState
    this.$cookies.set('token', 'Bearer ' + state.token, {
      maxAge: 60 * 60 * 24 * 30
    })
    state.logged = true
    console.log('-----用户登录成功-----')
  },
  userLogout (state, payload) {
    state.token = ''
    this.$cookies.remove('token')
    state.logged = false
    console.log('-----用户已退出-----')
  }
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
    console.log(params)
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
