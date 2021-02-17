<template>
  <div class="header-container">
    <h1>To-do</h1>
    <Button :click-handler="toggleFunction">
      {{ isActive ? "Cancel" : "Add" }}
    </Button>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Header",
  components: {Button},
  props: {
    toggleFunction: Function,
    isActive:Boolean,
  }
}
</script>

<style scoped>
.header-container {
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  grid-template-columns:  2fr 1fr;
  background-color: orangered;
  color: whitesmoke;
  width: 100vw;
}

h1 {
  padding-left: 10px;
}


</style>