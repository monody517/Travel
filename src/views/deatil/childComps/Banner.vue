<!--  -->
<template>
  <div class="banner">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      @click="imgclick"
    />
    <FadeAnimation>
      <Gallary v-show="showImgs" :imgs="imgs" @close="close"></Gallary>
    </FadeAnimation>
    <div class="banner-info">
      <div class="banner-title">{{ bannertitle }}</div>
      <div class="banner-number">
        <i class="iconfont">&#xe600;</i>
        {{ imgs.length }}
      </div>
    </div>
  </div>
</template>

<script>
import Gallary from "../../../components/gallary/Gallary";
import FadeAnimation from "../../../components/fade/FadeAnimation";
import axios from "axios";
export default {
  name: "Banner",
  components: {
    Gallary,
    FadeAnimation,
  },
  data() {
    return {
      showImgs: false,
    };
  },
  props: {
    imgs: {
      type: Array,
      default() {
        [];
      },
    },
    bannertitle: {
      type: String,
      default() {
        "";
      },
    },
  },
  methods: {
    close() {
      this.showImgs = false;
    },
    imgclick() {
      this.showImgs = true;
    },
  },
};
</script>
<style scoped>
.banner {
  z-index: 1;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner-title {
  flex: 1;
  font-size: 0.32rem;
  padding: 0.2rem;
}
.banner-number {
  margin-top: 0.14rem;
  margin-right: 0.14rem;
  padding: 0.2rem;
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.32rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}
</style>