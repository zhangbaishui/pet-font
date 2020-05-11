<!--Quan.Zhang: 注册页面-->
<template>
  <div>
    <!--编辑用户信息-->
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" top="5vh">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="name">
          <el-input style="width: 50%" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth" prop="pass">
          <el-input type="password" style="width: 50%" v-model="form.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="再次确认密码" :label-width="formLabelWidth" prop="twopass">
          <el-input type="password" style="width: 50%" v-model="twopass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入手机号" :label-width="formLabelWidth" prop="iphone">
          <el-input style="width: 50%" v-model="form.iphone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请选择性别" :label-width="formLabelWidth" prop="gender">
          <el-radio-group v-model="form.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="请输入年龄" :label-width="formLabelWidth" prop="age">
          <el-input style="width: 50%" v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入邮箱" :label-width="formLabelWidth" prop="mail">
          <el-input style="width: 50%" v-model="form.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择上传头像" :label-width="formLabelWidth">
          <el-upload
            style="width: 50%"
            class="upload-demo"
            action="http://localhost:10010/api/pet/user/uploadFile"
            accept="image/jpeg,image/jpg,image/png"
            :on-change="handleChange"
            :file-list="form.image"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-form-item style="margin-left: 70%">
          <el-button @click="resetForm('ruleForm')">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'register',
    props: {
      show: {
        type: Boolean,
        default: false
      },
    },
    components: {},
    watch: {
      show(val) {
        this.dialogFormVisible = val;
      },
      dialogFormVisible(val) {
        this.$emit('showRegis', val);
      }
    },
    data() {

      let percent = /^(?:[1-9]?\d|100)$/;
      let isPercent = (rule, value, callback) => {
        if (!percent.test(value)) {
          return callback(new Error('请输入0-100的整数'))
        } else {
          callback()
        }
      };
      let ispassTrue = (rule, value, callback) => {
        if (this.twopass !== this.form.pass) {
          return callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      };
      let mail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      let isMail = (rule, value, callback) => {
        if (!mail.test(value)) {
          return callback(new Error('邮箱格式有误'))
        } else {
          callback()
        }
      };
      let phone = /^1[3|4|5|8][0-9]\d{4,8}$/;
      let isPhone = (rule, value, callback) => {
        if (!phone.test(value)) {
          return callback(new Error('手机号格式不正确'))
        } else {
          callback()
        }
      };
      return {
        ossData:{
            accessKeyId: 'LTAI4Fe95ZULzQFxdPi62sKn',
            accessKeySecret: 'wcfDs9JvM0KpCzjNnmvQnA4ODK95gf',
            bucket: 'baishui-1',
            region: 'oss-cn-hangzhou'
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
        twopass:'',
        form: {
          name: '',
          pass: '',
          gender: '',
          iphone: '',
          mail: '',
          age: '',
          image: [],
        },
        rules: {
          name: [
            {required: true, message: '请输入名字', trigger: 'blur'},
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          iphone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: isPhone, trigger: 'blur'}
          ],
          twopass: [
            {validator: ispassTrue, trigger: 'blur'}
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
            ],
          age: [
            {required: true, message: '请输入年龄', trigger: 'blur'},
            {validator: isPercent, trigger: 'blur'}
          ],
          mail: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {validator: isMail, trigger: 'blur'}
          ],


        }
      };
    },
    methods: {
      handleChange(file,fileList) {
        let bo = this.beforeAvatarUpload(file);
        if(!bo){
          //图片不符合规范
          this.form.image = [];     //图片列表赋值为空
          return;
        }
        //如果图片符合 规范，将之前的图片剪切，覆盖掉
        this.form.image = fileList.slice(-1);
      },
      //图片判断，大小
      beforeAvatarUpload(file) {
        // const isJPG = file.raw.type == 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        // return isJPG && isLt2M;
        return isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false;
            /*请求*/

            let  user =  this.form;
            let  url  = null;
              //判断是否有文件
              console.log(this.form.image)
            if(this.form.image.length!==0){
                url = this.form.image[0].response
            }
            let  image = [];
            this.$http.post('http://localhost:10010/api/pet/user/register',{
                name: user.name,
                pass: user.pass,
                gender: user.gender,
                iphone: user.iphone,
                mail: user.mail,
                age: user.age,
                image: url,
            },{emulateJSON:true,processData: false, //因为data值是FormData对象，不需要对数据做处理。
                contentType: false,}).then((res)=>{
              this.$message.success(res.data.message)
            }).catch((res)=>{
              this.$message.error("系统异常")
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
        this.$message("已取消编辑")
      }

    }
  }
</script>

<style scoped>
  .demo-image__lazy {
    height: 400px;
    overflow-y: auto;
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

