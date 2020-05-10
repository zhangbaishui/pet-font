<template>
  <el-card>
    <el-row :gutter="15">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <div class="demo-type">
            <el-avatar :size="100" src="" @error="errorHandler">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple-light">
          <div class="zq-float-text"><span>用户名:{{this.name}}</span>
            <el-button style="margin-left: 20px" type="success" icon="el-icon-edit" @click="editName" circle>
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple-light">
          <div class="zq-float-text">
            <span>个人邮箱:{{this.mail}}</span>
            <el-button style="margin-left: 20px" type="success" icon="el-icon-edit" @click="open" circle>
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-top: 18px">
        <div class="grid-content bg-purple-dark">
          <el-tag type="success">注册时间:</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" style="margin-top: 10px"></el-col>
      <el-col :span="23" style="margin-top: 10px">
        <div class="grid-content bg-purple-dark"> {{this.createTime}} </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-top: 18px">
        <div class="grid-content bg-purple-dark">
          <el-tag>性别:</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" style="margin-top: 10px"></el-col>
      <el-col :span="23" style="margin-top: 10px">
        <div class="grid-content bg-purple-dark">{{this.gender }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-top: 18px">
        <div class="grid-content bg-purple-dark">
          <el-tag type="warning">您的宠物:</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div v-for="(pet,index) in pets">
        <el-col :span="1" style="margin-top: 10px"></el-col>
        <el-col :span="23" style="margin-top: 18px">
          <div class="grid-content bg-purple-dark">
            <div class="demo-basic--circle" @click="petDetial(pet.id)">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
              <div style="margin-left: 8px;opacity: 0.8"><span>{{pet.pet_name}}</span></div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </el-card>
</template>
<script>
    import Cookies  from  'js-cookie';
    export default {
        name: 'usermanage',
        components: {},
        data() {
            return {
                id: '',
                name: '',
                mail: '',
                gender:'',
                createTime :'',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                sizeList: ["large", "medium", "small"],
                pets:[],
            };
        },

        created() {
            this.getCookie()
        },
        methods: {
            getCookie(){
                if (Cookies.get('user') !== undefined) {
                    let user = JSON.parse(Cookies.get('user'));
                    this.name= user.name;
                        this.mail= user.mail;
                }
                this.getUserData(this.name,this.mail)
            },
            getUserData(name,mail) {
                    this.$http.post('http://localhost:10010/api/pet/user/getUser', {
                        name: name,
                        mail: mail,
                    }, {emulateJSON: true}).then((res) => {
                        this.id = res.data.id,
                        this.name = res.data.name,
                        this.mail = res.data.mail,
                       this.gender = res.data.gender,
                       this.createTime  = new Date(res.data.createTime);
                        this.pets  =  res.data.pets;
                    }).catch((res) => {
                        this.$message.error("请求用户信息异常")
                    });
            },
            errorHandler() {
                return true
            },
            open() {
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确',
                    inputValue: this.mail
                }).then(({value}) => {
                    this.$http.post('http://localhost:10010/api/pet/user/updateMali', {
                        id: this.id,
                        mail: value
                    }, {emulateJSON: true}).then((res) => {
                        Cookies.remove('user');
                        this.mail = value;
                        Cookies.set('user',{name:this.name,mail:this.mail},{ expires: 3, path: ''});
                        this.$message.success(res.data.message);
                        this.getUserData(this.name,value)
                    }).catch((res) => {
                        this.$message.error("系统异常")
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            editName() {
                this.$prompt('请修改的名字', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPlaceholder: "输入姓名",
                    inputPattern: /\S/,
                    inputErrorMessage: '名字不能为空',
                    inputValue: this.name
                }).then(({value}) => {
                    this.$http.post('http://localhost:10010/api/pet/user/uupdateName', {
                        id: this.id,
                        name: value
                    }, {emulateJSON: true}).then((res) => {
                        Cookies.remove('user');
                        this.name = value;
                        Cookies.set('user',{name:this.name,mail:this.mail},{ expires: 3, path: ''});
                        this.getUserData(value,this.mail)
                        this.$message.success(res.data.message)
                    }).catch((res) => {
                        this.$message.error("系统异常")
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            petDetial(val) {
                this.$router.push({path: '/petDetial', query: {id: val,path:'user'}})
            }

        }
    }
</script>
<style scoped>
  .zq-float-text {
    padding-top: 40px;
    font-size: 20px;
    opacity: 0.6;
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
</style>
