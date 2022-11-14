<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios"
// import bootstrap from "bootstrap"
// 引入页面
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
// import Login  from "../pages/Login/login.vue";
export default {
  name: "App",
  //注册组件
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
/*引入scss文件*/
@import "../scss/variable.scss";
@import "../scss/public.scss";
</style>
