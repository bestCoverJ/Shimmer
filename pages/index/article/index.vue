<template>
  <div class="view-box">
    <div class="article-body">
      <a-spin :spinning="loading">
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        <a-skeleton v-if="!hasData" active />
      </a-spin>
      <a-space v-if="hasData" direction="vertical">
        <div class="article-box">
          <img :src="article.imgUrl" width="100%" />
          <div class="content-box">
            <h1>{{ article.title }}</h1>
            <h3>{{ article.brief }}</h3>
            <a-space size="1">
              <a-tag color="#108ee9">
                {{ article.tag1 }}
              </a-tag>
              <a-tag color="#f50">
                {{ article.tag2 }}
              </a-tag>
              <a-tag>
                {{ article.tag3 }}
              </a-tag>
            </a-space>
            <Author />
            <!-- <a-divider /> -->
            <mavon-editor
              v-model="article.content"
              defaultOpen="preview"
              width="100%"
              :toolbarsFlag="true"
              :subfield="false"
              :boxShadow="false"
              :toolbars="editor"
            />
          </div>
        </div>
        <div class="article-comment-box">
          <ArticleMessage />
        </div>
      </a-space>
    </div>
    <Aside />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Article',
  scrollToTop: true,
  data () {
    return {
      hasData: true,
      loading: false,
      article: {
        title: '十个提升电脑效率的小技巧',
        brief: '随着 Windows 11 操作系统的发布,大家都将目光放在了这个全新的系统上。但根据官方提供的升级需求来看，仍有一部分电脑暂时还无法满足升级条件。因此，本文推荐了十个提升电脑效率的小技巧，希望可以帮助到您。',
        imgUrl: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80',
        tag1: '趣味科技',
        tag2: '知识分享',
        tag3: '科技新闻',
        // content: ''
        content: `# h1 标题
  ## h2 标题
  ### h3 标题
  #### h4 标题
  ##### h5 标题
  ###### h6 标题

  ## 水平线

  ___

  ---

  ***

  ## 文本样式

  **This is bold text**

  __This is bold text__

  *This is italic text*

  _This is italic text_

  ~~Strikethrough~~

  ## 列表

  无序

  + Create a list by starting a line with
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet
      - Nulla volutpat aliquam velit
  + Very easy!

  有序

  1. Lorem ipsum dolor sit amet
  2. Consectetur adipiscing elit
  3. Integer molestie lorem at massa

  1. You can use sequential numbers...
1. ...or keep all the numbers as `
      },
      editor: {
        navigation: true
      }
    }
  },
  computed: {
    ...mapState('system', ['token', 'login'])
  },
  watch: {
    '$route.query.id': {
      immediate: true, // 一开始的数据也要当做一种变化
      handler (val, old) {
        console.log(val, old)
        // this.getdata()
      }
    }
  },
  mounted () {
    // this.getdata()
    // this.mockInit()
  },
  methods: {
    ...mapMutations({
      setToken: 'system/setToken'
    }),
    ...mapActions('article', ['getById']),
    async getdata () {
      scrollTo(0, 0)
      this.hasData = false
      this.loading = true
      const params = {
        id: this.$route.query.id
      }
      const res = await this.getById(params)
      if (res?.data?.code === 200) {
        this.article.title = res.data.data.title
        this.article.brief = res.data.data.brief
        this.article.tag1 = res.data.data.tag1
        this.article.tag2 = res.data.data.tag2
        this.article.tag3 = res.data.data.tag3
        this.article.content = res.data.data.content
        this.hasData = true
      } else {
        this.hasData = false
      }
      this.loading = false
    }
    // mockInit () {
    //   this.content = '古诗词。'
    // }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
.view-box{
  margin: 0 auto;
  max-width: @view-width;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .article-body{
    .article-box{
      display: flex;
      flex-direction: column;
      background-color: @nav-background-color;
      border: 1px solid @border-color;

      .content-box{
        display: flex;
        flex-direction: column;
        padding: 20px;
        // width: 100%;

        h1{
          margin-top: 20px;
        }

        h3{
          color: @description-text-color;
        }
      }
    }

    .article-comment-box{
    }
  }
}
</style>
