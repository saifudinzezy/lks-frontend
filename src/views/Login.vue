<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login</div>
        <!-- <div class="counter">d{{ token }} </div> -->
        <div class="card-body">
          <form  @submit.prevent="login">
            <div class="form-group">
              <label for="id_card_number">ID Card</label>
              <input type="text" class="form-control" placeholder="ID Card"  v-model="form.id_card_number">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="form.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
       form: {
          id_card_number: '',
          password: ''
      }
    }
  },
  methods: {
    saveToken(token) {
      this.$store.commit('saveToken', token)
    },
    deleteToken(){
      this.$store.commit('deleteToken')
    },
    login(){
      axios.post('http://127.0.0.1:8000/api/v1/auth/login', this.form).then(res => {
          this.form.id_card_number = ''
          this.form.password = ''
          console.log(res.data.token)
          this.saveToken(res.data.token)
          this.$router.push({ name: 'Constultation' })
      })
    },
  },
  computed: {
    token() {
      return this.$store.getters.getToken
    }
  }
}
</script>