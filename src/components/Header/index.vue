<template>
  <div id="app" v-show="isHide">
    <!-- <router-link to="/Home" tag="a">DKSHWFSIHFSI</router-link> -->
    <!--顶部Logo及搜索-->
    <div class="header_2022">
      <div class="w">
        <div class="logo_v2022">
          <a href="#">
            <img class="border_r" src="../../assets/images/logo/lv.png" />
            <img src="../../assets/images/logo/length-logo1.png" />
          </a>
        </div>
        <div class="header_searchbox">
          <form action="#">
            <input
              name="search"
              type="text"
              class="header_search_input"
              default_val="锡货网三期上线全场五折"
              autocomplete="off"
              x-webkit-speech=""
              x-webkit-grammar="builtin:search"
              lang="zh"
            />
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
            <!-- <a @click="CardCatLink"><span class="text">去购物车结算</span></a> -->
            <router-link to="/cardcat"><span class="text">去购物车结算</span></router-link>
            <img
              src="../../assets/images/shopping_icon.png"
              width="24"
              height="24"
              class="cart_gif"
            />

            <!-- 购物车没有物品时，隐藏此num -->
            <!-- <span class="num">12</span>
                <s class="icon_arrow_right"></s> -->
          </a>
        </div>
        <span class="clr"></span>
      </div>
      <hr />
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
  },
  computed: {
    isHide() {
      return !(this.$route.path == "/login");
    }
  }
};
</script>
