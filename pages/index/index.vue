<template>
  <div class="view-box">
    <div class="article-box">
      <div class="article-loading-box">
        <a-spin :spinning="loading">
          <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
          <a-skeleton v-if="!hasData" active />
        </a-spin>
        <a-space v-if="hasData" direction="vertical" size="large">
          <Card
            v-for="(c, index) in cardList"
            :key="index"
            :title="c.title"
            :description="c.brief"
            :img-url="c.img1"
            :tag1="c.tag1"
            :tag2="c.tag2"
            :tag3="c.tag3"
            @toArticle="toArticle(c)"
          />
        </a-space>
      </div>
    </div>
    <Aside />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      hasData: true,
      loading: false,
      cardList: [],
      card: {
        title: '十个提升电脑效率的小技巧',
        brief: '随着 Windows 11 操作系统的发布,大家都将目光放在了这个全新的系统上。但根据官方提供的升级需求来看，仍有一部分电脑暂时还无法满足升级条件。因此，本文推荐了十个提升电脑效率的小技巧，希望可以帮助到您。',
        img1: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80',
        img2: 'https://images.unsplash.com/photo-1625219447949-5203cbe4829e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        tag1: '趣味科技',
        tag2: '知识分享',
        tag3: '科技新闻'
      }
    }
  },
  mounted () {
    this.initDarkMode()
    // this.getAllArticle()
    this.mockInit()
  },
  methods: {
    ...mapActions('article', ['findAll', 'userLogout']),
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
    },
    async getAllArticle () {
      this.hasData = false
      this.loading = true
      const params = {
        current: 1,
        size: 10
      }
      const res = await this.findAll(params)
      if (res?.data?.code === 200) {
        this.cardList = res.data.data.records
        console.log(this.cardList)
        this.hasData = true
      } else {
        this.hasData = false
      }
      this.loading = false
    },
    toArticle (c) {
      this.$router.push({ path: '/article', query: { id: c.id } })
    },
    mockInit () {
      this.cardList = new Array(3).fill(this.card)
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
    position: relative;

    @media (max-width: @view-width) {
      align-items: center;
    }

    @media (max-width: @mini-width) {
      // padding: 0 20px;
      box-sizing: border-box;
      min-width: 100%;
    }

    .article-loading-box {
      width: 100%;
    }
  }

}

</style>
