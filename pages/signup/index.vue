<template>
  <div class="signup-page">
    <NavLogo />
    <div class="signup-box">
      <div class="title-box">
        <h2>一点微光 伴我成长</h2>
        <p>已有账号？<nuxt-link to="login">登录</nuxt-link></p>
      </div>
      <div class="form-box">
        <a-form-model
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="email" prop="email">
              <a-input
                class="login-input"
                v-model="form.email"
                placeholder="请输入电子邮箱"
                :disabled="emailDisabled"
                @change="emailChange"
                @blur="
                  () => {
                    $refs.email.onFieldBlur();
                  }
                "
              >
              <a-icon slot="prefix" type="mail" />
              <a-button
                slot="suffix"
                type="primary"
                :disabled="buttonDisabled"
                :loading="buttonLoading"
                @click="clickSend"
              >
                {{buttonTitle}}
              </a-button>
              </a-input>
            </a-form-model-item>
          <a-form-model-item ref="password" prop="password">
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
          <a-form-model-item ref="code" prop="code">
            <a-input
              class="login-input"
              v-model="form.code"
              placeholder="请输入验证码"
              :maxLength="codeMaxLength"
              @change="codeChange"
              @blur="
                () => {
                  $refs.code.onFieldBlur();
                }
              "
            >
              <a-icon slot="prefix" type="message" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item ref="readme" prop="readme">
            <a-checkbox v-model="form.readme">
              我已阅读且同意<nuxt-link to="login">服务协议</nuxt-link>及<nuxt-link to="login">隐私声明</nuxt-link>
            </a-checkbox>
          </a-form-model-item>
          <a-form-model-item class="btn-item">
            <a-button type="primary" @click="onSubmit" :loading="submiteLoading" block>
              登录
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
    <div class="copyright-box">Copyright @ 2021-2022 Shimmer. All Rights Reserved</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      submiteLoading: false,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      form: {
        email: '',
        code: '',
        password: '',
        readme: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入电子邮箱' },
          { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的电子邮箱' }
        ],
        password: [
          { required: true, message: '请设置密码' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        readme: [
          { required: true, message: '请同意服务协议及隐私声明' }
        ]
      },
      isShowCode: false,
      codeMaxLength: 6,
      buttonTitle: '发送验证码',
      buttonLoading: false,
      buttonDisabled: true,
      submitDisabled: true,
      emailDisabled: false
    }
  },
  methods: {
    ...mapActions('system', ['registerByPwd', 'sendEmail']),
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submiteLoading = true
          this.pageSignup()
        }
      })
    },
    emailChange () {
      this.$refs.ruleForm.validateField('email', (valid) => {
        if (valid) {
          this.buttonDisabled = true
        } else {
          this.buttonDisabled = false
        }
      })
    },
    codeChange () {
      this.$refs.ruleForm.validateField('code', (valid) => {
        if (valid) {
          this.submitDisabled = true
        } else {
          this.submitDisabled = false
        }
      })
    },
    clickSend () {
      this.buttonLoading = true
      this.isShowCode = true
      this.sendToEmail()
    },
    async sendToEmail () {
      const { email } = this.form
      const res = await this.sendEmail(email)
      this.buttonLoading = false
      if (res?.data?.code === 200) {
        this.$message.success('已为您的邮箱发送了一封包含验证码的邮件，请注意查收')
        this.setButtonTime()
      } else {
        this.$message.error(res.data.message)
      }
    },
    setButtonTime () {
      let times = 60
      this.buttonDisabled = true
      this.buttonTitle = times + '秒后重试'
      this.emailDisabled = true

      window.setButton = setInterval(() => {
        this.buttonTitle = times + '秒后重试'
        times--
        if (times === 0) {
          this.buttonDisabled = false
          this.emailDisabled = false
          this.buttonTitle = '发送验证码'
          clearInterval(window.setButton)
        }
      }, 1000)
    },
    async pageSignup () {
      const { email, code, password } = this.form
      const params = {
        email,
        password,
        passwordAgain: password,
        code
      }
      const res = await this.registerByPwd(params).catch(() => {})
      this.submiteLoading = false
      if (res?.data?.code === 200) {
        this.$message.success(res.data.message)
      } else {
        this.$message.error(res.data.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
  .signup-page {
    background: @nav-background-color;
    background-image: url(https://tdesign.tencent.com/starter/vue/assets/assets-login-bg-white.439b0654.png);
    background-size: cover;
    background-position: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .signup-box {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 5% 5% 0 5%;
      max-width: 400px;
      line-height: 22px;

      .title-box {
        margin-bottom: 32px;

        h2 {
          font-size: 32px;
        }
      }

      .form-box{
        /deep/ .ant-input-suffix {
          right: 0;

          .ant-btn {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
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
