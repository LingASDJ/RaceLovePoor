<template>
  <!-- 顶部轮播部分 -->
  <div id="app">
    <div class="Toprotation">
      <div class="login">
        <div class="content">
          <img class="tx" src="../../assets/images/login-png/头像.png" alt="" />
          <h2>Hi! 你好</h2>
          <div class="button">
            <button class="login1">登录</button>
            <button class="register1">注册</button>
          </div>
          <div class="tbbox">
            <div class="tb">
              <img src="../../assets/images/login-png/宝贝收藏.png" alt="" />
              <p>宝贝收藏</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/login-png/买过的店.png" alt="" />
              <p>买过的店</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/login-png/收藏的店.png" alt="" />
              <p>收藏的店</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/login-png/我的足迹.png" alt="" />
              <p>我的足迹</p>
            </div>
          </div>
        </div>
      </div>
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
  justify-content: space-evenly;
  width: 1200px;
  margin: 0 auto;
}
.login {
  width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
}
.login h2 {
  text-align: center;
}
.content {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
.tx {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
.button {
  display: flex;
  margin: 0 auto;
  
}

.button button {
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: aliceblue;
}
.login1 {
  background: #ff5400;
}
.register1 {
  background: #ff7f00;
}
.tbbox {
  display: flex;
  justify-content: space-evenly;
}
.tb {
  width: 56px;
  height: 48px;
  display: flex;
  flex-direction: column;
}
.tb img {
  width: 26px;
  height: 26px;
  margin: 0 auto;
}
.tb p {
  width: 56px;
  text-align: center;
  size: 12px;
}
.banner {
  width: 800px;
  height: 400px;
}
.banner img {
  width: 800px;
  height: 400px;
}
</style>
