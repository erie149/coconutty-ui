import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import routes from './routes'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({routes});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');