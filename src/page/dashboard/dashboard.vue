<template>
  <el-card style="background-color: rgb(242, 242, 242);">
  <div>
    <el-row :gutter="25" style="margin-top: 0">
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card1-1"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">
        <el-card class="zq-card1-2"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card1-3"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card1-4"></el-card>
      </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple ">
        <el-card class="zq-card1-5">
        <div class="wrap">
          <div class="photo">
          <a href=" ">
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
          <PieChart></PieChart>
        </el-card>
      </div></el-col>
      <el-col :span="15"><div class="grid-content bg-purple-light">
        <el-card class="zq-card2-2">
        </el-card>
      </div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">
        <el-card class="zq-card2-3">
        </el-card>
        <el-card class="zq-card2-4">
        </el-card>
      </div></el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-card class="zq-card3-1">
        </el-card>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
        <el-card class="zq-card3-2">
        </el-card>
      </div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple">
        <el-card class="zq-card3-3">
        </el-card>
      </div></el-col>
    </el-row>


    <el-row type="flex" :gutter="20" justify="center">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <div id="shabi" :style="{width: '300px', height: '300px'}"></div>

  </div>
  </el-card>
</template>
<script>
  import pet1 from "@/assets/img/pet1.png"
  import PieChart from "../../components/Charts/PieChart";
  export default {
    name: 'dashboard',
    components: {PieChart},
    data() {
      return {
        currentDate: new Date(),
        pet1: pet1,
      };
    },
    mounted() {
      var myChart = this.$echarts.init(document.getElementById('shabi'));
      myChart.setOption({
        title: {text: '在Vue中使用echarts'},
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })

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
    height: 340px;
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
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;

  }

</style>
