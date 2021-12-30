<template>
  <div class="singup-page">
    <div class="singup-box">
      <div class="welcome-box">
        <h1>在这里注册您的账号。</h1>
        <p>注册完账号后，您可以发表评论，与科技和技术爱好者共同讨论交流；还可以收藏您喜欢的文章。如果您对写文章感兴趣，您也可以尝试编写自己的文章，与大家一同分享你的成长与经验。赶快注册吧！</p>
      </div>
      <div class="form-box">
        <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="account" prop="account">
            <a-input
              class="login-input"
              v-model="form.account"
              placeholder="在这里输入电子邮箱"
              @blur="
                () => {
                  $refs.account.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <a-form-model-item ref="password" prop="password">
            <a-input
              class="login-input"
              v-model="form.password"
              placeholder="设置一个好记的密码"
              @blur="
                () => {
                  $refs.password.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <a-form-model-item ref="password" class="text-item" :wrapper-col="{ span: 24, offset: 0 }">
            已有账号？<nuxt-link to="index">点这里去登录</nuxt-link>
          </a-form-model-item>
          <a-form-model-item class="btn-item" :wrapper-col="{ span: 24, offset: 0 }">
            <a-button type="primary" @click="onSubmit" :loading="submiteLoading">
              注册账号
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'singup',
  computed: {
    ...mapState('system', ['signup'])
  },
  data () {
    return {
      submiteLoading: false,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入电子邮箱' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submiteLoading = true
          this.pageSignup()
        }
      })
    },
    async pageSignup () {
      const { account, password } = this.form

      const params = {
        account,
        password
      }

      const res = await this.$axios.post(this.signup, {
        ...params
      }).catch(() => {})
      this.submiteLoading = false
      if (res && res.code === '200') {
        this.$message.success(res.msg)
      } else {
        this.$message.error(res.msg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
.singup-page{
  width: @view-width;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 57px;

  .singup-box{
    width: 100%;
    margin: 0 auto;

    .form-box{
      width: 100%;
      padding: 32px;
      background-color: @nav-background-color;
      border: .5px solid @border-color;
      margin-bottom: 32px;
      margin-top: 32px;

      .btn-item{
        margin-bottom: 0;
        text-align: right;
      }
    }
  }
}
</style>
