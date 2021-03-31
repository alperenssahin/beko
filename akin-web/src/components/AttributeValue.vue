<template>
  <div class="attribute-vale">
    <strong class="attribute-name">
      {{name}} :
    </strong>
    <div class="attribute-value">
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AttributeValue",
  props:{
    name:String,
    value:String
  }
}
</script>

<style scoped>
.attribute-vale{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  height: 40px;
  background-color: #ddd;
}
</style>