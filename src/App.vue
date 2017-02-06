<template>
   <div class="phone-viewport" id="app">
	  <md-toolbar>
	    <md-button class="md-icon-button" @click="toggleLeftSidenav">
	      <md-icon>menu</md-icon>
	    </md-button>
	    <topnav></topnav>
	  </md-toolbar>
    <div>
	  <router-view><router-view>
    </div>
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
  position: absolute;
  float: right;
  right: 20px;
}

</style>
