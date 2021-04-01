<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "../components/NavFooter.vue";
import orderHeader from "../components/orderHeader.vue";
export default {
  name: "index",
  components: {
    orderHeader,
    NavFooter,
  },
};
</script>