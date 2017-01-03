<template>
<h2 class="md-title">
  <span @click="onNavChange({ title: '', link: undefined })"><router-link to="/">mRSS</router-link></span>
  <span v-if="typeof nav.link !== 'undefined'"> -
    <router-link :to="{ name: nav.link.name, params: nav.link.params }">{{ nav.title }}</router-link>
  </span>
</h2>
</template>

<script>
import bus from '../bus'

export default {
  name: 'topnav',
  created() {
    bus.$on('set-nav',this.onNavChange)
  },
  methods: {
    onNavChange (nav) {
      this.nav = nav
    }
  },
  data () {
    return {
      nav: {
        title: '',
        link: undefined
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
