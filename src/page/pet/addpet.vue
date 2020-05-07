<!--Quan.Zhang: 注册页面-->
<template>
  <div>
    <!--编辑宠物信息-->
    <el-dialog title="编辑宠物" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="宠物名称" :label-width="formLabelWidth" prop="petName">
          <el-input style="width: 50%" v-model="form.petName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="宠物年龄" :label-width="formLabelWidth" prop="petAge">
          <el-input style="width: 50%" v-model="form.petAge" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="喜好" :label-width="formLabelWidth" prop="hobby">
          <el-checkbox-group v-model="form.hobby">
            <el-checkbox label="唱跳rap" name="type"></el-checkbox>
            <el-checkbox label="游泳" name="type"></el-checkbox>
            <el-checkbox label="爱吃" name="type"></el-checkbox>
            <el-checkbox label="爱玩" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="宠物类型" :label-width="formLabelWidth" prop="type">
          <el-select style="width: 50%" v-model="form.type" placeholder="请选择宠物类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="宠物状态" :label-width="formLabelWidth" prop="status">
          <el-select style="width: 50%" v-model="form.satus" placeholder="请选择宠物状态">
            <el-option label="健康" value="1"></el-option>
            <el-option label="患病" value="2"></el-option>
            <el-option label="死亡" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="该宠物描述" :label-width="formLabelWidth" prop="desc">
          <el-input style="width: 50%" type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="该宠物照片" :label-width="formLabelWidth" prop="image">
          <el-upload
            style="width: 50%"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
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
    name: 'addPet',
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
        this.$emit('showDailog', val);
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
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        twopass:'',
        form: {
          petName: '',
          petAge: '',
          type: '',
          status: '',
          hobby: [],
          image: [],
          desc: ''
        },
        rules: {
          petName: [
            {required: true, message: '请输入名字', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          petAge: [
            {required: true, message: '请输入年龄', trigger: 'change'},
            {validator: isPercent}
          ],
          hobby: [
            {type: 'array', required: true, message: '请至少选择一个喜好', trigger: 'change'}
          ],
          type: [
            {required: true, message: '请选择宠物类型哦', trigger: 'change'}
          ],
          status: [
            {required: true, message: '请选择宠物状态哦', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写宠物描述哦', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      handleRemove(file,fileList) {
        console.log(file,fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false;
            /*请求*/
            let  pet =  this.form;
            this.$http.post('http://localhost:10010/api/pet/user/register',{
              params:{
                pet: pet
              }
            },false).then((res)=>{
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

