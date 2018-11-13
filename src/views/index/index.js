import Vue from 'Vue'
import index from './index.vue'
import '@/main'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
//   router,
  render: h => h(index)
})