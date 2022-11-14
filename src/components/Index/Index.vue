<template>
  <!-- 顶部轮播部分 -->
  <div class="Top rotation">
    <div class="longin"></div>
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
@import "../scss/variable.scss";
@import "../scss/public.scss";
.login {
  width: 200px;
  height: 200px;
  border: 2px red solid;
}
.banner {
  width: 800px;
  height: 200px;
  border: 2px rgb(49, 210, 84) solid;
}
</style>
