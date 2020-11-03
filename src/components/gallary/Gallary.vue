<!--  -->
<template>
  <div class="container" @click="imgclick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img
            class="gallary-img"
            :src=item>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    imgs:{
      type: Array,
      default(){
        []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        auto: false,
        observeParents: true,
        observer: true
      },
    };
  },
  methods: {
      imgclick() {
          this.$emit('close')
          console.log(this.imgs)
      }
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000
}
.wrapper {
  overflow: hidden;
  width: 100%;
}
.gallary-img {
  width: 100%;
}
.swiper-pagination{
    color: #fff;
    bottom: 1rem;
}
</style>