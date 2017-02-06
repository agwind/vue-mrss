<template>
  <login signout="1"></login>
</template>

<script>

import Login from './Login'

export default {
  name: 'signout',
  components: {
    login: Login
  },
  created: function () {
    this.$root.$data.username = undefined
    this.$root.$data.password = undefined
    this.$root.$data.hasauth = 0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
