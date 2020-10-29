<!--  -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in SwiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    SwiperList: {
      type: Array,
      default() {
        [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
      },
    };
  },
};
</script>
<style scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
.swiper-img {
  width: 100%;
}
</style>