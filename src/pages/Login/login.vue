<template>


  <div id="login">  
<div class="img">
        <img src="../../assets/image-Sunny/banner/banner6.png" alt="">
      </div>


    <div class="big">
      <div class="topone">
        <img src="../../assets/images/logo/headimg.png" alt="" />
      </div>
      <h1></h1>
      <div class="entry">
        <div class="loginon">
          <div class="login-top">


            <div class="name">
              账号：<input type="text"  name="account" placeholder="邮箱/用户名/登录手机">
            </div>
            <div class="name">
              密码：<input type="password" name="password1" placeholder="请输入密码">
            </div>


          </div>
          <div class="login-buttom">
            <div class="buttom1">
              <input type="checkbox" />
              <span>自动登录</span>
            </div>
            <div class="right">
              <a href="">忘记密码</a>
              <div class="wire">|</div>
              <a href="">验证码登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="refer">
        <a href="" class="dl">登录</a>


      </div>
    <div class="regist-link">
      <a href="../../pages/regist/regist.vue">
        <img src="../../assets/image-Sunny/图标/right.png" alt="">
        <p>立即注册</p>
        </a>
    </div>


      </div>
      <div class="pact">


        <input type="checkbox" />同意
        <a href="">《服务条款》</a>
        <a href="">《隐私政策》</a>
        <a href="">《儿童隐私政策》</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.img img {
  width: 1200px;
  height: 600px;
}
#login {
  height: 600px;
  width: 1200px;
  margin: 0 auto;
}
/* 大盒子 */
.big {
  width: 300px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  position: relative;
  top: -525px;
  left: 450px;
}
.topone {
  display: flex;
  justify-content: center;
}

.topone img {
  width: 90px;
  height: 90px;
  position: absolute;
  margin: 20px auto;
}
/* login */
h1 {
  width: 100px;
  font-size: 20px;
  /* border: 2px solid green; */
  margin: 20px auto;
  text-align: center;
  padding: 50px;
}
/* 手机号密码框 */
.login-top {
  width: 280px;
  margin: 0 auto;
  /* border: 2px solid black; */
  font-size: 16px;
}
.login-top .name {
  margin: 20px auto;

}

.refer a:nth-child(1){
  background-color: #e11926;
    color: white;
    border-radius: 10px;
}
.login-top .name input {
  width: 220px;
}
/* 附属小标签 */
.login-buttom {
  display: flex;
  width: 250px;
  height: 30px;
  line-height: 30px;
  margin: 0px auto;
  /* border: 2px solid blue; */
}
.buttom1 {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
}
.login-buttom1 input {
  height: 14px;
}

.login-buttom a {
  color: blue;
  width: 70px;
  text-align: center;
  font-size: 13px;
  display: inline-block;
}
.login-buttom .wire,
.right {
  display: inline-block;
}


.refer{
    width: 280px;
    height: 50px;
    font-size: 17px;
    /* background-color: #e11926; */
    /* /* text-align: center; */
    margin: 0 auto;
   
}
.refer a{
    display:inline;
    color:black;
    /* background-color: #e11926; */
    width: 280px;
    height:30px;
    line-height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  justify-content: center;
}
.regist-link a{
  float: right;
width: 85px;
  font-size: 14px;
  margin-right: 20px;
  display: flex;
 

}
.regist-link p {
  width: 100px;
  height: 14px;
  line-height: 14px;
}
.regist-link  img{
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  /* border-radius: 50%; */

  text-align: center;
  line-height: 15px;
}
.pact {
  margin-top: 36px;
  margin-left: 10px;
  height: 30px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pact a {
  color: #000;
}
</style>
