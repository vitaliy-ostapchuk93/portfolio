import Vue from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'

import './registerServiceWorker'

import vuetify from './plugins/vuetify'
import i18n from './plugins/vue-i18n'

import './plugins/vue2-filters'
import './plugins/vuelidate'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
