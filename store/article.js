import axios from 'axios'

const header = '/api'
const article = header + '/article'

export const state = () => ({
  // 根据ID查询文章信息
  getById: article + '/getById',
  // 查询所有文章，带分页
  findAll: article + '/findAll',
  // 模糊查询带分页
  get: article + '/get',
  // 根据ID删除文章信息
  deleteById: article + '/auth/get',
  // 添加文章
  addUser: article + '/auth/addUser',
  // 更新文章
  updateUser: article + '/auth/updateUser'
})

export const actions = {
  // 查询所有文章
  async getById (context, params) {
    return await axios.get(context.state.getById + `/${params.id}`).catch(() => {})
  },
  // 查询所有文章
  async findAll (context, params) {
    return await axios.get(context.state.findAll + `/${params.current}/${params.size}`).catch(() => {})
  }
}
