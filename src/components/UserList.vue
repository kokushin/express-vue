<template>
  <div>
    <h2>REST API test</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }}<br> {{ item.message }}</p>
      </li>
    </ul>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'UserList',
    data () {
      return {
        items: []
      }
    },
    methods: {
      getUserData () {
        axios.get('/users')
          .then((res) => {
            this.items = res.data
          })
          .catch((err) => {
            throw err
          })
      }
    },
    mounted: function () {
      this.getUserData()
    }
  }
</script>

<style scoped>
  ul {
    margin-top: 2em;
  }
</style>
