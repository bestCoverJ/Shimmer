<template>
  <div class="footer-box">
    <div class="footer-info-box">
      <a-descriptions title="Shimmer">
        <a-descriptions-item>
          探索，发现，学习，成长。专注于前/后端及计算机知识，更有科技相关好文好物推荐。
        </a-descriptions-item>
      </a-descriptions>
      <a-divider />
      <p> 2021 Shimmer  - Designed and produced by CoverJ & LHY. <a href="http://www.beian.miit.gov.cn/">鄂ICP备 17028953号</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
.footer-box{
  margin-top: 60px;
  border-top: 1px solid #EAECEE;
  background-color: #fff;
  padding: 20px;

  .footer-info-box{
    max-width: 1200px;
    margin: 20px auto;
  }
}
</style>
