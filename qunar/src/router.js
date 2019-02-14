import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/list.vue'
import Home from '@/pages/home/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // component: () => import(/* webpackChunkName: "about" */ '@/pages/home/home.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
