// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Kepala from './components/include/Kepala'
import Leftmenu from './components/include/Leftmenu'
import Dashboard from './components/module/dashboard/Dashboard'
import Content from './components/module/content/Content'
import Focus from './components/module/focus/Focus'
import System from './components/module/system/System'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const global = new Vuex.Store({
  state: {
    session: {
      id: 0,
      name: 'Guest',
      group: 'Guest',
      permission: []
    }
  }
})

const routes = [
  { path: '/', component: Dashboard },
  { path: '/content', component: Content },
  { path: '/focus', component: Focus },
  { path: '/system', component: System }
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  data: {
    title: 'CMS',
    description: 'Our Content Management System In New Era'
  },
  router,
  global,
  components: {
    Kepala, Leftmenu
  }
}).$mount('#app')
