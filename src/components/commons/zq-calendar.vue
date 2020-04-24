<template>
  <div>
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <div>
        <p :class="data.isSelected ? 'is-selected' : ''" v-if="date.getDay()!==0 && date.getDay()!==6" @click="aa(data)">
          {{ data.day.split('-').slice(1).join('-') }} 上班
        </p>

          <p :class="data.isSelected ? 'is-selected' : ''" v-if="!(date.getDay()!==0 && date.getDay()!==6)" >
            {{ data.day.split('-').slice(1).join('-') }} 放假！
          </p>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
  export default {
    name: 'zqCalendar',
    components: {},
    data() {
      return {};
    },
    created (){
      this.init()
    },
    methods:{
      init(){
        var date = new Date()
        console.log(date.getMonth())
      },
      aa(val){
        console.log(val)
      },
      handleSelected(day) {
        let flag = 0; //默认显示为0
        this.attendanceDetailsData.forEach(item => { //this.attendanceDetailsData是后台返回的数据
          if (item.number== day) {  //判断显示数据
            flag = item.number;
            return
          }
        })
        return flag
      }
    }
  }
</script>
<style scoped>
  /deep/ .el-calendar__header {
    padding: 6px 10px  ;
  }
  /deep/ .el-calendar__body {
    padding: 6px 5px 5px;
    height: 300px;
  }

  /deep/ .current{
    height: 25px;
  }
  /deep/ .el-calendar-table thead th {
     padding: 3px 0;
    color: #606266;
    font-weight: 400;
  }
  /deep/ .el-calendar-day{
    height: 25px;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .is-selected {
    color: #1989FA;
  }
</style>

