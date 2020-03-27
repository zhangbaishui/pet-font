<template>
  <div>

    <el-row :gutter="25" style="margin-top: 0">
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card-1"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">
        <el-card class="zq-card-2"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card-3"></el-card>
      </div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">
        <el-card class="zq-card-4"></el-card>
      </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple ">

          <el-image :src="pet1"  class="zq-img">
            <p style="color: #eeeeee; position: absolute">傻逼</p>
          </el-image>
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
</template>
<script>
  import pet1 from "@/assets/img/pet1.png"
  export default {
    name: 'dashboard',
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
    height: 100%;
    display: block;
  }
  .zq-img-background{
    background-image: url("../../assets/img/pet1.png") ;
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

  .zq-card-1 {
    background-color: rgb(102, 177, 255);
    height: 100px;
  }
  .zq-card-2 {
    background-color:   #9B5EEA;
    height: 100px;
  }
  .zq-card-3 {
    background-color: #67C23A;
    height: 100px;
  }
  .zq-card-4 {
    background-color: #4DDEDA;
    height: 100px;
  }
  .zq-card-5 {
    background-color: #42b983;
    height: 100px;
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
