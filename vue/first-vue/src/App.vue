<template>
  <div id="app">
    <MyComponent name="alperen"></MyComponent>
    <MyComponent name="bektas"></MyComponent>
  </div>
</template>

<script>

import MyComponent from "@/components/MyComponent";

export default {
  name: 'App',
  components: {
    MyComponent
  }
}

</script>

<style>
body{
  font-family: Arial;
}
</style>
