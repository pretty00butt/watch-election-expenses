import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')
