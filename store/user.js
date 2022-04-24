import axios from 'axios'

const header = '/api'
const user = header + '/superUser'

export const state = () => ({
  // 根据ID查询用户信息
  getById: user + '/getById',
  // 查询所有用户
  findAll: user + '/findAll',
  // 模糊查询带分页
  get: user + '/get',
  // 根据ID删除用户信息
  deleteById: user + '/auth/get',
  // 添加用户
  addUser: user + '/auth/addUser',
  // 更新用户
  updateUser: user + '/auth/updateUser'
})

export const actions = {
  // 查询所有用户
  async findAll (context, params) {
    return await axios.get(context.state.findAll, {
    }).catch(() => {})
  }
}
