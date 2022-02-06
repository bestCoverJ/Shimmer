<template>
<div class="nav-body">
  <div class="nav-box">
    <div class="nav-item-box">
      <div class="nav-item">
        <a-space :size="spaceSize.logoSize">
          <nuxt-link to="/"><h1>Shimmer</h1></nuxt-link>
          <!-- <h3>前端</h3>
          <h3>后端</h3>
          <h3>科技</h3>nav-category-box
          <h3>随记</h3> -->
        </a-space>
      </div>
      <div class="nav-item nav-menu">
        <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="latest">最新文章</a-menu-item>
        <a-menu-item key="news">科技新闻</a-menu-item>
        <a-menu-item key="evaluation">好物评测</a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            网站建设
          </span>
          <a-menu-item-group title="网站运营">
            <a-menu-item key="setting:1">
              服务器搭建
            </a-menu-item>
            <a-menu-item key="setting:2">
              网站运营规划
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="网站开发">
            <a-menu-item key="setting:3">
              Vue.js 开发
            </a-menu-item>
            <a-menu-item key="setting:4">
              Shimmer 开发
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
      </div>
      <div class="nav-item right-bar">
        <a-input-search class="search-input" placeholder="搜索内容..." style="width: 200px" @search="onSearch" />
        <a-button v-if="!logged" class="login-button btn-border" style="margin-right: 12px;"><nuxt-link to="login">登录</nuxt-link></a-button>
        <a-button v-if="!logged" type="primary"><nuxt-link to="signup">注册</nuxt-link></a-button>
        <a-dropdown v-else>
          <div class="ant-dropdown-link" @click="e => e.preventDefault()">
            <span class="user-menu"></span> <a-icon type="down" />
          </div>
          <a-menu class="menu-item" slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="user" /> 我的主页</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;"><a-icon type="edit" /> 创作中心</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a href="javascript:;" @click="logout"><a-icon type="logout" /> 退出</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <!-- <a-button type="button" class="setting-button" @click="showDrawer"><a-icon type="setting" /></a-button> -->
      </div>
      <a-icon class="nav-item menu-bar" type="menu" @click="showDrawer" />
      <!-- <a-drawer
        class="aside-drawer-box"
        width="300"
        placement="right"
        :closable="false"
        :visible="isShowDrawer"
        :after-visible-change="afterVisibleChange"
        @close="closeDrawer"
      >
      <a-space direction="vertical" size="small">
        <a-input-search placeholder="搜索内容..." style="width: 200px; margin-bottom: 16px;" @search="onSearch" />
          <h4>最新文章</h4>
          <h4>科技新闻</h4>
          <h4>好物评测</h4>
          <h4>Java</h4>
          <h4>JavaScript</h4>
          <h4>网站建设</h4>
          <a-divider />
      </a-space>
      <p>个性化设置</p>
      <a-form v-bind="SettingForm" :form="form" layout="inline">
        <a-form-item label="启用预设字体">
          <a-switch default-checked v-decorator="['switch', { valuePropName: 'checked' }]" />
        </a-form-item>
        <p>开启后,网站会尝试从网络中加载预设字体,用于提升用户体验。如果您的网络不佳,或者字体显示异常,可以关闭此功能。</p>
        <a-form-item label="启用深色模式">
          <a-switch default-checked v-decorator="['switch', { valuePropName: 'checked' }]" />
        </a-form-item>
        <p>开启后,网站会强制切换到深色模式,关闭此功能则自动跟随浏览器的色彩模式。</p>
        <a-form-item label="记住登录状态">
          <a-switch default-checked v-decorator="['switch', { valuePropName: 'checked' }]" />
        </a-form-item>
        <p>开启后,浏览器登录网站后将记住用户的状态信息,免去下次手动登录。该功能仅对同一浏览器生效。</p>
      </a-form>
      </a-drawer> -->
    </div>
  </div>
  <!-- <div class="category-box">
    <div class="nav-category-box">
    </div>
  </div> -->
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Nav',
  computed: {
    ...mapState('system', ['logged'])
  },
  data () {
    return {
      spaceSize: {
        logoSize: 'large',
        signinSize: 'middle'
      },
      current: ['latest'],
      isShowDrawer: false,
      SettingForm: {},
      form: {}
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'navForm' })
  },
  methods: {
    ...mapMutations('system', ['userLogout']),
    onSearch () {},
    showDrawer () {
      this.isShowDrawer = true
    },
    closeDrawer () {
      this.isShowDrawer = false
    },
    handleSubmit () {},
    afterVisibleChange () {},
    logout () {
      this.userLogout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.nav-body{
  background-color: #fff;

  .nav-box{
    border-bottom: solid 1px #DCDFE6;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);

    .nav-item-box{
      box-sizing: content-box;
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px;

      .nav-item{
        line-height: 65px;
        .ant-space{
          display: flex;
          flex-direction: row;
          align-items: baseline;

          h1{
            color: #000C2D;
            font-weight: 600;
            letter-spacing: -.1rem;
            margin: 0;
            line-height: 2rem;
          }

          h3{
            font-weight: 400;
            color: #687385;
            letter-spacing: -.05rem;
            margin: 0;
            line-height: 2rem;

            @media (max-width: @view-width) {
              display: none;
            }
          }
        }

        &.right-bar{
          display: flex;
          flex-direction: row;
          align-items: center;

          @media (max-width: @mini-width) {
            display: none;
          }

          .search-input {
            margin-right: 16px;
          }
          .ant-dropdown-link {
            display: flex;
            flex-direction: row;
            align-items: center;

            .user-menu {
              display: inline-block;
              background-image: url('https://file.coverj.com/img/avatar.jpg');
              background-size: 100%;
              width: 32px;
              height: 32px;
              border-radius: 4px;
              border: 1px solid @border-color;
              margin-right: 8px;
            }
          }
        }

        &.nav-menu{
          @media (max-width: @mobile-width) {
            display: none;
          }
        }

        &.menu-bar{
          @media (min-width: @mini-width) {
            display: none;
          }
        }
      }

      .nav-menu {
        font-weight: 550;
      }
    }
  }

  // .category-box{
  //   font-weight: 550;
  //   box-shadow: 0 10px 12px rgb(0 0 0 / 4%);

  //   .nav-category-box{
  //     margin: 0 auto;
  //     max-width: 1200px;
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: space-between;
  //     align-items: center;
  //     padding: 0 32px;
  //     overflow: hidden;
  //   }
  // }
}

.aside-drawer-box{
  .ant-space-item{
    h4{
      margin-bottom: 8px;
    }

    .ant-form-item-children{
      p{
        margin: 0;
        line-height: 14px;
      }
    }
  }
}
</style>
