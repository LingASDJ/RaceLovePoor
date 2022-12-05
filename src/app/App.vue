<template>
  <div id="app">

    <Top></Top>
    <Header></Header>
    <Index></Index>
    <Footer></Footer>
    <!--页面约束-->
    <div  v-show="isHide">
      <Login></Login>
    </div>



    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import axios from "axios"
// import bootstrap from "bootstrap"
// 引入页面

import Top from"../components/Top/index";
import Header from "../components/Header/index";
import Index from "../components/MidPass/index";
import Footer from "../components/Footer/index";
import Login from "../pages/Login/login";
// import Login  from "../pages/Login/login.vue";

export default {
  name: "App",
  //注册组件
  components: {

    Login,
    Top,
    Header,
    Index,
    Footer,
  },
  computed: {
    //约束页面
    isHide() {
      return (this.$route.path === "/login");
    }
  },

};
</script>

<style lang="scss">
/*引入scss文件*/
@import "../scss/variable.scss";
@import "../scss/public.scss";
</style>
