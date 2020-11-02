<!--  -->
<template>
  <div class="city">
    <CityHeader :cities="cities"></CityHeader>
    <CityTabbar></CityTabbar>
    <Scroll class="content" ref="scroll" :probe-type="3">
      <CityList 
      :hotCities="hotCities" 
      :cities="cities" 
      :alphabetkey="alphabetkey"
      @getelement="getelement"></CityList>
    </Scroll>
    <CityAlphabet :cities="cities" @alphabetchange="alphabetchange"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from "./childComps/Header";
import CityTabbar from "./childComps/TabBar";
import CityList from "./childComps/list";
import CityAlphabet from "./childComps/Alphabet";

import axios from "axios";
import Scroll from "../../components/scroll/Scroll";
export default {
  name: "Citys",
  components: {
    CityHeader,
    CityTabbar,
    CityList,
    CityAlphabet,
    Scroll,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      alphabetkey: ''
    }
  },
  mounted() {
    this.getCityInfo();
    this.$refs.scroll.refresh();
  },
  methods: {
    alphabetchange(alphabetkey){
      this.alphabetkey = alphabetkey
    },
    getelement(element) {
      this.$refs.scroll.scrollToElement(element)
    },
    getCityInfo() {
      axios.get("api/city.json").then((res) => {
        res = res.data.data;
        this.hotCities = res.hotCities;
        this.cities = res.cities;
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
 * { touch-action: pan-y; } 
.city {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 1.4rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>