<template>
  <div class="footer-page">
    <div class="footer-content"></div>
    <div class="footer-info">
      <div class="footer-info-box">
         <!-- <div class="blog-info"> -->
          <!-- <div class="blog-recent">
            <h3>热门文章</h3>
          </div>
          <div class="blog-tags">
            <h3>文章标签</h3>
          </div>
          <div class="blog-subscription">
            <h3>订阅注册</h3>
          </div> -->
        <!-- </div> -->
        <!-- <a-divider /> -->
        <h2>Shimmer</h2>
        <p>
          探索，发现，学习，成长。专注于前/后端及计算机知识，更有科技相关好文好物推荐。
        </p>
        <p>
          <a href="https://beian.miit.gov.cn/">鄂ICP备 17028953号</a>
          2021 Shimmer - Designed and produced by CoverJ & LHY.
          <a href="https://github.com/bestCoverJ/Shimmer"><a-icon type="github" /> Github </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
@import url("@/modify/css/global.less");
.footer-page {
  margin-top: 20px;
  padding: 20px;
  background-color: @primary-button-text-color;
  border-top: 1px solid #eaecee;

  .footer-content {
  }

  .footer-info {
    padding-bottom: 10px;

    h2 {
      font-weight: 650;
    }

    p {
      margin-bottom: 10px;
    }

    .blog-info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      grid-auto-flow: row dense;
    }

    .footer-info-box {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
