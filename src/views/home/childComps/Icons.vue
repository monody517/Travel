<!--  -->
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in page" :key="index">
        <div class="icon" v-for="(item, index) in page" :key="index">
          <div class="icon-img-box">
            <img class="icon-img" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: {
    iconList:{
      type: Array,
      default(){
        []
      }
    }
  },
    data() {
    return {
      swiperOption: {
        auto: false
      }
    } 
    }, 
  computed: {
    page() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
}
</script>
<style scoped>
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon-img-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.icon-img {
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
</style>