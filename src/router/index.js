import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
