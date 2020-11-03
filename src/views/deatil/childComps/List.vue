<template>
  <div>
    <div class="items" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <i class="item-title-icon"></i>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <List :list="item.children"></List>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default() {
        [];
      },
    },
  },
};
</script>

<style scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.2rem;
  padding: 0.2rem;
  border-bottom: 0.01rem solid #bbbbbb;
}
.item-title-icon {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
    no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}
.item-children {
  padding: 0 0.2rem;
}
</style>