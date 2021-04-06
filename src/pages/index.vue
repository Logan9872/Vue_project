<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slider></swiper-slider>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar.vue";
import { swiper, SwiperSlider } from "vue-awsome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    ServiceBar,
    swiper,
    SwiperSlider,
  },
  data() {
    return {
      swiperOption: {},
    };
  },
};
</script>