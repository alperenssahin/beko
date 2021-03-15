<template>
  <div class="login-container">
      <label>
        Username
        <input type="text" v-model="username">
      </label>
    <br>
    <label>
      Password
      <input type="password" v-model="password">
    </label><br>

    <button @click="loginHandler">Login</button>
  </div>
</template>

<script>

import app from  "@/firebase.js"
export default {
  name: "Login",
  data(){
    return{
      password:"123456",
      username:"allperensahin@gmail.com",
    }
  },methods:{
    loginHandler(){
        app.auth().signInWithEmailAndPassword(this.username,this.password).then(user=>{
          console.log(user);
          this.$store.commit("setAuthenticate",true);
          this.$router.push("/");
        }).catch(error=>{
          console.log(error);
        })
    }
}
}
</script>

<style scoped>

</style>