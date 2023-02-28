<template>
  <div class="article-message-box">
    <h2>在这里留下您的评论...</h2>
    <a-divider></a-divider>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </a-list>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://sns-img-hw.xhscdn.com/5363a7ec-7ac8-ab64-bd73-fde5e1fed74f?imageView2/2/w/1600/format/webp"
        alt="CoverJ"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            添加评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ArticleMessage',
  props: {
    articleId: {
      type: String,
      default: '100001'
    }
  },
  data () {
    return {
      comments: [],
      submitting: false,
      value: '',
      moment
    }
  },
  methods: {
    handleSubmit () {
      if (!this.value) {
        return
      }

      this.submitting = true

      setTimeout(() => {
        this.submitting = false
        this.comments = [
          {
            author: 'CoverJ',
            avatar: 'https://sns-img-hw.xhscdn.com/5363a7ec-7ac8-ab64-bd73-fde5e1fed74f?imageView2/2/w/1600/format/webp',
            content: this.value,
            datetime: moment().fromNow()
          },
          ...this.comments
        ]
        this.value = ''
      }, 1000)
    },
    handleChange (e) {
      this.value = e.target.value
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.article-message-box{
  margin-top: 20px;
  color: @text-color;

  .ant-divider{
    margin: 5px;
  }
}
</style>
