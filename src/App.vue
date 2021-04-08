<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index.js";
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },

  mounted() {
    // storage.setItem("user", { a: 1 });
    storage.clear("a", "user");
  },
};
</script>
<style lang="scss">
@import " ./assets/scss/reset.scss";
</style>