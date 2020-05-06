<template>
  <div>
  <div class="login-container">
    <div class="zq-from">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form"
               label-position="top">
        <div class="title-container">
          <h3 class="title">登录 管理</h3>
        </div>

        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="ruleForm.user" @blur=""></el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" placeholder="密码"></el-input>
        </el-form-item >

        <el-form-item prop="inVCode" v-if="isInVcode">
          <div>
            <div style="float: left;padding-left: 40px">
              <el-input style="width: 300px;" v-model="ruleForm.inVCode" placeholder="请输入验证码"></el-input>
            </div>
            <div style="float: right;padding-right: 40px">
              <valid-code :value.sync="validCode" style="background-color: #eeeeee"></valid-code>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 85%">登录</el-button>
        </el-form-item>
      </el-form>
      <div style="float: right; margin-right: 20px">
        <el-button type="text">忘记密码</el-button>
        <el-button type="text" @click="showRegister = true">注册</el-button>
      </div>
    </div>
  </div>
  <register :show="this.showRegister" v-on:showRegis="showRegisChange"/>
  </div>
</template>
<script>
  import validCode from "@/components/commons/validCode.vue"
  import Register from "./register";

  export default {
    name: 'index',
    components: {Register, validCode},
    data() {
      var validateUesr = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          // if (this.ruleForm.pass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      var validateVCode = (rule, value, callback) => {
        /*验证码忽略大小写*/
        var upper = this.validCode.toUpperCase();
        var s = value.toUpperCase();
        if (value === '' && this.isInVcode===true) {
          callback(new Error('请输入验证码'));
        } else if (s !== upper && this.isInVcode===true) {
          callback(new Error('验证码不正确'));
        } else {
          callback();
        }
      };
      return {
          bb:true,
          nameIsExit:true,
        isInVcode:true,

        /*注册*/
        showRegister:false,
        pass: '',
        validCode: '',
        ruleForm: {
          user: '',
          pass: '',
          inVCode:'',

        },
        rules: {
          user: [
            {validator: validateUesr, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          inVCode: [
            {validator: validateVCode, trigger: 'blur'}
          ],

        }
      };
    },
    methods: {
      shuaxin(){location.reload()},
      submitForm(formName) {

         console.log(this.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (valid) {
                 this.nameIsExitMethod();

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        nameIsExitMethod(){
            this.$http.get('http://localhost:10012/api/pet/user/namePassIsTrue',{
                params:{
                    name: this.ruleForm.user,
                    pass: this.ruleForm.pass
                }
            },false).then((res)=>{
                this.nameIsExit = res.data.ist;
                console.log("dadda"+this.nameIsExit)
                if (this.nameIsExit === true){
                    this.$message.success("登录成功")
                    sessionStorage.setItem("user",this.ruleForm.user);
                    this.$router.push({path:'/dashboard'})
                }
                else {
                    this.$message.error("账号密码错误，请重新登录")
                }
            }).catch((res)=>{
                this.$message.error("系统异常")
            });
        },

      showRegisChange(val){
        this.showRegister =val;
      }
    }
  }
</script>
<style scoped>
  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    text-align: center;
  }

  .zq-from {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 20px 40px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 70px 0px 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .title-container {
    position: relative;
  }

  .title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .el-input {
    display: inline-block;
    margin: 0 auto;
    width: 85%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  /deep/ .el-form-item__error {
    padding-left: 40px;
  }
</style>
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
  }
</style>

