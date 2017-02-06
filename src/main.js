// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FeedsView from './components/FeedsView'
import Feed from './components/Feed'
import ArticleView from './components/ArticleView'
import About from './components/About'
import Edit from './components/Edit'
import Login from './components/Login'
import SignOut from './components/SignOut'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000'
Vue.http.options.xhr = {credentials: true}

const routes = [
  { path: '/', name: 'home', component: FeedsView },
  { path: '/feed/:feed_id/:page?', name: 'feed', component: Feed },
  { path: '/article/:feed_id/:index', name: 'article', component: ArticleView},
  { path: '/about', component: About},
  { path: '/edit', component: Edit},
  { path: '/login', component: Login},
  { path: '/signout', component: SignOut},
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes // short for routes: routes
})

router.beforeEach((to, from, next) => {
  if(data.hasauth) {
    next()
  } else {
    if (to.path != '/login' ) {
      next('/login')
    } else {
      next()
    }
  }
})

var data = {
  hasauth: false,
  username: undefined,
  password: undefined,
  feeds: [],
  articles: {}
}

Vue.material.registerTheme('default', {
  primary: {
    color: 'grey',
    hue: 800
  },
  accent: {
    hue: '300',
    color: 'indigo'
  },
  //warn: 'orange',
  background: {
    color: 'grey',
    hue: 700
  }
})

// Disabling Ripple.  Might be fixed in vue-material 0.7.x
Vue.material.inkRipple = false
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data
}).$mount('#app')
