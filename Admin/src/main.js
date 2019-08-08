// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrapvue from 'bootstrap-vue'
import vuetify from 'vuetify'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/es/components/modal/modal'
import 'bootstrap-vue/es/directives/modal/modal'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import product from '@/components/product'

Vue.component('App_product', product)
Vue.component('icon', Icon)
Vue.use(bootstrapvue)
Vue.use(vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
