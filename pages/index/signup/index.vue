<template>
  <div class="signup-page">
    <div class="signup-box">
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
          <a-form-model-item ref="email" prop="email">
            <a-input
              class="login-input"
              v-model="form.email"
              placeholder="在这里输入电子邮箱"
              :disabled="emailDisabled"
              @change="emailChange"
              @blur="
                () => {
                  $refs.email.onFieldBlur();
                }
              "
            >
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
          <transition name="fade">
            <a-form-model-item v-if="isShowCode" ref="code" prop="code">
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
              />
            </a-form-model-item>
          </transition>
          <a-form-model-item ref="login" class="text-item" :wrapper-col="{ span: 24, offset: 0 }">
            已有账号？<nuxt-link to="index">点这里去登录</nuxt-link>
          </a-form-model-item>
          <a-form-model-item class="btn-item" :wrapper-col="{ span: 24, offset: 0 }">
            <a-button type="primary" @click="onSubmit" :loading="submiteLoading" :disabled="submitDisabled">
              下一步
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'signup',
  computed: {
  },
  data () {
    return {
      submiteLoading: false,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      form: {
        email: '',
        code: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入电子邮箱' },
          { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的电子邮箱' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
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
      const { email, code } = this.form
      const params = {
        email,
        code
      }
      const res = await this.registerByPwd(this.signup, {
        ...params
      }).catch(() => {})
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
.signup-page{
  width: @view-width;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 57px;

  .signup-box{
    width: 60%;
    margin: 0 auto;

    @media (max-width: @mobile-width) {
      width: 100%;
    }

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

      /deep/ .ant-input-suffix {
        right: 0;
      }
    }
  }
}
</style>
