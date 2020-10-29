<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-title">周末游</div>
    <ul>
      <li class="item" v-for="(item,index) in WeekendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Week",
  props: {
    WeekendList: {
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
.item-img-wrapper{
    height: 0;
    padding-bottom: 37.09%;
    overflow: hidden;
}
.item-img{
    width: 100%;
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
</style>