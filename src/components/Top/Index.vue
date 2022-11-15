<template>
    <div id="app">
      <!-- 顶部条 -->
      <div class="shortcut_v2022 alink_v2022">
        <div class="w">
          <ul class="fl 1h">
            <li class="fl">
              <div class="menu_hd"><a href="#">回到首页</a></div>
            </li>
            <li class="fl">
              <div class="menu">
                <div class="menu_hd">
                  <a href="#">
                    <img :src="appimg" width="12px" height="16px" />
                    手机商城
                  </a>
                  <b><em></em></b>
                </div>
                <div class="menu_bd">
                  <ul>
                    <li><a href="#">App For Android</a></li>
                    <li><a href="#">App For IOS</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="fl">
              <div class="menu_hd">您好，欢迎来到巧农人暖心助农购物商城！</div>
            </li>
            <li class="fl">
              <div class="menu_hd"><a href="#">请登录</a></div>
            </li>
            <li class="fl">
              <div class="menu_hd"><a href="#">免费注册</a></div>
            </li>
            <li class="fl">
              <div class="menu_hd"><a href="#">采购大厅</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">暖心助农</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">农户认证</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">个人中心</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">我的订单</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">我的购物车</a></div>
            </li>
            <li class="fl"><i class="shortcut_s"></i></li>
            <li class="fl">
              <div class="menu_hd"><a href="#">关于我们</a></div>
            </li>
          </ul>
          <span class="clr"></span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  // 导出，然后在index.js中导入
  export default {
    name: "Home",
    props: {
      appimg: {
        default: "/src/assets/images/top_phone_icon.png"
      }
    },
    methods: {
      CardCatLink() {
        this.$router.replace("/cardcat");
      }
    }
  };
  </script>
  