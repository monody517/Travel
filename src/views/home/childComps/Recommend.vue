<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="(item, index) in RecommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    RecommendList: {
      type: Array,
      default() {
        [];
      },
    },
  },
};
</script>
<style scoped>
.recommend-title {
  line-height: 0.8rem;
  background-color: #eee;
}
.item {
  height: 1.9rem;
  display: flex;
  overflow: hidden;
}
.item-img {
  height: 1.7rem;
  width: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  flex: 1;
  padding: 0.1rem;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
}
.item-button {
  margin-top: 0.2rem;
  padding: 0.1rem;
  border-radius: 0.06rem;
  background-color: #ff9300;
  color: #fff;
  font-size: 0.2rem;
}
</style>