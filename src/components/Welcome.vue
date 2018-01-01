<template>
  <div>
    <p>Welcome to {{ msg }}</p>
    <h2>Vue-router test</h2>
    <router-link to="/users">REST API test</router-link>
    <h2>Vuex test</h2>
    <p><button @click="counter">count++</button> {{ $store.state.count }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Express-Vue 👍'
      }
    },
    methods: {
      counter () {
        this.$store.commit('increment')
      }
    }
  }
</script>
