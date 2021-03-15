<template>
  <div class="home">
    home
    <div v-if="$store.state.isAuthenticate">
      Icerdesin
    </div>
    <div v-else>
      icerde degilsin
    </div>

    <button @click="signOutHandler">Signout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import app from "@/firebase.js"
export default {
  name: 'Home',
  components: {

  },methods:{
    signOutHandler(){
      app.auth().signOut().finally(()=>{
        this.$router.push("login");
      })
    }
  }
}
</script>
