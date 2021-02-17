<template>
  <div id="app">
    <Todo></Todo>
  </div>
</template>

<script>

import Todo from "@/components/Todo";
export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
