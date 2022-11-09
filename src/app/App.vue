<template>
  <!-- 路由部署完毕 以下是Demo -->
  <div id="app">
    <!-- 重要的文件在router/index.js中 -->
   <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
//引入scss文件
@import "../scss/variable.scss";
@import "../scss/public.scss";
</style>

