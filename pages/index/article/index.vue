<template>
  <div class="view-box">
    <div class="article-body">
      <a-space direction="vertical">
        <div class="article-box">
          <img :src="article.imgUrl" width="100%" />
          <div class="content-box">
            <h1>{{article.title}}</h1>
            <h3>{{article.description}}</h3>
            <a-space size="1">
              <a-tag color="#108ee9">
                科技新闻
              </a-tag>
              <a-tag color="#f50">
                好物评测
              </a-tag>
              <a-tag>
                无线耳机
              </a-tag>
              <a-tag>
                小米
              </a-tag>
              <a-tag>
                {{login}}
              </a-tag>
            </a-space>
            <Author />
            <!-- <a-divider /> -->
            <mavon-editor
              v-model="handbook"
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Article',
  props: {
    articleId: {
      type: String,
      default: '100001'
    }
  },
  computed: {
    ...mapState('system', ['token', 'login'])
  },
  data () {
    return {
      article: {
        title: '小米无线蓝牙耳机Air2 SE——性价比背后的妥协之作',
        description: '近期，小米商城上架了新款无线蓝牙耳机Air2 SE，相较于Air2S，售价由399元降低至169元，同时阉割了无线充电和LHDC音频解码功能。在续航上，由Air 2的总计14小时提升至20小时。外观方面，在更换了耳机盒以外，耳机柄变得略为细长，无线充电触点也做了相应的改变。',
        imgUrl: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80'
      },
      handbook: '',
      editor: {
        navigation: true
      }
    }
  },
  methods: {
    ...mapMutations({
      setToken: 'system/setToken'
    }),
    getdata () {
      const data = '耳机一直是很多人的强需求，而以目前的形势来看，配备耳机孔的手机将会越来越少。无线蓝牙耳机应运而生，没有线材的缠绕，随拿随听的方便方式，使得大多数人选择了无线蓝牙耳机。抛开配合iPhone极佳的airpods，安卓阵营的无线蓝牙耳机则是层出不穷。入耳式，半入耳式，头戴式等各种样式多种多样，售价也是从百元到千元不等。有人说，选择安卓就是选择了多样性。今天，我们的主角是一款由小米发布的半入耳式无线蓝牙耳机——小米无线蓝牙耳机Air2 SE（下文简称air2SE）。'
      return data.toString()
    }
  },
  mounted () {
    this.handbook = this.getdata()
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
