<template>
  <div class="body-box">
    <Nav />
    <div class="view-box">
      <div class="article-box">
        <a-space direction="vertical" size="large">
          <Card :title="card.title" :description="card.description" :imgUrl="card.img1" />
          <Card :title="card.title" :description="card.description" :imgUrl="card.img1" />
        </a-space>
      </div>
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
        </a-space>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      card: {
        title: '十个提升电脑效率的小技巧',
        description: '随着 Windows 11 操作系统的发布，大家都将目光放在了这个全新的系统上。但根据官方提供的升级需求来看，仍有一部分电脑暂时还无法满足升级条件。因此，本文推荐了十个提升电脑效率的小技巧，希望可以帮助到您。',
        img1: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80',
        img2: 'https://images.unsplash.com/photo-1625219447949-5203cbe4829e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      }
    }
  }
}
</script>

<style>
</style>

<style lang="less" scpoed>
@import url('@/modify/css/global.less');

body{
  background-color: @primary-background-color;
}

.view-box{
  margin: 0 auto;
  max-width: @view-width;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 32px;

  .article-box{
    margin: 32px 32px 0 0;
    max-width: @article-width;

    @media (max-width: 1200px) {
      max-width: 100%;
      margin-right: 0;
    }
  }

  .aside-box{
    margin: 32px 0 0 0;
    min-width: @aside-width;
    display: flex;
    flex-direction: column;
    align-items: center;

    .signup-box{
      min-width: @aside-width;
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
  }
}

</style>
