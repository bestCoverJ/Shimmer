<template>
<div class="login-page">
  <div class="img-box"></div>
  <div class="login-box">
    <div class="welcome-box">
      <h1>欢迎回来！</h1>
      <p>在下方输入您的账号信息以登录。</p>
    </div>
    <div class="welcome-box">
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
            placeholder="请输入电子邮箱/手机号"
            @blur="
              () => {
                $refs.account.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item ref="password" class="btn-item" prop="password">
          <a-input
            class="login-input"
            v-model="form.password"
            placeholder="请输入密码"
            @blur="
              () => {
                $refs.password.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item ref="password" class="text-item" :wrapper-col="{ span: 24, offset: 1 }">
          <nuxt-link to="index">我忘记了我的密码</nuxt-link>
        </a-form-model-item>
        <a-form-model-item class="btn-item" :wrapper-col="{ span: 18, offset: 5 }">
          <a-button type="primary" @click="onSubmit" :loading="submiteLoading">
            登录
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetForm" :disable="singupDisabled">
            注册
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login',
  computed: {
    ...mapState('system', ['token', 'login'])
  },
  data () {
    return {
      submiteLoading: false,
      singupDisabled: false,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入手机号/电子邮箱' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('system', ['loginByPwd']),
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submiteLoading = true
          this.singupDisabled = true
          this.pageLogin()
        }
      })
    },
    resetForm () {
      // this.$refs.ruleForm.resetFields()
      this.$axios.get('/api/user/get')
    },
    async pageLogin () {
      const { account, password } = this.form

      const params = {
        // 15392764677
        account,
        password
      }

      const res = await this.loginByPwd(params)

      this.submiteLoading = false
      this.singupDisabled = false

      if (res && res.code === '200') {
        this.$cookies.set('token', 'Bearer ' + res.data.token)
        this.$message.success(res.msg)
      } else {
        this.$message.error(res.msg)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
.login-page{
  width: @view-width;
  display: grid;
  gap: 50px;
  grid-template-columns: 2fr 1fr;
  margin-top: 57px;
  margin-bottom: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media (max-width: 700px) {
    justify-items: start;
  }

  .img-box{

    @media (max-width: 1200px) {
      display: none;
    }
    // background: url('https://images.unsplash.com/photo-1634401609694-f6ac6dd8474b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1754&q=80');
    background: url('https://images.unsplash.com/photo-1634243479024-cd2cb0e152d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80');
    // background: url('https://st-gdx.dancf.com/gaodingx/4368/configs/system/20210906-143557-1305.png?x-oss-process=image/resize,h_660/interlace,1,image/format,webp');
    width: @article-width;
    height: 470px;
    background-position: 40% center;
  }

  .login-box{
    width: @login-form-width;
    .welcome-box{
      width: 100%;
      padding: 32px;
      background-color: @nav-background-color;
      border: .5px solid @border-color;
      margin-bottom: 32px;

      .btn-item{
        margin-bottom: 0;
      }

      .text-item{
        margin-top: 10px;
      }
    }
  }
}

</style>
