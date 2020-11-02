<!--  -->
<template>
  <div class="tab-bar">
    <div
      class="tabbar-li"
      v-for="(item, index) in list"
      :key="index"
      @click="tabclick(index)"
      :class="{ active: currentIndex === index }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CityTabbar",
  data() {
    return {
      list: ["境内", "境外.港澳台"],
      currentIndex: 0,
    };
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #00bcd4;
  padding: 0.2rem 1rem;
  color: #fff;
}
.tabbar-li {
  border-radius: 0.03rem;
  border: #fff 0.01rem solid;
  flex: 1;
  width: 50%;
  text-align: center;
  background-color: #00bcd4;
  font-size: 0.28rem;
  color: #fff;
}
.active {
  background-color: #fff;
  color: #00bcd4;
}
</style>