import axios from 'axios'

const header = '/api'

export const state = () => ({
  token: '',
  login: header + '/user/loginByPwd',
  signup: header + '/user/signup'
})

export const mutations = ({
})

export const actions = {
  async loginByPwd (context, params) {
    return await axios.post(context.state.login, {
      ...params
    }).catch(() => {})
  }
}
