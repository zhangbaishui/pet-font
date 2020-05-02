<template>
  <div id="PieChart" style="width: 100%;height: 330px"></div>
</template>

<script>
  export default {
    name: 'PieChart',
    components: {},
    data() {
      return {};
    },
    mounted() {
      var myChart = this.$echarts.init(document.getElementById('PieChart'));
     var option = {
        title: {
          subtext: '系统注册宠物类型',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['宠物狗', '宠物猫', '鸟类', '爬行类', '马匹','鱼类', '其他']
        },

        calculable: true,
        series: [{
          name: '半径模式',
          type: 'pie',
          radius: [15, 110],
          center: ['120%', 170],
          roseType: 'radius',
          width: '40%',
          // for funnel
          max: 40,
          // for funnel
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
          data: [
            {
              value: 35,
              name: '宠物狗'
            },
            {
              value: 25,
              name: '宠物猫'
            },
            {
              value: 13,
              name: '鸟类'
            },
            {
              value: 18,
              name: '爬行类'
            },
            {
              value: 5,
              name: '马匹'
            },
              {
                  value: 20,
                  name: '鱼类'
              },
            {
              value: 15,
              name: '其他'
            }]
        },]
      };
      myChart.setOption(option);
    }
  }
</script>
