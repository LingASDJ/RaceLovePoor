<template>
  <div id="app" v-show="isHide">
    <div class="promise_box">
      <!-- <router-link to="/Footer" tag="a">DKSHWFSIHFSI</router-link> -->
      <div class="w">
        <ul>
          <li>
            <img src="../../assets/images/promise_img01.jpg" /><span
              >365天不打烊</span
            >
          </li>
          <li>
            <img src="../../assets/images/promise_img02.jpg" /><span
              >无理由退换货</span
            >
          </li>
          <li>
            <img src="../../assets/images/promise_img03.jpg" /><span
              >担保交易</span
            >
          </li>
          <li>
            <img src="../../assets/images/promise_img04.jpg" /><span
              >先行赔付</span
            >
          </li>
          <li>
            <img src="../../assets/images/promise_img05.jpg" /><span
              >支持定制</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-links">
      <ul class="clearfix cols">
        <li class="col">
          <div class="bottom-links-title">关于我们</div>
          <ul class="clearfix bottom-links-items">
            <li><a href="#">招聘英才</a></li>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">合作洽谈</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </li>
        <li class="col">
          <div class="bottom-links-title">客服中心</div>
          <ul class="clearfix bottom-links-items">
            <li><a href="#">收货地址</a></li>
            <li><a href="#">个人资料</a></li>
            <li><a href="#">修改密码</a></li>
          </ul>
        </li>
        <li class="col">
          <div class="bottom-links-title">售后服务</div>
          <ul class="clearfix bottom-links-items">
            <li><a href="#">退换货政策</a></li>
            <li><a href="#">退款说明</a></li>
            <li><a href="#">联系卖家</a></li>
          </ul>
        </li>
        <li class="col">
          <div class="bottom-links-title">帮助中心</div>
          <ul class="clearfix bottom-links-items">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">积分兑换</a></li>
            <li><a href="#">积分细则</a></li>
            <li><a href="#">已购商品</a></li>
          </ul>
        </li>
        <li class="col">
          <div class="bottom-links-title">巧农人公众号</div>
          <ul class="clearfix gzhtp">
            <li>
              <img src="../../assets/images/公众号二维码.png"  id="gzh"/>
            </li>
          </ul>
        </li>
        <li class="col">
          <div class="bottom-links-title">关注我们</div>
          <ul class="clearfix bottom-links-items">
            <li>
              <img src="../../assets/images/icon_sina.png" /><a href="#"
                >新浪微博</a
              >
            </li>
            <li>
              <img src="../../assets/images/icon_tencent.png" /><a href="#"
                >腾讯微博</a
              >
            </li>
            <li>
              <img src="../../assets/images/icon_dou.png" /><a href="#"
                >豆瓣小站</a
              >
            </li>
            <li>
              <img src="../../assets/images/icon_weixin.png" /><a href="#"
                >官方微信</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="footer_v2022 bottom-about">
      <div class="w">
        <p class="foot_p1">
          <a href="#">首页</a>|<a href="#">招聘英才</a>|<a href="#">广告合作</a
          >|<a href="#">联系我们</a>|<a href="#">关于我们</a>
        </p>
        <pre>
    经营许可证：川B2-20130223备案许可证：川ICP备13041162号-1360网站安全检测平台
    ©2022 巧农人电商网络科技发展有限公司 &copy;  版权所有
                </pre
        >
      </div>
      <p>
        <a href="#"><img src="../../assets/images/bottom_img03.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img04.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img05.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img06.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img07.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img08.png"/></a>
        <a href="#"><img src="../../assets/images/bottom_img09.png"/></a>
      </p>
    </div>
    <!-- 底部 -->
    <div class="fixed-buttons">
      <ul>
        <li>
          <a href="#gzh" class="fixed-weixin"
            ><img src="../../assets/images/fixed_weixin.png" />
            <!-- <div class="weixin-pic">
              <img src="../../assets/images/weixin_big.jpg" />
            </div> -->
          </a>
        </li>
        <li>
          <a href="#">
            <img id="imgBtn-to-top" src="../../assets/images/back_top.png" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    isHide() {
      return !(this.$route.path == "/login");
    }
  }
};
</script>

<style></style>
