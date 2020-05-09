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
          <el-tag type="success">宠物时长:</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" style="margin-top: 10px"></el-col>
      <el-col :span="23" style="margin-top: 10px">
        <div class="grid-content bg-purple-dark">本系统已经为您服务了 120 天</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-top: 18px">
        <div class="grid-content bg-purple-dark">
          <el-tag>消费状况:</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" style="margin-top: 10px"></el-col>
      <el-col :span="23" style="margin-top: 10px">
        <div class="grid-content bg-purple-dark">您为您的宠物们总共花费了 34400 元</div>
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
      <div v-for="size in sizeList" :key="size">
        <el-col :span="1" style="margin-top: 10px"></el-col>
        <el-col :span="23" style="margin-top: 18px">
          <div class="grid-content bg-purple-dark">
            <div class="demo-basic--circle" @click="petDetial">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
              <div style="margin-left: 8px;opacity: 0.8"><span>小绿</span></div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'usermanage',
    components: {},
    data() {
      return {
        name:'泉哥你好帅',
        mail:'2015781147@qq.com',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        sizeList: ["large", "medium", "small"]
      };
    },

    created(){
        this.getUserData()
    },
    methods: {
      getUserData(){
        
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
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
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
          this.$message({
            type: 'success',
            message: '你的名字是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      petDetial() {
        this.$router.push({path: '/petDetial', query: {id: "1213"}})
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
