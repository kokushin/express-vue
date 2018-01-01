import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import UserList from '../components/UserList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
