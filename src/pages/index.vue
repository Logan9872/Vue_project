<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slider v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product' + item.id"
              ><img v-bind:src="item.img"
            /></a>
          </swiper-slider>
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
import { swiper, SwiperSlider } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
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
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slider-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slider-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slider-3.jpg",
        },
        {
          id: "42",
          img: "/imgs/slider/slider-4.jpg",
        },
        {
          id: "42",
          img: "/imgs/slider/slider-5.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>