<template>
  <div class="login-page">
    <NavLogo />
    <div class="login-box">
      <div class="title-box">
        <h2>一点微光 伴我成长</h2>
        <p>还未注册账号?<nuxt-link to="signup">注册新账号</nuxt-link></p>
      </div>
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
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
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
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-model-item>
        <div class="text-item">
          <a-checkbox @change="onChange"> 保持登录状态 </a-checkbox>
          <nuxt-link to="index">我忘记了我的密码</nuxt-link>
        </div>
        <a-form-model-item class="btn-item">
          <a-button
            type="primary"
            @click="onSubmit"
            :loading="submiteLoading"
            block
          >
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="copyright-box">
      Copyright @ 2021-2022 Shimmer. All Rights Reserved
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Login',
  computed: {
    ...mapState('system', ['logged'])
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
        account: [{ required: true, message: '请输入手机号/电子邮箱' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  created () {
    if (this.logged) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('system', ['loginByPwd']),
    ...mapMutations('system', ['userLogin']),
    onChange () {},
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
        account,
        password
      }
      const res = await this.loginByPwd(params)
      this.submiteLoading = false
      this.singupDisabled = false
      if (res?.data?.code === 200) {
        const token = {
          token: res.data.data.token
        }
        this.userLogin(token)
        this.$message.success(res.data.message)
        this.$router.push('/')
      } else {
        this.$message.error(res.data.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url("@/modify/css/global.less");
.login-page {
  background: @nav-background-color;
  background-image: url(https://tdesign.tencent.com/starter/vue/assets/assets-login-bg-white.439b0654.png);
  background-size: cover;
  background-position: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .login-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 5%;
    max-width: 400px;
    line-height: 22px;

    .title-box {
      margin-bottom: 32px;

      h2 {
        font-size: 32px;
      }
    }

    .text-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 48px;
    }
  }

  .copyright-box {
    padding: 20px 30px;
  }
}
</style>
