<!--  -->
<template>
  <div class="detail">
    <Back v-show="showAbs"></Back>
    <Header class="header" :style="opacityStyle"></Header>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="headershow">
      <Banner :imgs="imgs" :bannertitle="bannertitle"></Banner>
      <List :list="list"></List>
      <div class="a"></div>
    </Scroll>
  </div>
</template>

<script>
import Banner from "./childComps/Banner";
import Back from "./childComps/Back";
import Header from "./childComps/Header";
import List from "./childComps/List";
import Scroll from "../../components/scroll/Scroll";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    Banner,
    Header,
    Back,
    List,
    Scroll,
  },
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
      imgs: [],
      bannertitle: '',
      list: [
        {
          title: "",
          children: [
            {
              title: "",
              children: [
                {
                  title: "",
                },
              ],
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
      ],
    };
  },
  methods: {
    headershow(position) {
      const positionY = -position.y;
      if (positionY > 60) {
        let opacity = positionY / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        let opacity = 0;
        this.opacityStyle = { opacity };
        this.showAbs = true;
      }
    },
    getDetailData() {
      axios.get("api/detail.json").then((res) => {
        res = res.data.data;
        console.log(res);
        this.imgs = res.gallaryImgs;
        this.list = res.categoryList;
        this.bannertitle =res.sightName;
      });
    },
  },
  mounted() {
    this.getDetailData();
  },
};
</script>
<style scoped>
.detail {
  height: 100vh;
  position: relative;
}
.header {
  position: relative;
  z-index: 1;
}
.content {
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.a {
  height: 50rem;
}
</style>