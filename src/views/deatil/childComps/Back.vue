<!--  -->
<template>
  <div>
    <div class="back">
      <i class="iconfont" @click="back">&#xe629;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Back",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.back {
  z-index: 8;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.4rem;
}
.back i {
  font-size: 0.4rem;
}
</style>