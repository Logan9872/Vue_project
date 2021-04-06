<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商场</p>
    </div>
    <div class="footer-link"></div>
    <a href="https://conding.imooc.com/class/113/html" target="_blank"
      >Vue全栈</a
    ><span>|</span>
    <a href="https://conding.imooc.com/class/113/html" target="_blank"
      >Vue全栈</a
    ><span>|</span>
    <a href="https://conding.imooc.com/class/113/html" target="_blank"
      >Vue全栈</a
    ><span>|</span>
    <a href="https://conding.imooc.com/class/113/html" target="_blank"
      >Vue全栈</a
    ><span>|</span>
    <a href="https://conding.imooc.com/class/113/html" target="_blank"
      >Vue全栈</a
    >
    <div>
      <div class="copyright">
        Copyright @2019 <span class="domain"> mi.future.com </span>All Right
        Reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang ="scss">
@import "src/api/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>