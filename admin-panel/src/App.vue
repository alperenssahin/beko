<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

import app from "@/firebase.js"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {

  },created() {
    app.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.commit("setAuthenticate",true);
      }else{
        if (!this.$store.state.isAuthenticate){
          if(this.$router.currentRoute.path !== "/login") this.$router.push("login");
        }
      }
    })
  },mounted() {
  }
}
</script>

<style>
* {
  margin: 0;
}
body{
  font-family: Helvetica;
}
</style>
