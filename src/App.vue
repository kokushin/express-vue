<template>
  <div>
    <h1>{{ title }}</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: document.title
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #42b883;
  }
</style>
