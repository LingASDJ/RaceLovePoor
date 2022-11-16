<template>
  <div id="app" v-show="isHide">
    <!-- 顶部轮播部分 -->
    <div class="Toprotation">
      <div class="login">
        <div class="content">
          <img class="tx" src="../../assets/images/index/login-png/头像.png" alt="" />
          <h2>Hi! 你好</h2>
          <div class="button">
            <button class="login1">登录</button>
            <button class="register1">注册</button>
          </div>
          <div class="tbbox">
            <div class="tb">
              <img src="../../assets/images/index/login-png/宝贝收藏.png" alt="" />
              <p>宝贝收藏</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/index/login-png/买过的店.png" alt="" />
              <p>买过的店</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/index/login-png/收藏的店.png" alt="" />
              <p>收藏的店</p>
            </div>
            <div class="tb">
              <img src="../../assets/images/index/login-png/我的足迹.png" alt="" />
              <p>我的足迹</p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <!-- <img src="../../assets/images/index/banner/02.jpg" alt="" /> -->
        <img src="../../assets/images/index/banner/01.jpg" alt="" />
      </div>
    </div>
    <!-- 热门商品部分 -->
    <div class="hot-secondkill">
      <div class="title">
        <p class="titlel">热门商品</p>
      </div>
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
      <!-- 商品 -->
      <div class="right">
        <div class="merchandise">
          <div class="right_pro-l">
            <div class="imgbox">
              <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
            </div>
            <div class="right_pro_l_l">
              <div class="right_pro-price1">￥20.6</div>
              <div class="right_pro-price2">￥36.6</div>
              <p>广东高州荔枝</p>
              <span>精品</span>
            </div>
          </div>
          <div class="right_pro-l">
            <div class="imgbox">
              <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
            </div>
            <div class="right_pro_l_l">
              <div class="right_pro-price1">￥20.6</div>
              <div class="right_pro-price2">￥36.6</div>
              <p>广东高州荔枝</p>
              <span>精品</span>
            </div>
          </div>
          <div class="right_pro-l">
            <div class="imgbox">
              <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
            </div>
            <div class="right_pro_l_l">
              <div class="right_pro-price1">￥20.6</div>
              <div class="right_pro-price2">￥36.6</div>
              <p>广东高州荔枝</p>
              <span>精品</span>
            </div>
          </div>
          <div class="right_pro-l">
            <div class="imgbox">
              <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
            </div>
            <div class="right_pro_l_l">
              <div class="right_pro-price1">￥20.6</div>
              <div class="right_pro-price2">￥36.6</div>
              <p>广东高州荔枝</p>
              <span>精品</span>
            </div>
          </div>
          <div class="right_pro-l">
            <div class="imgbox">
              <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
            </div>
            <div class="right_pro_l_l">
              <div class="right_pro-price1">￥20.6</div>
              <div class="right_pro-price2">￥36.6</div>
              <p>广东高州荔枝</p>
              <span>精品</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 天天特价 -->
    <div class="Specialoffer">
      <div class="title">
        <p class="titlel">天天特价</p>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
      <div class="right-img-3-1">
        <div class="img-3">
          <img src="../../assets/images/index/农产品图/农副/枸杞.jpg" />
        </div>
        <div class="img-nuber">
          <p class="nuber-1">￥<span>30.00</span>元/斤</p>
          <p class="nuber-2">50斤起批</p>
        </div>
        <div class="img-text">
          <p>长岛淡晒海米金钩批发</p>
        </div>
        <div class="img-text-1">
          <p class="it-1">库存：2000斤</p>
          <p class="it-2">经销批发</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isHide() {
      return (!(this.$route.path == "/cardcat"))
    }
  }
}
</script>

<style>
/* @import "../scss/variable.scss"; */
/* @import "../../scss/public.scss"; */
.app {
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
  border-radius: 10px;
}
/* 热门商品标题 */
.title{
  width: 1200px;
  padding-bottom: 20px;
}
.titlel{
  width: 140px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #ff5400;
  margin: 0 auto;
  border-radius: 20px;
  color: #ffffff;
  font-size: 20px;
}
/* 热门商品部分 */
.hot-secondkill {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;
}

/* 1.秒杀 */
.left {
  height: 240px;
  float: left;
  background-image: url(../../assets/images/index/ms.png);
  background-position: center center;
}

h4 {
  height: 80px;
  line-height: 80px;
  font-size: 36px;
  color: white;
  text-align: center;
  font-family: "黑体";
  margin-bottom: 74px;
}

.text {
  color: white;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.time {
  text-align: center;
  color: white;
  font-size: 24px;
  width: 220px;
}

/* 2.商品 */
.right_pro-l {
  background-color: rgb(230, 230, 230);
  width: 190px;
  height: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.imgbox {
  width: 160px;
  height: 160px;
  padding-top: 10px;
}

.imgbox img {
  width: 100%;
  transition: all 1s;
}

.right_pro-price1 {
  float: left;
  font-size: 22px;
  font-weight: normal;
  color: #e40c61;
}

.right_pro-price2 {
  font-size: 12px;
  letter-spacing: 1px;
  color: #a09e9e;
  text-decoration: line-through;
}

.right_pro_l_l p {
  display: block;
  float: left;
  width: 100px;
  height: 24px;
  font-size: 12px;
  color: #666;
}

.right_pro_l_l span {
  display: inline-block;
  font-size: 14px;
  padding: 3px 6px;
  color: rgb(235, 235, 235);
  background-color: #3a880e;
  margin-right: 10px;
}

.merchandise {
  display: flex;
  justify-content: space-evenly;
}

/* 天天特价 */
.Specialoffer {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.right-img-3-1 {
  width: 200px;
  height: 270px;
  background-color: #ffffff;
  padding-top: 5px;
  margin-bottom: 10px;
}

.img-3 img {
  width: 170px;
  height: 170px;
}

.right-img-3-1 .img-3 {
  margin: 0 12px;
}

.img-nuber {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 10px;
  margin-bottom: 5px;
}

.img-text {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #404040;
  margin-bottom: 8px;
}

.img-text-1 {
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
}
</style>
