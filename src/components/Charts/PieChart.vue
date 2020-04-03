<template>
  <div id="aa" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
  export default {
    name: 'PieChart',
    components: {},
    data() {
      return {
      };
    },
    mounted() {
      var myChart = this.$echarts.init(document.getElementById('aa'));
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ],
        color: ['rgb(239,219,200)','rgb(137,246,100)','rgb(155,314,203)','rgb(155,155,146)','rgb(111,222,100)']
      })

    }
  }
</script>
