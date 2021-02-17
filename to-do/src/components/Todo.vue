<template>
<div class="todo-container">
  <Header :toggle-function="toggle" :is-active="inputIsActive"/>
  <div class="content-container">
    <div class="fix">
      <div class="input-container" v-if="inputIsActive">
        <label>
          Task :
          <input type="text" v-model="inputValue">
        </label>
        <Button v-if="inputValue!=='' " :click-handler="addNewTask">Add</Button>
      </div>
    </div>
    <div class="task-container">
      <Task v-for="(item,index) in  tasks" :key="index" :task-title="item" :number="index+1"/>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import Button from "@/components/Button";
import Task from "@/components/Task";
export default {
  name: "Todo",
  components: {Task, Button, Header},
  data:function (){
    return{
      inputIsActive:false,
      inputValue:"",
      tasks:[]
    }
  },
  methods:{
    toggle(){
      this.inputIsActive = !this.inputIsActive
    },
    addNewTask(){
      this.tasks.push(this.inputValue)
      this.inputValue = ""
      this.inputIsActive = false
    },
  }
}
</script>

<style scoped>
.todo-container{
  display: grid;
  align-content: start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.content-container{
  padding: 10px;
}
.content-container label{
  font-size: 25px ;
}
.content-container input{
  height: 25px;
  border: none;
  border-bottom: 2px solid orangered;
  outline: none;
  font-size: 25px;
  width: 80vw;
  margin-bottom: 10px;
}
.content-container input:focus{
  border-bottom: 2px solid cornflowerblue;
}
.fix{
  height: 100px;
}


</style>