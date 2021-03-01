<template>
  <div class="button"
       role="button"
       tabindex="0" @click="clickHandler" @keypress.enter="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props:{
    clickHandler:Function,
  }
}
</script>

<style scoped>
.button {
  font-size: 30px;
  padding: 3px;
  background-color: whitesmoke;
  color: orangered;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: orangered;
  color: whitesmoke;
}
</style>