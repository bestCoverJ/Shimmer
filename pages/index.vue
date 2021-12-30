<template>
  <div class="body-box">
    <Nav />
    <div class="view-body">
      <nuxt-child keep-alive></nuxt-child>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    initDarkMode () {
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
      console.log(1)
      if (darkMode && darkMode.matches) {
        alert('dark!')
        console.log('dark')
      }
      darkMode && darkMode.addEventListener('change', (e) => {
        if (e.matches) {
          alert('dark!')
          console.log('dark')
        } else {
          alert('light!')
          console.log('light')
        }
      })
    }
  },
  mounted () {
    this.initDarkMode()
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

  .nuxt-progress{
    background-color: @primary-color-loading;
    box-shadow: 0 0 0 1px @primary-color-loading-shadow;
    height: 1px;
  }
}

.view-body{
  margin: 0 auto;
  margin-top: 20px;
  max-width: @view-width;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 32px;
}

</style>
