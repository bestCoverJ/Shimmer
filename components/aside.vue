<template>
  <div class="aside-box">
    <a-space direction="vertical" size="large">
      <div class="signup-box">
        <div class="text-box">
          <p class="signup-text">注册</p>
          <p class="signup-tip-text">成为本站用户</p>
          <p class="signup-gray-text">即可体验评论、订阅等功能</p>
        </div>
        <div class="button-box">
          <a-space>
            <a-button class="login-button">立即登录</a-button>
            <a-button type="primary">注册</a-button>
            <p>我忘记了我的账号</p>
          </a-space>
        </div>
      </div>
      <div class="social-box">
        <a-space size="large" style="font-size: 28px;">
          <a-icon type="wechat" />
          <a-icon type="qq" />
          <a-icon type="weibo" />
          <a-icon type="zhihu" />
          <a-icon type="github" />
        </a-space>
      </div>
      <div class="recently-article">
        <h3>最新文章</h3>
        <a-divider></a-divider>
        <a-space direction="vertical">
          <RecentArticle />
          <RecentArticle />
          <RecentArticle />
        </a-space>
      </div>
      <div class="recently-message">
        <h3>最新留言</h3>
        <a-divider></a-divider>
        <a-space direction="vertical">
          <RecentMessage :messageId="messageId.id1" />
          <RecentMessage :messageId="messageId.id2" />
          <RecentMessage :messageId="messageId.id3" />
        </a-space>
      </div>
    </a-space>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {},
  data () {
    return {
      messageId: {
        id1: '100001',
        id2: '100002',
        id3: '100003'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
.aside-box{
    min-width: @aside-width;
    display: flex;
    flex-direction: column;
    align-items: center;

    .signup-box{
      max-width: @aside-width;
      height: 500px;
      background: url('https://images.unsplash.com/photo-1619359059287-9d024d7081ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80');
      border: solid 1px #DCDFE6;
      border-radius: 2px;
      padding: 50px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p{
        color: #fff;
        margin: 0;
        font-weight: 500;

        &.signup-text{
          letter-spacing: 2px;
          font-size: 3rem;
        }

        &.signup-tip-text{
          letter-spacing: 1px;
          font-size: 2rem;
        }

        &.signup-gray-text{
          margin-top: 10px;
          letter-spacing: 1px;
          font-size: 1rem;
          color: @nav-background-color;
        }
      }
    }

    .social-box{
      max-width: @aside-width;
      height: 100px;
      background-color: @nav-background-color;
      border: solid 1px #DCDFE6;
      border-radius: 2px;
      display: flex;
      align-content: center;

      .ant-space{
        margin: 0 auto;
      }
    }

    .recently-article{
      h3{
        color: @description-text-color;
      }

      .ant-divider{
        margin-top: 5px;
      }
    }

    .recently-message{
      h3{
        color: @description-text-color;
      }

      .ant-divider{
        margin-top: 5px;
      }
    }
  }
</style>
