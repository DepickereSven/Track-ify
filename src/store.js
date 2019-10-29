import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: null
  },
  // plugins: [createPersistedState({
  //   paths: ["voted"]
  // })],
  mutations: {
    updateLogin (state, newLogin) {
      state.login = newLogin
    }
  },
  actions: {},
  modules: {}
})
