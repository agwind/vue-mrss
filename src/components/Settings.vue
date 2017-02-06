<template>
  <div class="phone-viewport">
   <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Settings</h3>
      </div>
    </md-toolbar>
  <md-list>
    <md-list-item @click="clickNav">
      <router-link to="/edit">
        <md-icon>edit</md-icon> <span>Edit Feeds</span>
     </router-link>
    </md-list-item>

    <md-list-item @click="clickNav">
      <router-link to="/about">
        <md-icon>info</md-icon> <span>About</span>
      </router-link>
    </md-list-item>

    <md-list-item @click="clickNav">
      <router-link to="/signout">
        <md-icon>highlight_off</md-icon> <span>Sign Out</span>
      </router-link>
    </md-list-item>
</md-list>
</div>
</template>

<script>
export default {
  name: 'settings',
  methods: {
    clickNav () {
      this.$emit('clicknav')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
