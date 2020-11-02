<!--  -->
<template>
  <div class="header">
    <div class="left">
      <i class="iconfont" @click="back">&#xe629;</i>
    </div>
    <input v-model="keyword" type="text" value="输入城市/景点/游玩主题" />
    <div class="search-content">
      <ul>
        <li
          class="search-item"
          v-for="(item, index) in this.list"
          :key="index"
          v-show="keyword"
          @click="buttomclick(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  props: {
    cities: {
      type: Object,
      default() {
        {
        }
      },
    },
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  methods: {
    back() {
      this.$router.replace("/");
    },
    buttomclick(city) {
      this.$store.dispatch("citychange", city);
      this.$router.push('/')
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
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

.header input {
  width: 70%;
  border-radius: 0.1rem;
  text-align: center;
}
.search-content {
  position: relative;
  background-color: #fff;
  width: 100%;
  z-index: 2;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  border-bottom: solid 0.02rem #ccc;
}
</style>