<template>
  <div id="app">
    <form @submit.prevent="add">
      <div class="form-group row">
        <label for="disease_history" class="col-sm-2 col-form-label">Disease History</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Disease History" v-model="form.disease_history">
        </div>
      </div>
      <div class="form-group row mt-2">
        <label for="current_symptoms" class="col-sm-2 col-form-label">Current Symptoms</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Current Symptoms" v-model="form.current_symptoms">
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-2">Send Request</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
       form: {
          disease_history: '',
          current_symptoms: ''
      }
    }
  },
  methods: {
    token() {
      return this.$store.getters.getToken
    },
    isLogin() {
      return this.$store.getters.isLogin
    },
    add(){
      let key_token = this.$store.getters.getToken;
      axios.post('http://127.0.0.1:8000/api/v1/consultations?token='+key_token, this.form).then(res => {
          this.form.disease_history = ''
          this.form.current_symptoms = ''
          console.log(res);
          this.$router.push({ name: 'Constultation' })
      })
    },
  },
}
</script>