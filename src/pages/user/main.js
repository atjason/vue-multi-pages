import Vue from 'vue'
import App from './user.vue'
import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
