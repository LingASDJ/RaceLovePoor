<template>
    <div id="app">
        <div class="cardcat">
            <div class="cardcatmain">
                <div class="cardcat_head">
                    <span id="cardcat_text">我的购物车</span>
                </div>
                <div class="cardcat_total">
                    <span>已选商品(不含运费)</span>
                    <span>0.00</span>
                    <button>结算</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {

 
  }
  </script>
  
<style>
  .cardcat{
    height: 500px;
    background-color: rgb(255, 0, 144);
  }
 .cardcatmain{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 118px;
    height: 40px;
    background-color: aqua;
    font-size: 16px;
    line-height: 42px;
 }
 .cardcat_total{
    display: flex;
 }
</style>