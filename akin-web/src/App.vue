<template>
  <div id="app">
    <div id="nav" :lang="$store.state.currentLanguage">
      <router-link to="/">{{$store.getters.getLangItem("home")}}</router-link> |
      <router-link to="/about">{{$store.getters.getLangItem("about")}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
