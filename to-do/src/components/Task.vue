<template>
<div class="task-container">
  <div>
    {{number}} - {{taskTitle}}
  </div>
</div>
</template>

<script>
export default {
  name: "Task",
  props:{
    taskTitle:String,
    number:Number,
  }
}
</script>

<style scoped>
.task-container{
  display: grid;
  align-content: center;
  background-color: deeppink;
  color: whitesmoke;
  height: 40px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 10px;
  padding-left: 10px;
}
</style>