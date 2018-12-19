import Vue from 'vue'
import '~/plugins/axios'
import '~/plugins/vuetify'
import i18n from './plugins/i18n'
import App from './App.vue'
import router from '~/router'
import store from '~/store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
