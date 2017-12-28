<template>
  <div>
    <p>Welcome to {{ msg }}</p>
    <user-list/>
  </div>
</template>

<script>
  import UserList from './UserList'

  export default {
    name: 'Welcome',
    components: {
      UserList
    },
    data () {
      return {
        msg: 'Express-Vue 👍'
      }
    }
  }
</script>
