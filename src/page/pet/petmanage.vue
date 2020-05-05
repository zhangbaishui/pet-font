<template>
  <el-card>
    <div>
      <el-row >
        <el-col :span="24" style="margin-top: 10px">
          <div class="grid-content bg-purple-dark">
            <el-carousel height="350px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
      <div style="margin-top: 20px"><span>您的宠物:</span></div>
      <el-row>
        <el-col :span="24" style="margin-top: 10px">
          <div class="grid-content bg-purple-dark">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="id"
                label="编号">
              </el-table-column>
              <el-table-column
                prop="petName"
                label="宠物名">
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型">
              </el-table-column>
              <el-table-column
                prop="petAge"
                label="年龄">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
                <template slot-scope="scope">
                  <el-tooltip class="item" effect="dark" content="查看" placement="top-end">
                    <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-view"></i>
                    </el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
                    <el-button type="text" size="small"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script>
    export default {
        name: 'petmanage',
        components: {},
        data() {
            return {
                tableData: [{
                    id: '2016-05-02',
                    petName: '王小虎',
                    type: '上海市普陀区金沙江路 1518 弄',
                    petAge: '18',
                },
                    {
                        id: '2016-05-02',
                        petName: '王小虎',
                        type: '上海市普陀区金沙江路 1518 弄',
                        petAge: '18',
                    },
                    {
                        id: '2016-05-02',
                        petName: '王小虎',
                        type: '上海市普陀区金沙江路 1518 弄',
                        petAge: '18',
                    }]
            };
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 === 1) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>
<style>
  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
<style scoped>

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
