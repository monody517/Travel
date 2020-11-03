<!--  -->
<template>
  <div>
    <div class="header">
      <i class="iconfont" @click="back">&#xe629;</i>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    back() {
      this.$router.replace("/");
    },
  },
};
</script>
<style scoped>
.header {
  height: 0.68rem;
  line-height: 0.68rem;
  text-align: center;
  background-color: #00bcd4;
  color: #fff;
  font-size: 0.32rem;
}

.header i {
  width: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  font-size: 0.36rem;
}
</style>