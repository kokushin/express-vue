import Vue from 'vue'
import App from './App'
import Router from './router'
import Store from './store'

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  template: '<App/>',
  components: { App }
})
