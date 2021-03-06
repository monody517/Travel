import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import fastClick from 'fastclick' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'


import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/img/common/back/iconfont.css'
import './assets/img/home/down/iconfont.css'
import './assets/img/detail/img/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
