<template>
  <div class="my-component">
    <h1>Hello {{name}} counter</h1>
    <div>counter : {{count}} </div>
    <div v-if="count > 10">Counter 10'dan buyuk</div>

    <div v-else>Counter 10'dan kucuk veya esit</div>

    <div v-if="isBig">isBig</div>

    <div>{{isBig ? "big" : "notBig"}}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props:{
    name:String
  },
  data:function (){
    return{
      count:0,
      isBig:false
    }
  },methods:{
    add(){
      this.count++;
      this.isBig = this.count > 10;
    },
    sub(){
      if(this.count > 0){
        this.count--;
        this.isBig = this.count > 10;
      }
    }
  }
}
</script>

<style scoped>

</style>