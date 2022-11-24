<template>
  <div class="sp">
    <div class="spleft">
      <img src="../../assets/images/index/农产品图/水果/荔枝.jpg" alt="" />
    </div>
    <div class="spright">
      <!-- 商品标题 -->
      <div class="sptitle">
        <span>茂名高州白糖罂荔枝</span>
      </div>
      <!-- 商品详情 -->
      <div class="spcontent">
        <!-- 商品介绍 -->
        <div class="spjs">
          <div class="spxq">价格</div>
          <div class="spxql" id="hswz">￥20.6</div>
        </div>
        <div class="spjs">
          <div class="spxq">规格</div>
          <div class="spxql">500g</div>
        </div>
        <div class="spjs">
          <div class="spxq">原产地</div>
          <div class="spxql">广东高州</div>
        </div>
        <div class="spjs">
          <div class="spxq">发货地址</div>
          <div class="spxql">四川成都</div>
        </div>
        <div class="spjs">
          <div class="spxq">交易数量</div>
          <div class="spxql">50000+</div>
        </div>
        <!-- 商品规格 -->
        <div class="spggbf">
          <div class="ggxz">规格选择</div>
          <div class="spgg">
            <a href=""><div class="spggl">尝鲜 250g 试吃装</div></a>
            <a href=""><div class="spggl">新鲜荔枝 1斤 普通装</div></a>
            <a href=""><div class="spggl">新鲜荔枝 1斤 精品装</div></a>
            <a href=""><div class="spggl">新鲜荔枝 2斤 普通装</div></a>
            <a href=""><div class="spggl">新鲜荔枝 2斤 精品装</div></a>
            <a href=""><div class="spggl">新鲜荔枝 2斤 出口级</div></a>
          </div>
        </div>
      </div>
      <div id="car">
        <div class="ggxz">宝贝数量：</div>
        <div class="slzj">
          <button v-on:click="sub()">-</button>
          <input class="slzjk" type="text" value="1" size="1" v-model="count" />
          <button v-on:click="add()">+</button>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="spbutton">
        <button class="jrgwc">加入购物车</button>
        <button class="lxkf">联系客服</button>
      </div>
      <!-- 商品承诺部分 -->
      <div class="spcnbf">
        <div class="spcn">服务承诺:</div>
        <div class="spcn">顺丰包邮</div>
        <div class="spcn">按需发货</div>
        <div class="spcn">坏果包赔</div>
        <div class="spcn">退货包运费</div>
      </div>
      <div class="spcnbf">
        <div class="spcn">支付方式:</div>
        <div class="spcn">支付宝</div>
        <div class="spcn">微信</div>
        <div class="spcn">网上银行</div>
        <div class="spcn">银行转账</div>
        <div class="spcn">(柜台转账/网银转账)</div>
      </div>
    </div>
    <!-- 商品底部 -->
    <div class="spbottom">
      <div class="l_wrap fl clearfix">
        <h3>新品推荐</h3>
        <ul>
          <li>
            <a href="#"><img src="images/goods/goods001.jpg"/></a>
            <h4><a href="#">进口柠檬</a></h4>
            <div class="prize">￥3.90</div>
          </li>
          <li>
            <a href="#"><img src="images/goods/goods002.jpg"/></a>
            <h4><a href="#">玫瑰香葡萄</a></h4>
            <div class="prize">￥16.80</div>
          </li>
        </ul>
      </div>

      <div class="r_wrap fr clearfix">
        <ul class="detail_tab clearfix">
          <li class="active">商品介绍</li>
          <li>评论</li>
        </ul>

        <div class="tab_content">
          <dl>
            <dt>商品详情：</dt>
            <dd>
              草莓采摘园位于北京大兴区 庞各庄镇四各庄村
              ，每年1月-6月面向北京以及周围城市提供新鲜草莓采摘和精品礼盒装草莓，草莓品种多样丰富，个大香甜。所有草莓均严格按照有机标准培育，不使用任何化肥和农药。草莓在采摘期间免洗可以直接食用。欢迎喜欢草莓的市民前来采摘，也欢迎各大单位选购精品有机草莓礼盒，有机草莓礼盒是亲朋馈赠、福利送礼的最佳选择。
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      default: 1
    }
  },
  methods: {
    add: function() {
      this.count++;
    },
    sub: function() {
      if (this.count > 1) {
        this.count--;
      } else {
        alert("宝贝不能再减少啦!");
      }
    }
  }
};
</script>
<style>
.sp {
  width: 1200px;
  /* height: 900px; */
  margin: 0 auto;
  display: flex;
}
/* 左侧 */
.spleft {
  width: 450px;
}
.spleft img {
  width: 450px;
  height: 450px;
}
/* 右侧 */
.spright {
  width: 730px;
  padding-left: 20px;
}
.sptitle {
  height: 60px;
  border-bottom: 1px rgb(210, 210, 210) solid;
  display: flex;
  align-items: center;
}
.sptitle span {
  font-size: 22px;
  color: rgb(45, 45, 45);
  font-weight: bold;
}
/* 商品介绍  */
.spjs div {
  display: inline-block;
  /* display: flex; */
}
.spxq,
.spxql {
  width: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #393939;
}
#hswz {
  color: #e11926;
  font-size: 24px;
  font-weight: bold;
}
.spbutton {
  width: 360px;
  margin: 0 auto;
}
.spbutton button {
  width: 120px;
  height: 40px;
  margin: 20px;
  font-size: 16px;
}
/* 商品规格 */
.spggbf {
  width: 730px;
  height: 100px;
  display: flex;
}
.ggxz {
  width: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #393939;
}
.spgg {
  width: 590px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
}
.spggl {
  width: 160px;
  color: rgb(23, 23, 23);
  border: 1px rgb(184, 184, 184) solid;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
}
/* 按钮 */
.jrgwc {
  background-color: #e11926;
  color: rgb(255, 255, 255);
  border: #e11926 1px solid;
}
.lxkf {
  background-color: #ffffff;
  color: #e11926;
  border: #e11926 1px solid;
}
/* 数量加减按钮 */
.slzj {
  width: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.slzj button {
  width: 28px;
  height: 28px;
}
#car div {
  display: inline-block;
}
.slzjk {
  width: 48px;
  height: 22px;
  text-align: center;
}

/* 商品承诺 */
.spcnbf {
  width: 360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.spcn {
  font-family: Helvetica;
  font-size: 12px;
  letter-spacing: 0;
  flex: 0 0 auto;
}
/* 商品底部 */
.spbottom {
  width: 1200px;
  margin: 0 auto;
}
</style>
