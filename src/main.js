// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Kepala from './components/include/Kepala'
import Leftmenu from './components/include/Leftmenu'
import Dashboard from './Dashboard'
import Content from './Content'
import Focus from './Focus'
import System from './System'

Vue.use(VueRouter)
Vue.use(VueResource)

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
  components: {
    Kepala, Leftmenu
  }
}).$mount('#app')
