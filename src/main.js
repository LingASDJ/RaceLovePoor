import Vue from 'vue'
import App from './app/App'
import router from '../src/router/index'  
// 完整写法：./router/index.js

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})