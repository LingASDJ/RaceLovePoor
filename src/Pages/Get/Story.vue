<template>
  <div class="box">
           <div class="banner1">
               <img src="../../assets/images/暖心助农/我们banner.jpg" alt="">
             </div>
    <div class="publish">
      <!-- <h3 class="pm">发布入驻需求单</h3>
      <p>
        发布助农产品需求，吸引农户入驻网站!
        <span>请完善需求信息</span>
      </p> -->
<!-- 
      <div class="bg">
        <div class="group">
          <p class="pm">
            <span class="must">*</span>
            入驻类型
          </p>
          <div class="type">
            <label>
              <input type="radio" name="purchasingtype" value="DAILY" />
              <span class="pretend-radio"></span>
              日常采购（固定长期采购）
            </label>
            <label>
              <input type="radio" name="purchasingtype" value="SINGLE" />
              <span class="pretend-radio"></span>
              单次采购
            </label>
            <label>
              <input type="radio" name="purchasingtype" value="SINGLE-URGENT" />
              <span class="pretend-radio"></span>
              单次采购(紧急)
            </label>
            <label> 有效期 </label>
          </div>
        </div>
        <div class="shbox">
             <div class="bode2">
                <p class="pm">收货地址</p>
                <div class="warp">
                    <input id="city-picker" name="addressjson" 
                    readonly="readonly" type="text" value data-simple="true" class="form-control city-picker-input">
                <span class="city-picker-span">
                    <span class="placeholder">请选择省/市/区</span>
                </span> 
                </div>
             </div>
        </div>
      </div> -->
      <div class="wrm">
         <p class='wrm1'>关于我们</p>
         <p class='wrm2'>About us</p>
      </div>
      <div class="box1">
      <div class="wz">
            <span>◆</span>
           <span>聚力脱贫攻坚，推进民生工程</span>
           <p>人民对美好生活的向往，就是我们的奋斗目标。摆脱贫困如果只是意味着“两不愁三保障”，就只是满足了人民最基本的生产和生活需求，是较低水平的小康，并不算富裕。国家富强离不开人民富裕，贫困地区的人民也向往富裕的生活，因此继脱贫攻坚之后实施乡村振兴战略，也是贫困地区经济社会发展的必然逻辑。</p>
      </div>
      <div class="tp">
          <img src="../../assets/images/暖心助农/关于我们.jpg" alt="">
      </div>
      </div>
      <div class="bj">
        <img src="../../assets/images/暖心助农/背景.jpg" alt="">
      </div>
        <div class="box2">
                      <div class="tp2">
                <img src="../../assets/images/暖心助农/品质保障.jpg" alt="">
            </div>
           <div class="wz2">
              <span>◆</span>
               <span>我们的品质保障</span>
               <p>产地环境清洁。土壤质量、圈舍条件、水源、空气等环境质量因子符合国家有关标准或认证要求。生产过程控制。在生产过程采取的农节措施和农业投入品要符合有关标准和要求。产品质量检测。农产品上市流通前应进行定期、不定期抽样检测。包装贮运过程可靠。农产品采用的包装物、初级加工措施、贮藏和运输条件应符合有关法规标准要求。产品履历可追溯。建立农产品生产和流通履历记录，为产品质量追溯提供依据。法规标准认证有保障。建立健全农产品质量法律法规和标准体系，推广农产品“三品一标”（无公害农产品、绿色食品、有机食品和农产品地理标志）认证，为农产品质量评价提供依据。</p>
             </div>
        </div>
        <div class="question">
               <h3>常见问题</h3>
               
        </div>
  </div>

   
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  margin-bottom: 0 auto;
  background-color: #f4f4f4;
}
.banner1 {
  width: 1200px !important;
  margin: auto;
}
.publish {
  padding: 20px 55px 60px;
  font-size: 14px;
  width: 1200px;
  margin: 0 auto;
}
.publish > h3 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: black;
}
.pm {
  padding: 0px;
  margin: 0px;
}
.publish > p {
  text-align: center;
  margin: 20px 0;
}
.publish > p span {
  color: #ff6000;
  text-align: center;
}
.publish .bg {
  background-color: #fff;
  padding: 40px 100px 20px 100px;
  margin-bottom: 24px;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.bg .group {
  min-height: 50px;
  margin-bottom: 20px;
  display: flex;
}
.bg .group > .pm {
  width: 75px;
  margin-right: 10px;
  line-height: 34px;
  height: 34px;
  text-align: right;
  color: #2d2d34;
}
.bg .group .must {
  display: inline-block;
  width: 12px;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  color: #ff6000;
}
.publish .type label {
  cursor: pointer;
  margin-right: 10px;
  font-weight: lighter;
}
label {
  display: inline-block;
}
.publish .type {
  line-height: 33px;
}
.publish .type label input {
  display: none;
}
.publish .type label input:checked + .pretend-radio {
  background: #ff6000;
}
.publish .type label .pretend-radio {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;
  vertical-align: 1px;
  border-radius: 50%;
  background: white;
  -webkit-box-shadow: 0 0 0 3px white, 0 0 0 4px #ff6000;
  box-shadow: 0 0 0 3px white, 0 0 0 4px #ff6000;
}
/* .shbox{
    display: flex;
} */
.shbox .bode2 > .pm {
    width: 70px;
    margin-right: 10px;
    line-height: 23px;
    height: 34px;
    text-align: right;
    color: #2d2d34;
}
.pm{
    margin: 0;
}
.bode2{
    display: flex;
}
.city-picker-span{
    width: 325px;
    height: 24px;
    line-height: 33px;
}
.city-picker-span {
    position: relative;
    display: block;
    outline: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    color: #ccc;
    cursor: pointer;
}
.wrm1{
    font-size: 26px;
    padding-top: 0px;
    font-weight: normal;
    font-family: 微软雅黑;
    color: #4ab344;
    text-align: center;
     /* text-decoration:underline; */
}
.wrm2{
   font-size: 18px;
    padding-top: 0px;
    font-weight: normal;
    font-family: 微软雅黑;
    color: #a5a5a5;
    text-align: center;
    line-height: 36px;
}
.wz{
    width: 500px;
    padding-top: 120px;
    margin-left: 103px;
}
.wz span{
    color: #0A7628;
    font-family: arial, 宋体, sans-serif, tahoma, 'Microsoft YaHei';
    line-height: 24px;
    font-size: 26px;
}
.wz p{
  font-size: 17px;
    line-height: 25px;
    padding-top: 20px;
    text-indent: 2em;
}
.box1{
  display: flex;
  width: 1200px;
      /* flex-direction: row;
    align-items: center;
    justify-content: flex-end; */
}
.tp img{
  margin-left: 113px;
}
.bj img{
  width: 1200px;
}
.box2{
  display: flex;
  width: 1200px;
      /* flex-direction: row;
    align-items: center;
    justify-content: flex-end; */
}
.tp2 img{
      width: 600px;
    /* margin-left: 113px; */
    margin-top: 84px;
    height: 340px;
}
.wz2{
    width: 600px;
    padding-top: 108px;
    margin-left: 57px;
}
.wz2 span{
    color: #0A7628;
    font-family: arial, 宋体, sans-serif, tahoma, 'Microsoft YaHei';
    line-height: 24px;
    font-size: 26px;
}
.wz2 p{
  font-size: 17px;
    line-height: 25px;
    padding-top: 20px;
    text-indent: 2em;
}
</style>