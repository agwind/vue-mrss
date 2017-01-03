// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import FeedsView from './components/FeedsView'
import Feed from './components/Feed'
import ArticleView from './components/ArticleView'
import About from './components/About'
import Edit from './components/Edit'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: FeedsView },
  { path: '/feed/:feed_id', name: 'feed', component: Feed },
  { path: '/article/:feed_id/:index', name: 'article', component: ArticleView},
  { path: '/about', component: About},
  { path: '/edit', component: Edit}
]

const router = new VueRouter({
  routes // short for routes: routes
})


/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
}).$mount('#app')
