<template>
    <div id="app">
        <div class="cardcat">
            <!-- Main -->
            <div class="cardcatmain">
                <div class="cardcat_head">
                    <span id="cardcat_text">我的购物车</span>
                </div>
                <div class="cardcat_total">
                    <span id="sss1">已选商品(不含运费)</span>
                    <span id="sss1">0.00</span>
                    <button id="cardcat_button">结算</button>
                </div>
            </div>
            <!-- A-BOX -->
            <div class="cardcatheadA">
                <div id="cardcat_checkbox">
                    <input type="checkbox">全选商品
                </div>
                <!-- B-BOX -->
                <div class="cardcatheadB">
                    <span id="sss3">商品信息</span>
                    <span id="sss3">单价</span>
                    <span id="sss3">数量</span>
                    <span id="sss3">金额</span>
                    <span id="sss3">操作</span>
                </div>
            </div>
            <div class="shopinfo">
                <div class="shopactive">
                    <!-- <img class="shopactive" src="../../assets/images/goods_img03.jpg"> -->
                    商品状态:{{active}}
                    <div class="shoptea">
                        <span id="sss4">乐事</span>
                        <span id="sss4">11.45</span>
                        <span id="sss4">514</span>
                        <span id="sss4">1919810</span>
                        <span id="sss4">
                            <a href="#">提交</a>
                            <a href="#">移除</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardCat",
    props: {
    active: {
      default: "交易成功"
    }
  },
  }
  </script>

<!-- 引入购物车SCSS -->
<style lang="scss">
@import "../../scss/cardcat.scss";
</style>