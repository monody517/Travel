<!--  -->
<template>
  <div class="home">
    <Header></Header>
    <Scroll class="content" ref="scroll" :probe-type="3">
      <HomeSwiper :SwiperList="SwiperList"></HomeSwiper>
      <HomeIcons :iconList="IconList"></HomeIcons>
      <HomeRecommend :RecommendList="RecommendList"></HomeRecommend>
      <Week :WeekendList="WeekendList"></Week>
    </Scroll>
  </div>
</template>

<script>
import Header from "./childComps/Header";
import HomeSwiper from "./childComps/Swiper";
import HomeIcons from "./childComps/Icons";
import HomeRecommend from "./childComps/Recommend";
import Week from "./childComps/week";
import axios from "axios";
import { mapState } from "vuex";
import Scroll from "../../components/scroll/Scroll";

export default {
  name: "Home",
  data() {
    return {
      lastCity: "",
      SwiperList: [],
      IconList: [],
      RecommendList: [],
      WeekendList: [],
    };
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    Week,
    Scroll,
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("api/index.json?city=" + this.city).then((res) => {
        res = res.data.data;
        this.SwiperList = res.swiperList;
        this.IconList = res.iconList;
        this.RecommendList = res.recommendList;
        this.WeekendList = res.weekendList;
        console.log(res);
      });
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    console.log("a");
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: .86rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>