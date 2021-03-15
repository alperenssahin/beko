import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticate:false
  },
  mutations: {
    setAuthenticate(state,authValue){
      state.isAuthenticate = authValue
    }
  },
  actions: {
  },
  modules: {
  }
})
