<template>
  <div class="editor-page">
    <TitleCard title="编辑文章信息">
      标题
    </TitleCard>
    <div class="editor-box">
      <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  methods: {
    // 绑定@imgAdd event
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      const formdata = new FormData()
      formdata.append('image', $file)
      this.$axios({
        url: 'server url',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, url)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.editor-page {
  width: 100%;

  .editor-box {
    margin-top: 20px;
  }
}

</style>
