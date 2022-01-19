<template>
  <div class="nav-logo">
    <h1 class="logo">
      Shimmer
    </h1>
    <div class="option-box">
      <a-button type="link">
        <a-icon type="github" />
      </a-button>
      <a-button type="link">
        <a-icon type="question-circle" />
      </a-button>
      <a-button type="link">
        <a-icon type="setting" />
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');
  .nav-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    backdrop-filter: blur(5px);
    padding: 20px 30px;

    @media (max-width: @mobile-width) {
      padding: 15px;
    }

    h1 {
      font-weight: 600;
    }

    .option-box {
      i {
        color: @description-text-color;
      }

      @media (max-width: @mobile-width) {
        display: none;
      }
    }
  }
</style>
