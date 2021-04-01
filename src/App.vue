<template>
  <div id="app">
    <router-hand></router-hand>
    <router-view></router-view>
    <router-foot></router-foot>
  </div>
</template>

<script>
import storage from "./storage ";
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {
    storage.setItem("user", { a: 1 });
  },
};
</script>
