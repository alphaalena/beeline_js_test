import 'normalize.css'
import './assets/sass/fonts.scss'
import './assets/sass/main.scss'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#chat')
