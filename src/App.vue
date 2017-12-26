<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome to {{ title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
