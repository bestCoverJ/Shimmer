<template>
  <div class="recent-article-box">
    <div class="recent-article-describe">
      <h3>{{article.title}}</h3>
      <a-space size="1">
        <a-tag color="#108ee9">
          科技新闻
        </a-tag>
        <a-tag color="#f50">
          好物评测
        </a-tag>
      </a-space>
      <p>{{article.abstract}}</p>
    </div>
    <div class="recent-article-img">
      <img :src="article.imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentArticle',
  props: {
    articleId: {
      type: String,
      default: '100001'
    }
  },
  data () {
    return {
      article: {
        title: '小米无线蓝牙耳机Air2 SE——性价比背后的妥协之作',
        abstract: '23 May 2021',
        imgUrl: 'https://images.pexels.com/photos/8858287/pexels-photo-8858287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.recent-article-box{
  color: @text-color;
  background-color: @nav-background-color;
  border: 1px solid @border-color;
  padding: 20px;
  max-width: @aside-width;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 1fr;

  .recent-article-describe{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    p{
      color: @description-text-color;
      margin: 5px 0 0 0;
    }
  }

  .recent-article-img{
    img{
      border-radius: 4px;
      width: 100%;
    }
  }
}
</style>
