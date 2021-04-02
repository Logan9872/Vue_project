<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="containter">
        <div class="topbar-menu">
          <a herf="javascript:;">小米商城</a>
          <a herf="javascript: ;">MUI</a>
          <a herf="javascript: ;">云服务</a>
          <a herf="javascript: ;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a herf="javascript: ;">登录</a>
          <a herf="javascript: ;">注册</a>
          <a herf="javascript: ;" class="my-cart"
            ><sapn class="icon-cart"></sapn>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
};
</script>

<style lang ="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>