<template>
  <div class="title-card" :style="cardStyle">
    <div class="title-bar">
      <div class="decorate-bar"></div>
      <h3>{{title}}</h3>
    </div>
    <div class="content-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleCard',
  props: {
    title: {
      type: String,
      default: '卡片标题'
    },
    cardStyle: {
      type: Object,
      default: () => {
        return {
          width: '100%'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.title-card {
  border: @border-bottom;
  background-color: @nav-background-color;
  .title-bar {
    position: relative;
    line-height: 42px;
    border-bottom: @border-bottom;

    h3 {
      margin-left: 28px;
      margin-bottom: 0;
    }

    .decorate-bar {
      position: absolute;
      height: 32px;
      width: 2px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      background-color: @primary-color;
    }
  }

  .content-box {
    padding: 20px;
  }
}
</style>
