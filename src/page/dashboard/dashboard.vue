<template>
  <el-card style="background-color: rgb(242, 242, 242);">
  <div>
    <el-row :gutter="25" style="margin-top: 0">
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <transition name="el-zoom-in-center">
        <el-card class="zq-card1-1 animated" v-show="show1" >
          <div style="color: #ffffff; margin-top: 8px;margin-left: 8px;opacity:0.9"><span>宠物总量</span></div>
          <el-row type="flex"justify="center">
            <el-col :span="6"><div>
              <div class="zq-text-style"  ><span> 32260只</span></div>
            </div></el-col>
          </el-row>
        </el-card>
        </transition>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">
        <transition name="el-zoom-in-center">
        <el-card class="zq-card1-2" v-show="show1">
          <div style="color: #ffffff; margin-top: 8px;margin-left: 8px;opacity:0.9"><span>线下店铺</span></div>
          <el-row type="flex"justify="center">
            <el-col :span="6"><div>
              <div class="zq-text-style"  ><span> 360家</span></div>
            </div></el-col>
          </el-row>
        </el-card>
        </transition>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <transition name="el-zoom-in-center">
        <el-card class="zq-card1-3" v-show="show1">
          <div style="color: #ffffff; margin-top: 8px;margin-left: 8px;opacity:0.9"><span>注册人数</span></div>
          <el-row type="flex"justify="center">
            <el-col :span="6"><div>
              <div class="zq-text-style"  ><span> 14205人</span></div>
            </div></el-col>
          </el-row>
        </el-card>
        </transition>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <transition name="el-zoom-in-center">
        <el-card class="zq-card1-4" v-show="show1">
          <div style="color: #ffffff; margin-top: 8px;margin-left: 8px;opacity:0.9"><span>在线人数</span></div>
          <el-row type="flex"justify="center">
            <el-col :span="6"><div>
              <div class="zq-text-style"  ><span> 560人</span></div>
            </div></el-col>
          </el-row>
        </el-card>
        </transition>
      </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple ">
        <el-card class="zq-card1-5" >
        <div class="wrap">
          <div class="photo">
          <a href="https://baijiahao.baidu.com/s?id=1650802483300966685&wfr=spider&for=pc">
            <el-image :src="pet1"  class="zq-img" style="border-radius: 3px"/>
            <span style="color: rgb(102, 177, 255);">宠物指南</span>
          </a>
          </div>
        </div>
        </el-card>
      </div></el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-card class="zq-card2-1">
          <PieChart/>
        </el-card>
      </div></el-col>
      <el-col :span="15"><div class="grid-content bg-purple-light">
        <el-card class="zq-card2-2" style="padding: 10px">
          <ChinaChart />
        </el-card>
      </div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">
        <el-card class="zq-card2-3">
          <el-image :src="pet2"  style="border-radius: 3px; width: 100%;height: 100%"/>
        </el-card>
        <el-card class="zq-card2-4">
          <el-image :src="pet3"  style="border-radius: 3px; width: 100%;height: 100%"/>
        </el-card>
      </div></el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-card class="zq-card3-1">
          <chart31/>
        </el-card>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
        <el-card class="zq-card3-2">
          <chart32/>
        </el-card>
      </div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple">
        <el-card class="zq-card3-3">
          <chart33/>
        </el-card>
      </div></el-col>
    </el-row>


  </div>
  </el-card>
</template>
<script>
  import pet1 from "@/assets/img/pet1.png";
  import pet2 from "@/assets/img/zq-mao1.png"
  import pet3 from "@/assets/img/zq-mao2.png"
  import PieChart from "../../components/Charts/PieChart";
  import ChinaChart from  "../../components/Charts/chinaChart";
  import ZqCalendar from "../../components/commons/zq-calendar";
  import chart31 from  "../../components/Charts/chart3-1";
  import chart32 from  "../../components/Charts/chart3-2";
  import chart33 from  "../../components/Charts/chart3-3";
  export default {
    name: 'dashboard',
    components: {ZqCalendar, PieChart,ChinaChart,chart31,chart32,chart33},
    data() {
      return {
        show1:false,
        currentDate: new Date(),
        pet1: pet1,
        pet2: pet2,
        pet3: pet3,
      };
    },
      mounted() {
        /*quan zhang: 延迟执行  */
          setTimeout(()=>{   //设置延迟执行
             this.show1 = true;
          },500)
      }

  }
</script>
<style scoped>
  /deep/ .el-card__body {
    padding: 0;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .zq-text-style{
    color: #ffffff;
    text-align: center;
    margin-top: 7px;
    font-size: 18px;
  }

  .zq-img{
    width: 100%;
    height: 100px;
    display: block;
  }
  .zq-img-background{
    background: url("../../assets/img/pet1.png") ;
    background-size: contain;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .zq-card1-1 {
    background-color: rgb(102, 177, 255);
    height: 90px;
  }
  .zq-card1-2 {
    background-color:   #9B5EEA;
    height: 90px;
  }
  .zq-card1-3 {
    background-color: #67C23A;
    height: 90px;
  }
  .zq-card1-4 {
    background-color: #4DDEDA;
    height: 90px;
  }
  .zq-card1-5 {
    height: 90px;
  }
  .zq-card2-1 {
    height: 340px;
  }
  .zq-card2-2 {
    height: 320px;
  }
  .zq-card2-3 {
    height: 155px;
  }
  .zq-card2-4 {
     margin-top: 28px;
     height: 155px;
   }

  .zq-card3-1 {
    height: 330px;
  }
  .zq-card3-2 {
    height: 330px;
  }
  .zq-card3-3 {
    height: 330px;
  }
  .wrap{
    width: 100%;
    height: 100px;
    position:relative;
  }
  .photo a{
    position:absolute;display:block;
  }
  .photo a:hover{
    border:1px solid #FFFFFF;
  }
  .photo span{
    display:block;
    position:absolute;
    bottom:0;
    opacity:0.8;
    cursor:hand;
    text-align: center;
    padding-left: 39%;
    padding-bottom: 35px;
  }
  .photo a:hover span{
    text-decoration:underline
  }



  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    /*background: #99a9bf;*/
  }

  .bg-purple {
    /*background: #d3dce6;*/
  }

  .bg-purple-light {
    /*background: #e5e9f2;*/
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    /*background-color: #f9fafc;*/

  }
  /*动画样式
 */
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

</style>
