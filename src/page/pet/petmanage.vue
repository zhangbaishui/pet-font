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
      <div style="margin-top: 20px">
        <span>您的宠物:</span>
        <el-button size="small" style="float: right; margin-right: 2em;" type="success" @click="addpet()">添加宠物</el-button>
        <add-pet :show="this.showAdd"  :userId="this.userId"   v-on:shuaxin="shuaxin"/>
      </div>

      <el-row>
        <el-col :span="24" style="margin-top: 10px">
          <div class="grid-content bg-purple-dark">
            <el-table
              v-loading="loading"
              :data="pets"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="id"
                label="编号">
              </el-table-column>
              <el-table-column
                prop="pet_name"
                label="宠物名">
              </el-table-column>
              <el-table-column
                prop="pet_status"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型">
                <template slot-scope="scope">
                  <el-tag
                    type="primary"
                    disable-transitions>{{getPetType(scope.row.type)}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="pet_age"
                label="年龄">
              </el-table-column>
              <el-table-column
                prop="pet_desc"
                label="描述"
                width="450">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
                <template slot-scope="scope">
                  <el-tooltip class="item" effect="dark" content="查看" placement="top-end">
                    <el-button @click="queryPet(scope.row.id)" type="text" size="small"><i class="el-icon-view"></i>
                    </el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
                    <el-button type="text" size="small" @click="deletePet(scope.row.id)"><i class="el-icon-delete"></i></el-button>
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
    import AddPet from "./addpet";
    import Cookies  from  'js-cookie';
    export default {
        name: 'petmanage',
        components: {AddPet},
        created(){
          this.getCookie()
            this.queryAllType()
        },

        data() {
            return {
                types:[],
                userId:'',
                pets:[],
                loading:true,
              showAdd: false,
            };
        },
        methods: {
            deletePet(id){
                this.$confirm('此操作将永久删除该所有宠物信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('http://localhost:10010/api/pet/pet/deleteById', {
                        id: id
                    }, {emulateJSON: true}).then((res) => {
                        this.$message.success("删除成功");
                        this.getCookie();
                    }).catch((res) => {
                        this.$message.error("服务器异常，请重新删除")
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            getPetType(val){
                for (let i = 0; i< this.types.length;i++){
                    if (val === this.types[i].type_id){
                        return this.types[i].type_name;
                    }
                }
            },
            queryAllType(id) {
                this.$http.post('http://localhost:10010/api/pet/pet/queryAllType', {
                }, {emulateJSON: true}).then((res) => {
                    this.types = res.data.types;
                }).catch((res) => {
                    this.$message.error("获取类型异常")
                });
            },
              getCookie(){
                if (Cookies.get('user') !== undefined) {
                    let user = JSON.parse(Cookies.get('user'));
                    this.getUserData(user.name,user.mail)
                }

            },

            getUserData(name,mail) {
                this.$http.post('http://localhost:10010/api/pet/user/getId', {
                    name: name,
                    mail: mail,
                }, {emulateJSON: true}).then((res) => {
                    this.userId  =  res.data.id;
                        this.pets = res.data.pets;
                        this.loading =false;
                }).catch((res) => {
                    this.$message.error("请求用户信息异常")
                });
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 === 1) {
                    return 'success-row';
                }
                return '';
            },
            queryPet(id){
                this.$router.push({path: '/petDetial', query: {id: id,path:'pet'}})
            },
          addpet(){
              this.showAdd =true;
          },
            shuaxin(val){
                console.log(val)
                this.showAdd = false;
                console.log(this.showAdd)
                this.getCookie()
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
