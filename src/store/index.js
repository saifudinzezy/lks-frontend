import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null,
    isLogin: false
  },
  getters: {
    getToken: state => {
			return state.token
		},
    isLogin: state => {
      return state.isLogin
    }
  },
  mutations: {
    saveToken(state, token){
      state.token = token;
      state.isLogin = true
    },
    deleteToken(state){
      state.token = null;
      state.isLogin = false;
    },   
  },
  actions: {
    
  },
  modules: {
  }
})
