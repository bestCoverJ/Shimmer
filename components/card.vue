<template>
  <div class="card-box" @click="handleClick">
    <a-card hoverable>
      <img
        slot="cover"
        alt="example"
        :src="imgUrl"
        style="max-height: 450px;"
      >
      <div v-if="hasMeta" class="meta-box">
        <a-card-meta :title="title">
          <template slot="description" class="description-box">
            <p>{{ description }}</p>
            <a-space size="1">
              <a-tag color="#108ee9">
                {{ tag1 }}
              </a-tag>
              <a-tag color="#f50">
                {{ tag2 }}
              </a-tag>
              <a-tag>
                {{ tag3 }}
              </a-tag>
            </a-space>
          </template>
        </a-card-meta>
        <a-divider />
        <div class="bottom-box">
          <div class="avatar-box">
            <a-avatar :src="avatar" style="margin-right: 10px;" />
            <div class="authors-box">
              <p>{{ authors }}</p>
              <p id="signature">
                {{ signature }}
              </p>
            </div>
          </div>
          <div class="info-box">
            <a-space direction="vertical">
              <p>{{ articleDate }}</p>
              <p class="category-text">
                科技新闻
              </p>
            </a-space>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    articleId: {
      type: String,
      default: '100001'
    },
    hasMeta: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '文章标题'
    },
    imgUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80'
    },
    description: {
      type: String,
      default: '文章描述'
    },
    avatar: {
      type: String,
      default: 'https://file.coverj.com/img/avatar.jpg'
    },
    authors: {
      type: String,
      default: 'CoverJ'
    },
    signature: {
      type: String,
      default: '科技爱好者'
    },
    articleDate: {
      type: String,
      default: '2021年7月4日 14:52'
    },
    tag1: {
      type: String,
      default: ''
    },
    tag2: {
      type: String,
      default: ''
    },
    tag3: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('toArticle', this.articleId)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
.card-box {
  width: @article-width;

  @media (max-width: @mini-width) {
    width: 100%;
  }
  .meta-box {
  }
  .bottom-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p{
      font-weight: 500;
      margin: 0;

      &.category-text{
        color: #5869DA;
      }
    }

    .avatar-box{
      display: flex;
      flex-direction: row;
      align-items: center;

      .authors-box{
        #signature{
          font-weight: 400;
        }
      }
    }

    .info-box{
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: right;
    }
  }
}

</style>
