<template>
  <div id="login">  
<div class="img">
        <img src="../../assets/image-Sunny/banner/banner6.png" alt="">
      </div>

    <div class="big">
      <div class="topone">
        <img src="../../assets/images/logo/headimg.png" alt="">
      </div>
      <h1></h1>
      <div class="entry">
        <div class="loginon">
          <div class="login-top">
            <div class="name">
              账号：<el-input type="username" v-model="username" autocomplete="off" placeholder="邮箱/用户名/登录手机"></el-input>
            </div>
            <div class="name">
              
              密码：<el-input type="password" placeholder="用户密码" v-model="password" autocomplete="off"></el-input>
            </div>
          </div>
          <div class="login-buttom">
           <div class="buttom1">
             <input type="checkbox">
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
        <el-button class="dl" type="primary" @click="doLogin" style="width: 100%;">登录</el-button>
      </div>
    <div class="regist-link">
      <a href="../../pages/regist/regist.vue">
        <img src="../../assets/image-Sunny/图标/right.png" alt="">
        <p>立即注册</p>
        </a>
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
  import axios from 'axios'
  export default {
    name: 'Login',
    data: function() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin: function() {
        // Ling
        let username = this.username;
        let password = this.password;
        // console.log("username=%s,password=%s",username,password);
        //定义请求路径
        let url = '/src/java/UserAction.java';
        //定义请求参数
        let params = {
          username: username,
          password: password,
          methodName: 'userLogin'
        };
        console.log(params);
        //发起ajax请求---GET(注意参数必须保存到params属性中)
        axios.get(url, {
          params: params
        }).then(resp => {
          console.log(resp);
          let data = resp.data;
          console.log(data);
          this.$message({
            message: data.msg == 1 ? '登录成功':'登录失败',
            type: data.code == 1 ? 'success':'error'
          });
        }).catch(err => {
          console.log(err);
        });
      },
      toRegister: function() {
        this.$router.push('/Register');
      }
    }
  }
</script>

<style>
.el-button--primary{
  border-color:#df3113;
  background-color: #df3113;
}
.img img{
  width: 1200px;
height: 800px;
}
#login{
    height: 600px;
    width: 1200px;
    margin: 0  auto;

}
/* 大盒子 */
.big {
  width: 300px;
  height: 460px;
  background-color: rgba(255, 255, 255, .6);
  border-radius:10px;
  position: relative;
  top: -525px;
  left: 450px;
}
.topone{
  display: flex;
  justify-content: center
}

.topone img{
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
.login-top .name{
  flex-wrap: nowrap;
}
.refer a:nth-child(1){
  background-color: #e11926;
    color: white;
    border-radius: 10px;
}
.login-top .name input{
  width: 280px;
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
.buttom1{
 width: 540px;
 height: 30px;
 line-height: 30px;
 display: flex;
}
.login-buttom1 input{
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
.pact{
    margin-top: 36px;
    margin-left: 10px;
    height:30px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

}
.pact a{
  color: #000;
}
</style>
