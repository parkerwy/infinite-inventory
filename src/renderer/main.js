import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    secondary: colors.grey.darken1,
    accent: colors.yellow.base
  }
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
