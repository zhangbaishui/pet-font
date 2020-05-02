<template>
  <div id="chart3-2" style="width: 100%;height:320px"></div>
</template>
<script>
  export default {
    name: 'chinaChart',
    components: {},
    data() {
      return {
        lineOption1:{},
      };
    },
    mounted() {
      var myChart = this.$echarts.init(document.getElementById('chart3-2'));
      this.lineOption1 = {
          title: {
              text: '当日访问量走势',
              bottom: '10',
              left: "35%",
          },
          xAxis: {
              type: 'category',
              boundaryGap: false
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '30%']
          },
          visualMap: {
              type: 'piecewise',
              show: false,
              dimension: 0,
              seriesIndex: 0,
              pieces: [{
                  gt: 1,
                  lt: 3,
                  color: 'rgba(0, 180, 0, 0.5)'
              }, {
                  gt: 5,
                  lt: 7,
                  color: 'rgba(0, 180, 0, 0.5)'
              }]
          },
          series: [
              {
                  type: 'line',
                  smooth: 0.6,
                  symbol: 'none',
                  lineStyle: {
                      color: 'green',
                      width: 5
                  },
                  markLine: {
                      symbol: ['none', 'none'],
                      label: {show: false},
                      data: [
                          {xAxis: 1},
                          {xAxis: 3},
                          {xAxis: 5},
                          {xAxis: 7}
                      ]
                  },
                  areaStyle: {},
                  data: [
                      ['2019-10-10', 200],
                      ['2019-10-11', 400],
                      ['2019-10-12', 650],
                      ['2019-10-13', 500],
                      ['2019-10-14', 250],
                      ['2019-10-15', 300],
                      ['2019-10-16', 450],
                      ['2019-10-17', 300],
                      ['2019-10-18', 100]
                  ]
              }
          ]
      };

      myChart.setOption(this.lineOption1);
    }
  }
</script>
