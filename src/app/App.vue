<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <Index></Index>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import axios from "axios"
// import bootstrap from "bootstrap"
// 引入页面
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Login from "../pages/Login/login.vue";
import Index from "../components/Index/Index.vue";
export default {
  name: "App",
  //注册组件
  components: {
    Header,
    Footer,
    Index
  }
};
</script>

<style lang="scss">
/*引入scss文件*/
@import "../scss/variable.scss";
@import "../scss/public.scss";
</style>
