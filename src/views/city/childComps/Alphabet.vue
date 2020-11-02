<!--  -->
<template>
  <ul class="list">
    <li 
    class="item" 
    v-for="(item,key) in cities" 
    :key="key"
    :class="{active: CurrectKey === key}"
    @click="change(key)">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities:{
      type: Object,
      default() {
        {}
      },
    }
  },
  data() {
    return {
        CurrectKey: 'A',
    };
  },
  methods: {
      change(key) {
        this.CurrectKey = key
        this.$emit('alphabetchange',key)
      },
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.54rem;
  right: 0;
  bottom: 0;
  color: #00bcd4;
}
.item {
  text-align: center;
  line-height: 0.4rem;
}
.active{
    background-color: #00bcd4;
    color: #fff;
}
</style>