<template>
<div class="task-container">
  <div>
    {{number}} - {{obj.text}}
  </div>
  <div>
   bitirme zamani : {{obj.time.toLocaleDateString()}} - {{obj.time.toLocaleTimeString()}}
  </div>
</div>
</template>

<script>
export default {
  name: "Task",
  props:{
    obj:Object,
    number:Number,
  }
}
</script>

<style scoped>
.task-container{
  display: grid;
  align-content: center;
  background-color: deeppink;
  grid-template-columns: 1fr auto;
  color: whitesmoke;
  height: 40px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>