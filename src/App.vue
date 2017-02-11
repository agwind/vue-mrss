<template>
   <div id="app">
	  <md-toolbar>
	    <md-button class="md-icon-button" @click="toggleLeftSidenav">
	      <md-icon>menu</md-icon>
	    </md-button>
	    <topnav></topnav>
	  </md-toolbar>
    <md-layout md-gutter>
      <md-layout md-flex md-flex="10" md-hide-small md-hide-xsmall></md-layout>
      <md-layout>
	       <router-view><router-view>
      </md-layout>
      <md-layout md-flex md-flex="10" md-hide-small md-hide-xsmall></md-layout>
    </md-layout>
    <md-sidenav class="md-left" ref="leftSidenav" >
    <settings v-on:clicknav="closeLeftSidenav"></settings>
    </md-sidenav>
	</div>
</template>

<script>
import Settings from './components/Settings'
import TopNav from './components/TopNav'
export default {
  name: 'app',
  components: {
     'settings': Settings,
     'topnav': TopNav
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
    },
  },
}
</script>

<style>

.textcontainer {
  margin: 20px;
}

.navview {
  margin: 20px;
}

#navnext, .on-the-right {
  /* position: absolute; */
  float: right;
  clear: both;
}

#navnext {
  margin-top: 3px;
  margin-bottom: 3px;
}

.md-list {
  width: 100%;
}
</style>
