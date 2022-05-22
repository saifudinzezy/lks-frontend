<template>
  <div>
    <div>
        <div class="col-md-4 offset-md-10">
          <router-link class="btn btn-primary" to="/request">Request Consultation</router-link>
        </div>
    </div>
    <table class="table">
    <thead class="thead-light">
      <tr> 
        <th scope="col">Status</th>
        <th scope="col">Disease History</th>
        <th scope="col">Current Symtoms</th>  
        <th scope="col">Doctor Name</th>
        <th scope="col">Doctor Note</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isConsultation"> 
        <td>{{consultation.status}}</td>
        <td>{{consultation.disease_history}}</td>
        <td>{{consultation.current_symptoms}}</td>
        <td>{{consultation.doctor.name}}</td>
        <td>{{consultation.doctor_notes}}</td>
      </tr>
      <tr v-else> 
        <td></td>
        <td></td>
        <td>Data Kosong!</td>
        <td></td>
        <td></td>
      </tr>    
    </tbody>
  </table>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            consultation: {},
            isConsultation: false,
            login: false
        }
    },
    mounted() {
      this.load()
    },
    methods: {
      load(){
        let key_token = this.$store.getters.getToken;      
        axios
            .get('http://127.0.0.1:8000/api/v1/consultations?token='+key_token)
            .then(response => {
              console.log(response.data);
              this.consultation = response.data.consultation;
              this.isConsultation = true;
        });
      }
    },
    created() {
      if(!this.$store.getters.isLogin){
        this.$router.push({ name: 'Login' })
      }
    },   
}
</script>