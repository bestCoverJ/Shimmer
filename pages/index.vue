<template>
  <div class="body-page">
    <div class="body-box">
      <Nav />
      <div class="view-body">
        <nuxt-child keep-alive></nuxt-child>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Index',
  beforeRouteLeave (to, from, next) {
    if (!this.keepState) {
      this.userLogout()
    }
    next()
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('system', ['keepState'])
  },
  created () {
    this.checkLoginState()
  },
  mounted () {
    // this.initDarkMode()
  },
  methods: {
    ...mapMutations('system', ['checkLoginState', 'userLogout']),
    initDarkMode () {
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
      console.log(1)
      if (darkMode && darkMode.matches) {
        // alert('dark!')
        console.log('dark')
      }
      darkMode && darkMode.addEventListener('change', (e) => {
        if (e.matches) {
          // alert('dark!')
          console.log('dark')
        } else {
          // alert('light!')
          console.log('light')
        }
      })
    }
  }
}
</script>

<style>
</style>

<style lang="less" scpoed>
@import url('@/modify/css/global.less');

body{
  color: @text-color;
  background-color: @primary-background-color;
  min-height: 100vh;

  .nuxt-progress{
    background-color: @primary-color-loading;
    box-shadow: 0 0 0 1px @primary-color-loading-shadow;
    height: 1px;
  }
}

.body-page {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100vh;

  .body-box {
    .view-body{
      margin: 0 auto;
      margin-top: 20px;
      max-width: @view-width;
      // display: flex;
      // flex-direction: row;
      // justify-content: space-between;
      // flex-wrap: wrap;
      // padding: 0 32px;
    }
  }
}
</style>
