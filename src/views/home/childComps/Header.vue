<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe629;</i>
    </div>
    <div class="header-input">
      <div class="iconfont">&#xe610;输入城市/景点/游玩主题</div>
    </div>
    <div class="header-right">
      <div class="iconfont">城市&#xe627;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: #00bcd4;
}

.header-left {
  text-align: center;
  width: 0.64rem;
  color: #fff;
}

.header-input {
  color:#555555;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  height: 0.64rem;
  line-height: 0.64rem;
  background-color: #fff;
  flex: 1;
  text-align: center;
}

.header-right {
  text-align: center;
  color: #fff;
  width: 1.24rem;
}
</style>