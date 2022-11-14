<template>
  <div id="app">
    <!-- 顶部轮播部分 -->
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
    <!-- 热门商品部分 -->
    <div class="hot-secondkill">
      <!-- 秒杀 -->
      <div class="left">
        <h4>热门秒杀</h4>
        <p class="text"><span>20:00</span>场 倒计时</p>
        <p class="time">
          <span class="num day">00</span>
          <span>天</span>
          <span class="num hour">00</span>
          <span>:</span>
          <span class="num minute">00</span>
          <span>:</span>
          <span class="num second">00</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
/* @import "../scss/variable.scss"; */
/* @import "../../scss/public.scss"; */
.app{
  background: #f5f5f5;
}
/* 顶部轮播图部分 */
.Toprotation {
  display: flex;
  justify-content: space-evenly;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.login {
  width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
}
.login h2 {
  text-align: center;
  padding-top: 32px;
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
  padding-top: 32px;
  font-size: 16px;
}

.button button {
  width: 120px;
  height: 42px;
  border-radius: 20px;
  border: none;
  color: aliceblue;
  margin: 0 4px;
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
  padding-top: 32px;
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
  size: 12px !important;
  padding-top: 10px;
}
.banner {
  width: 800px;
  height: 400px;
}
.banner img {
  width: 800px;
  height: 400px;
}
/* 热门商品部分 */
.hot-secondkill{
width: 1200px;
margin: 0 auto;
}
/* 1.秒杀 */
.left {
  height: 290px;
  float: left;
  background-image: url(../../assets/images/ms.png);
  background-position: center center;
}
  h4{
    height: 114px;
    line-height: 114px;
    font-size: 36px;
    color: white;
    text-align: center;
    font-family: "黑体";
    margin-bottom: 74px;
  }
  .text{
    color: white;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .time{
    text-align: center;
    color: white;
    font-size: 24px;
    width: 220px;
  }
</style>
