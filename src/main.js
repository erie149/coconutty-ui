import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)
const router = new VueRouter({routes});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');