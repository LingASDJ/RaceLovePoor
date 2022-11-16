import Vue from 'vue'
import App from './app/App'
import router from '../src/router/index'  

//导入轮播图插件
import EasySlider from 'vue-easy-slider'
//初始化轮播图插件
Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: "<App/>"
})