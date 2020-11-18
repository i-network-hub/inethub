import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import agile from 'vue-agile'

Vue.config.productionTip = false

Vue.use(agile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
