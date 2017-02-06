<template>
  <md-layout md-align="center" md-gutter>
    <md-layout md-column md-flex-xsmall="80" md-flex-small="60" md-flex="33">
      <md-layout md-align="center">
        <div v-if="signout" class="info-message">
          You have successfully signed out.
        </div>
      </md-layout>
      <md-layout md-align="center">
        <md-input-container class="login-input">
          <label>Username</label>
          <md-input placeholder="Username" v-model="username"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout md-align="center">
        <md-input-container class="login-input">
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout md-align="center">
        <md-button class="md-raised md-primary" @click="login()">Login</md-button>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'login',
  props: [ 'signout' ],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('Setting Headers')
      Vue.http.headers.common['Authorization'] = 'Basic ' + window.btoa( this.username + ':' + this.password);
      console.log('Headers: ',this.$http.headers)
      this.$root.$data.username = this.username
      this.$root.$data.password = this.password
      this.$root.$data.hasauth = 1
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-input {
  max-width: 300px;
}
.info-message {
  background-color: rgba(33, 150, 243, 0.12);
  padding: 12px 16px 12px 16px;
  margin: 20px;
}
</style>
