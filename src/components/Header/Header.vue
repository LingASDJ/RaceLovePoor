<template>
    <div id="app">
      <div class="shortcut_v2022 alink_v2022">
        <div class="w">
            <ul class="fl 1h">
                <li class="fl">
                    <div class="menu">
                        <div class="menu_hd">
                            <a href="#">
                                <img src="../../assets/images/top_phone_icon.png" width="12px" height="16px" />
                                手机锡货
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
                <li class="fl"><i class="shortcut_s"></i></li>
                <li class="fl">
                    <div class="menu_hd">您好，欢迎来到锡货网！</div>
                </li>
                <li class="fl">
                    <div class="menu_hd"><a href="#">请登录</a></div>
                </li>
                <li class="fl">
                    <div class="menu_hd"><a href="#">免费注册</a></div>
                </li>
            </ul>
            <ul class="fr 1h">
                <li class="fl">
                    <div class="menu_hd"><a href="#">我的订单</a></div>
                </li>
                <li class="fl"><i class="shortcut_s"></i></li>
                <li class="fl">
                    <div class="menu_hd"><a href="#">我的锡货</a></div>
                </li>
                <li class="fl"><i class="shortcut_s"></i></li>
                <li class="fl">
                    <div class="menu_hd"><a href="#">服务中心</a></div>
                </li>
                <li class="fl"><i class="shortcut_s"></i></li>
                <li class="fl">
                    <div class="menu_hd"><a href="#">商家入驻</a></div>
                </li>
                <li class="fl"><i class="shortcut_s"></i></li>
                <li class="fl">
                    <div class="menu">
                        <div class="menu_hd"><a href="#">网站导航</a><b><em></em></b></div>
                        <div class="menu_bd">
                            <ul>
                                <li><a href="#">网站导航</a></li>
                                <li><a href="#">网站导航</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <span class="clr"></span>
        </div>
    </div>
   <!--顶部Logo及搜索-->
   <div class="header_2022">
    <div class="w">
        <div class="logo_v2022">
            <a href="#">
                <img class="border_r" src="../../assets/images/logo.png" width="120" height="50">
                <img src="../../assets/images/slogan.jpg" width="170" height="50">
            </a>
        </div>
        <div class="header_searchbox">
            <form action="#">
                <input name="search" type="text" class="header_search_input" default_val="锡货网三期上线全场五折"
                    autocomplete="off" x-webkit-speech="" x-webkit-grammar="builtin:search" lang="zh">
                <button type="submit" class="header_search_btn">搜索</button>
            </form>
            <ul class="hot_word">
                <li><a class="red" href="#" target="_blank">礼品卡</a></li>
                <li><a target="_blank" href="#">百货五折</a></li>
                <li><a target="_blank" href="#">大闸蟹</a></li>
                <li><a target="_blank" href="#">年货</a></li>
                <li><a target="_blank" href="#">电子产品</a></li>
            </ul>
        </div>
        <div id="cart_box" class="cart_box">
            <a id="cart" class="cart_link" href="#" rel="nofollow">
                <span class="text">去购物车结算</span>
                <img src="../../assets/images/shopping_icon.png" width="24" height="24" class="cart_gif">

                <!-- 购物车没有物品时，隐藏此num -->
                <!-- <span class="num">12</span>
                <s class="icon_arrow_right"></s> -->
            </a>
        </div>
        <span class="clr"></span>
    </div>
</div>
<!--顶部Logo及搜索-->    
  </div>
</template>
  
<script>
  // 导出，然后在index.js中导入
  export default {
    name: 'Home'
  }
</script>