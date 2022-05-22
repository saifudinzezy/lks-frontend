<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Vaccination</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">        
        <li class="nav-item">
          <router-link class="nav-link" to="/" v-if="isLogin">Consultation</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" v-if="!isLogin">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="isLogin">
          <button  class="nav-link" @click="deleteToken">Logout</button >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    deleteToken(){
      this.$store.commit('deleteToken')
      this.$router.push({ name: 'Login' })
    },
  },
   computed: {
    token() {
      return this.$store.getters.getToken
    },
    isLogin() {
      return this.$store.getters.isLogin
    }
  }
}
</script>