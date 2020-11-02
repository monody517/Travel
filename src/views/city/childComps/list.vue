<!--  -->
<template>
  <div class="list">
    <div class="title">当前城市</div>
    <div class="buttom">
      <p>{{ this.$store.state.city }}</p>
    </div>
    <div class="title">热门城市</div>
    <div class="buttonlist">
      <div
        class="buttonwrapper"
        v-for="(item, index) in hotCities"
        :key="index"
        @click="buttomclick(item.name)"
      >
        <div class="citybutton">{{ item.name }}</div>
      </div>
    </div>
    <div class="area" v-for="(item, keys) in cities" :key="keys" :ref="keys">
      <div class="title">{{ keys }}</div>
      <div class="item-list">
        <div
          class="item"
          v-for="(innerItem, index) in item"
          :key="index"
          @click="buttomclick(innerItem.name)"
        >
          {{ innerItem.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCities: {
      type: Array,
      default() {
        [];
      },
    },
    cities: {
      type: Object,
      default() {
        {
        }
      },
    },
    alphabetkey: {
      type: String,
      default() {
        "";
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    buttomclick(city) {
      this.$store.dispatch("citychange", city);
      this.$router.push("/");
    },
  },
  watch: {
    alphabetkey() {
      if (this.alphabetkey) {
        const element = this.$refs[this.alphabetkey][0];
        this.$emit("getelement", element);
      }
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 0.24rem;
  padding: 0.24rem 0.3rem;
  background-color: #eee;
}
.buttom {
  position: relative;
  width: 32.8%;
  padding-bottom: 10.5%;
  border-right: solid 0.02rem #ccc;
}
.buttom p {
  position: absolute;
  top: 40%;
  left: 40%;
}
.buttonlist {
  overflow: hidden;
}
.buttonwrapper {
  position: relative;
  float: left;
  width: 32.8%;
  padding-bottom: 10.5%;
  border: solid 0.02rem #ccc;
}
.citybutton {
  position: absolute;
  top: 40%;
  left: 40%;
  color: #212121;
  font-size: 0.28rem;
}
.item {
  line-height: 0.76rem;
  color: #666;
  padding-left: 0.2rem;
  border-bottom: solid #ccc 0.01rem;
}
</style>