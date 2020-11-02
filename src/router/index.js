import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Citys from '../views/city/Citys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/citys',
      name: 'citys',
      component: Citys
    },
  ]
})
