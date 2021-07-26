<template>
  <div class="author-box">
    <div class="author-left-box">
      <img :src="author.imgUrl" />
      <div class="author-info-box">
        <p id="author-name">{{author.name}}</p>
        <p>{{author.date}}</p>
      </div>
    </div>
    <div class="soical-box">
      <a-space>
        <a-button class="btn-circle" icon="wechat" />
        <a-button class="btn-circle" icon="qq" />
        <a-button class="btn-circle" icon="weibo" />
        <a-button class="btn-circle" icon="zhihu" />
        <a-button class="btn-circle" icon="github" />
      </a-space>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    authorId: {
      type: String,
      default: '100001'
    }
  },
  data () {
    return {
      author: {
        name: 'CoverJ',
        date: '27 July 2021',
        imgUrl: 'https://file.coverj.com/img/avatar.jpg'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.author-box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;

  .author-left-box{
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
      width: 48px;
      border-radius: 50%;
    }

    .author-info-box{
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 10px;

      p{
        font-size: 14px;
        margin: 0;

        &#author-name{
          font-weight: bold;
        }
      }
    }
  }
}
</style>
