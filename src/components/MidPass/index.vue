<template>
  <!-- 顶部轮播部分 -->
  <div id="app">
    <div class="Toprotation">
      <div class="login"></div>
      <div class="banner">
        <!-- <img src="../../assets/images/banner/02.jpg" alt="" /> -->
        <img src="../../assets/images/banner/01.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
/* @import "../scss/variable.scss"; */
/* @import "../../scss/public.scss"; */
.Toprotation {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}
.login {
  width: 400px;
  height: 400px;
  background-color: aquamarine;
  display: inline-block;
}
.banner {
  width: 800px;
  height: 400px;
  display: inline-block;
}
.banner img {
  width: 800px;
  height: 400px;
}
</style>
