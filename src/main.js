import Vue from 'vue'
import App from './app/App'
import router from '../src/router/index'  

//导入轮播图插件
import EasySlider from 'vue-easy-slider'
//初始化轮播图插件
Vue.use(EasySlider)

import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前


Vue.use(ElementUI)   //新添加3

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: "<App/>"
})