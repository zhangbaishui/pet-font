<template>
  <div>
    <el-page-header style="color: #2d3a4b;margin-top: 10px;margin-left: 10px" @back="goBack" content="宠物详情"/>


    <el-row :gutter="20" style="margin-top: 25px">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <el-card style="height: 600px">
            <div slot="header" class="clearfix">
              <span>宠物信息</span>

              <el-tooltip class="item" effect="dark" content="编辑宠物信息" placement="top">
                <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true"><i
                  class="el-icon-edit"></i></el-button>
              </el-tooltip>


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
                    <el-radio-group v-model="form.hobby">
                      <el-radio label="唱跳rap" name="type"></el-radio>
                      <el-radio label="游泳" name="type"></el-radio>
                      <el-radio label="爱吃" name="type"></el-radio>
                      <el-radio label="爱玩" name="type"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="宠物类型" :label-width="formLabelWidth" prop="type">
                    <el-select style="width: 50%" v-model="form.type" placeholder="请选择宠物类型">
                      <div v-for="(type,index)  in  types">
                        <el-option :label="type.type_name" :value="type.type_id"></el-option>
                      </div>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="宠物状态" :label-width="formLabelWidth" prop="status">
                    <el-select style="width: 50%" v-model="form.status" placeholder="请选择宠物状态">
                      <el-option label="健康" value="健康"></el-option>
                      <el-option label="患病" value="患病"></el-option>
                      <el-option label="死亡" value="死亡"></el-option>
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
            <div style="text-align: center; margin-top: 2em">
              <el-avatar :size="100" icon="el-icon-user-solid">
                <!--                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>-->
              </el-avatar>
            </div>
            <div style="text-align: center; margin-top: 5px">
              <span>{{this.pet.pet_name}}</span>
            </div>
            <div style="  margin-top: 35px">
              <span>describtion:  </span>
              <el-divider></el-divider>
              <span>{{this.pet.pet_desc}}</span>
            </div>
            <div style="margin-top: 60px;">
              <div style="margin-top: 5px;font-size: 13px">
                <span>宠物员工好感度</span>
                <el-progress :percentage="89"></el-progress>
              </div>

              <div style="margin-top: 20px;font-size: 13px">
                <span>陌生人契合度</span>
                <el-progress :percentage="78"></el-progress>
              </div>
              <div style="margin-top: 20px;font-size: 13px">
                <span>信息填写</span>
                <el-progress :percentage="100" status="success"></el-progress>
              </div>
            </div>

          </el-card>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-dark">
          <el-card style="height: 800px">
            <el-row :gutter="20" style="margin-top: 25px">
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <div style="margin-left: 20px"><span style="color: #67C23A"><i class="el-icon-star-on"/>宠物名:</span>
                    <span style="margin-left: 40px">{{this.pet.pet_name}}</span></div>

                  <div style="margin-left: 20px;margin-top: 3em"><span style="color: #67C23A;font-size: 20px">
                    <i class="el-icon-star-on"/>宠物类型:</span> <span style="margin-left: 40px">{{this.petType()}}</span>
                  </div>

                  <div style="margin-left: 20px;margin-top: 3em"><span style="color: #67C23A;">
                    <i class="el-icon-star-on"/>宠物年龄:</span> <span
                    style="margin-left: 40px">{{this.pet.pet_age}} 岁</span>
                  </div>

                  <div style="margin-left: 20px;margin-top: 3em"><span style="color: #67C23A;font-size: 20px">
                    <i class="el-icon-star-on"/>状态:</span> <span
                    style="margin-left: 40px">{{this.pet.pet_status}}</span>
                  </div>
                  <!--照片组-->
                  <!--                  <div class="demo-image__preview">-->
                  <!--                    <el-image-->
                  <!--                      style="width: 100px; height: 100px"-->
                  <!--                      :src="url"-->
                  <!--                      :preview-src-list="urls">-->
                  <!--                    </el-image>-->
                  <!--                  </div>-->
                  <div style="margin-left: 20px;margin-top: 3em"><span style="color: #67C23A;font-size: 20px">
                    <i class="el-icon-star-on"/>喜好:</span> <span style="margin-left: 40px">{{this.pet.hobby}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="16" style="border: rgb(242, 242, 242) solid 2px">
                <div class="grid-content bg-purple-dark">
                  <div style=" margin-top: 20px;margin-bottom:20px;opacity: 0.7;">
                    <span>照片墙:</span>
                  </div>
                  <div class="demo-image__lazy">
                    <el-image v-for="url in urls" :key="url" :src="url"></el-image>
                  </div>

                  <div style="margin-top: 2em; font-size: 20px;opacity: 0.7; margin-bottom: 20px">
                      <span>
                        {{this.juzi[getRandomInt(0,4)]}}
                      </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: 'petdatial',
        components: {},
        created() {
            this.getPetData(this.$route.query.id);
            this.queryAllType()
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
                types:[],
                pet: {},
                dialogFormVisible: false,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
                juzi: [
                    "   曾经的照片,撒了一地的猝不及防,想要忘记,却成了回忆……",
                    "   你真以为你能忘了,说不定某一照片某一话语某一物什某一刹那,花开成海,思念成灾。",
                    "   那些照片,都是每一次,我想你时候的天空。",
                    "   每当我翻开相册,随着一张张照片沉浸在一段段幸福的回忆时,就会不由自主地想起一件有趣的事情..",
                    "   照片这东西不过是生命的碎壳;纷纷的岁月已过去,瓜子仁一粒粒咽了下去,滋味各人自己知道...",

                ],
                formLabelWidth: '120px',
                form: {
                    petName: '',
                    petAge: '',
                    type: '',
                    status: '',
                    hobby: '',
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
                        {required: true, message: '请至少选择一个喜好', trigger: 'change'}
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
            queryAllType(id) {
                    this.$http.post('http://localhost:10010/api/pet/pet/queryAllType', {
                    }, {emulateJSON: true}).then((res) => {
                        this.types = res.data.types;
                    }).catch((res) => {
                        this.$message.error("获取类型异常")
                    });
            },
            getPetData(id) {
                this.$http.post('http://localhost:10010/api/pet/pet/getPetById', {
                    id: id
                }, {emulateJSON: true}).then((res) => {
                    this.pet = res.data.pet;
                    this.form.petName = this.pet.pet_name;
                    this.form.hobby = this.pet.hobby;
                    this.form.petAge = this.pet.pet_age;
                    this.form.desc = this.pet.pet_desc;
                    this.form.status = this.pet.pet_status;
                    this.form.type = this.pet.type


                }).catch((res) => {
                    this.$message.error("系统异常")
                });
            },
            petType(){
                for (let i = 0; i< this.types.length;i++){
                    if (this.pet.type === this.types[i].type_id){
                        return this.types[i].type_name;
                    }
                }
            },
            goBack() {
                this.$router.push({path: '/'+this.$route.query.path})
            },
            /*随机整数*/
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogFormVisible = false;
                        this.$http.post('http://localhost:10010/api/pet/pet/update', {
                            id:this.$route.query.id,
                            petName: this.form.petName,
                            petAge: this.form.petAge,
                            type: this.form.type,
                            status: this.form.status,
                            hobby: this.form.hobby,
                            // image: this.image,
                            desc: this.form.desc
                        }, {emulateJSON: true}).then((res) => {
                            this.getPetData(this.$route.query.id)
                        }).catch((res) => {
                            this.$message.error("修改宠物信息异常")
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
<style>

</style>
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
