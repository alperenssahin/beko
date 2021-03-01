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
        <label v-if="inputValue !== ''">
          Time :
          <input type="datetime-local" v-model="time">
        </label>
        {{time}}
        <Button v-if="inputValue!=='' " :click-handler="addNewTask">Add</Button>
      </div>
    </div>
    <div class="task-container">
      <Task v-for="(item,index) in  tasks" :key="index" :obj="item" :number="index+1"/>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import Button from "@/components/Button";
import Task from "@/components/Task";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "Todo",
  components: {Task, Button, Header},
  data:function (){
    return{
      inputIsActive:false,
      inputValue:"",
      tasks:[],
      time:""
    }
  },
  methods:{
    toggle(){
      this.inputIsActive = !this.inputIsActive
    },
    addNewTask(){
      let obj = {
        text: this.inputValue,
        time: new Date(this.time),
        isDone:false,
        uuid: uuidv4()
      }
      this.tasks.push(obj)
      this.tasks.sort((a, b) => a.time.getTime() - b.time.getTime())
      this.inputValue = ""
      this.time = ""
      this.inputIsActive = false
    },
    mSort(){
      return
    }
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
  height: 200px;
}


</style>