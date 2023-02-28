<template>
  <div class="recent-message">
    <a-comment>
      <template slot="actions">
        <span key="comment-basic-like">
          <a-tooltip title="Like">
            <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ likes }}
          </span>
        </span>
        <span key="comment-basic-dislike">
          <a-tooltip title="Dislike">
            <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
            />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ dislikes }}
          </span>
        </span>
      </template>
      <a slot="author">CoverJ</a>
      <a-avatar
        slot="avatar"
        src="https://sns-img-hw.xhscdn.com/5363a7ec-7ac8-ab64-bd73-fde5e1fed74f?imageView2/2/w/1600/format/webp"
        alt="CoverJ"
      />
      <p slot="content">
        {{ message.content }}
      </p>
      <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().fromNow() }}</span>
      </a-tooltip>
    </a-comment>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'RecentMessage',
  props: {
    messageId: {
      type: String,
      default: '100001'
    }
  },
  data () {
    return {
      message: {
        content: '前程似锦，未来可期'
      },
      likes: 0,
      dislikes: 0,
      action: null,
      moment
    }
  },
  methods: {
    like () {
      this.likes = 1
      this.dislikes = 0
      this.action = 'liked'
    },
    dislike () {
      this.likes = 0
      this.dislikes = 1
      this.action = 'disliked'
    },
    getdata () {
      if (this.messageId === '100001') {
        this.message.content = '前程似锦，未来可期。'
      }
      if (this.messageId === '100002') {
        this.message.content = '愿你走出半生，归来仍是少年。'
      }
      if (this.messageId === '100003') {
        this.message.content = '希望你站在自己热爱的世界中闪闪发光！'
      }
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.recent-message{
  width: @aside-width;
  background-color: @nav-background-color;
  border: 1px solid @border-color;
  padding: 20px 20px 0 20px;

  .ant-comment{
    &/deep/.ant-comment-inner{
      padding: 0;
    }
  }
}
</style>
