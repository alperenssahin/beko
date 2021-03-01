<template>
  <div>
  <div @click="count++"> Beko {{count}}</div>
  <button @click="store">store data</button>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: "Beko",
  data:function (){
    return{
      count:0,
    }
  },methods:{
    store(){
     axios.post("http://127.0.0.1:3000/store",{count:this.count}).then(s=>{
       alert("success "+ s.data.status);
     }).catch(err=>{
       console.error(err)
       alert("error "+ err.message);
     })
    }
  },
  created() {
    axios.get("http://127.0.0.1:3000/count").then(s=>{
      this.count = s.data.myCount
    }).catch(err=>{
      console.error(err)
      alert("error "+ err.message);
    })
  },
}
</script>

<style scoped>

</style>