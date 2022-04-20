<template>
  <div class="view-box">
    <div class="article-box">
      <a-space direction="vertical" size="large">
        <Card :title="card.title" :description="card.description" :imgUrl="card.img1" />
        <Card :title="card.title" :description="card.description" :imgUrl="card.img1" />
      </a-space>
    </div>
    <Aside />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      card: {
        title: '十个提升电脑效率的小技巧',
        description: '随着 Windows 11 操作系统的发布,大家都将目光放在了这个全新的系统上。但根据官方提供的升级需求来看，仍有一部分电脑暂时还无法满足升级条件。因此，本文推荐了十个提升电脑效率的小技巧，希望可以帮助到您。',
        img1: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80',
        img2: 'https://images.unsplash.com/photo-1625219447949-5203cbe4829e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      }
    }
  },
  methods: {
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
  background-color: @primary-background-color;
}

.view-box{
  margin: 0 auto;
  max-width: @view-width;
  display: grid;
  // gap: 20px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: @view-width) {
    grid-template-columns: 1fr;
  }

  .article-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: @article-width;

    @media (max-width: @view-width) {
      align-items: center;
    }

    @media (max-width: @mini-width) {
      padding: 0 20px;
      box-sizing: border-box;
      min-width: 100%;
    }
  }

}

</style>
