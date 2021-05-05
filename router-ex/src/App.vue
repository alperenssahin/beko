<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> <br>
      <router-link to="/about">About</router-link>  <br>
      <router-link to="/beko">Beko</router-link>
    </div>
    <div class="content-area">
      <router-view/>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: auto 1fr;
}
.content-area{
  background-color: lightpink;
}
#nav {
  padding: 30px;
  background-color: orange;
  height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
