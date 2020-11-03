import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Citys from '../views/city/Citys'
import Detail from '../views/deatil/Detail'

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
      name: 'Citys',
      component: Citys
    },
    {
      path:'/detail/:id',
      name: 'Detail',
      component: Detail
    },
  ]
})
