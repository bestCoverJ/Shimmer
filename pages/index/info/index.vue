<template>
  <div class="info-page">
    <div class="info-top">
      <div class="img-box"></div>
      <div class="user-box">
        <div class="user-info">
          <div class="avatar-box"></div>
          <div class="user-info-box">
            <a-space size="middle">
              <h2>CoverJ</h2>
              <p>科技爱好者</p>
            </a-space>
            <a-space>
              <a-icon type="shopping" theme="filled" />
              <p>计算机软件</p>
            </a-space>
            <a-space>
              <a-icon type="contacts" theme="filled" />
              <p>武汉华夏理工学院</p>
            </a-space>
          </div>
        </div>
        <div class="user-button">
          <a-button class="btn-border">编辑个人资料</a-button>
        </div>
      </div>
    </div>
    <div class="info-content">
      <div class="tab-box">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="动态">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="文章" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="专栏">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
    <titleCard>
    </titleCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {}
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/modify/css/global.less');

.info-page {
  width: 100%;

  .info-top {
    margin-bottom: 20px;
    border: @border-bottom;

    .img-box {
      height: 160px;
      background-image: url("https://images.unsplash.com/photo-1547628641-ec2098bb5812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
      background-position: 40% center;
    }

    .user-box {
      height: 120px;
      padding: 16px 40px;
      background-color: @nav-background-color;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .user-info {
        display: flex;
        flex-direction: row;

        .avatar-box {
          width: 128px;
          height: 128px;
          background: url(https://file.coverj.com/img/avatar.jpg) no-repeat center top;
          background-size: 100%;
          transform: translateY(-30%);
          border: 2px solid @nav-background-color;
          border-radius: 4px;
        }

        .user-info-box {
          margin-left: 20px;
          display: flex;
          flex-direction: column;

          p {
            margin-bottom: 8px;
          }

          .ant-space {
            align-items: baseline;

            h2 {
              font-weight: 650;
              margin-bottom: 8px;
            }
          }
        }
      }

      .user-button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        @media (max-width: 700px) {
          display: none;
        }
      }
    }
  }

  .info-content {
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }

    .tab-box {
      border: @border-bottom;
      background-color: @nav-background-color;
      padding: 0 10px 10px 10px;
    }
  }
}

</style>
