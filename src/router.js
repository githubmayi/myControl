import Vue from 'vue'
import Router from 'vue-router'
import View from './views/view.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: View
    },
  ]
})
