import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import row from '@/components/row'
import col from '@/components/col'

Vue.config.productionTip = false
Vue.use(row)
Vue.use(col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
