<template>
  <!-- 顶部轮播部分 -->
  <div class="Toprotation">
    <div class="login"></div>
    <div class="banner"></div>
  </div>
</template>

<script>
// 导出，然后在index.js中导入
export default {
  // name: "Home",
  // props: {
  //   appimg: {
  //     default: "/src/assets/images/top_phone_icon.png",
  //     type: String
  //   }
  // }
};
</script>
<style>
/* @import "../scss/variable.scss"; */
/* @import "../../scss/public.scss"; */
.Toprotation {
  width: 1200px;
  margin: 0 auto;
}
.login {
  width: 200px;
  height: 200px;
  border: 2px red solid;
  display: inline-block;
}
.banner {
  width: 800px;
  height: 200px;
  border: 2px rgb(49, 210, 84) solid;
  display: inline-block;
}
</style>
