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
  data () {
    return {
      hasData: false,
      loading: true,
      article: {
        title: '',
        brief: '',
        imgUrl: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80',
        tag1: '',
        tag2: '',
        tag3: '',
        content: '1'
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
        this.getdata()
      }
    }
  },
  mounted () {
    this.getdata()
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
        padding: 20px;
        width: 100%;

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
