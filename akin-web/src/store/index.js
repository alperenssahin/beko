import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLanguage: localStorage.getItem("language") || "tr",
    language:{
      tr:{
        home : "Ana sayfa",
        about: "Hakkinda"
      },
      en:{
        home : "Home",
        about: "About",
      }
    }
  },
  mutations: {
  },
  actions: {

  },
  getters:{
    getLangItem:(state) => (key) => {
      return state.language[state.currentLanguage][key]
    }
  },
  modules: {
  }
})
