<template>
  <div class="card-box" @click="push()">
    <a-card hoverable >
      <img
        slot="cover"
        alt="example"
        :src="imgUrl"
        style="max-height: 450px;"
      />
      <div class="meta-box" v-if="hasMeta">
        <a-card-meta :title="title">
          <template slot="description">
            {{description}}
          </template>
        </a-card-meta>
        <a-divider />
        <div class="bottom-box">
          <div class="avatar-box">
            <a-avatar :src="avatar" style="margin-right: 10px;"/>
              <div class="authors-box">
                <p>{{authors}}</p>
                <p id="signature">{{Signature}}</p>
              </div>
          </div>
          <div class="info-box">
            <a-space direction="horizontal">
              <p>{{articleDate}}</p>
              <p class="category-text">科技新闻</p>
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
    Signature: {
      type: String,
      default: '科技爱好者'
    },
    articleDate: {
      type: String,
      default: '2021年7月4日 14:52'
    }
  },
  methods: {
    push () {
      this.$message.info('点击了文章' + this.articleId)
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="less" scoped>
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

</style>
