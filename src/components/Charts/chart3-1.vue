<template>
  <div id="chart3-1" style="width: 100%;height:320px"></div>
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
      var myChart = this.$echarts.init(document.getElementById('chart3-1'));
      this.lineOption1 = {
          legend: {},
          title: {
              text: '养宠物人员类型',
              bottom: '10',
              left: "33%",
          },
          tooltip: {},
          dataset: {
              source: [
                  ['product', '2015', '2016', '2017'],
                  ['青年', 43.3, 85.8, 93.7],
                  ['中年', 83.1, 73.4, 55.1],
                  ['老年', 86.4, 65.2, 82.5],
                      ['流浪宠物', 72.4, 53.9, 39.1]
              ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
          ]
      };

      myChart.setOption(this.lineOption1);
    }
  }
</script>
