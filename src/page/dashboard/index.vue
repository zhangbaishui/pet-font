<template>
  <el-container :style="'height:'+fullHeight+'px;'">
    <el-header>
      <div class="header_logo">
        <el-image :src="header_logo_img" style="width: 75px;height: 60px; "/>
      </div>
      <div class="zq_header_input">
        <el-input   placeholder=”请输入内容” prefix-icon="el-icon-search">
        </el-input>
      </div>
    </el-header>
    <el-container>
      <el-aside width=”80px”>Aside</el-aside>
      <el-main>
        傻逼卢本伟准备就绪
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import  Appmain  from  "@/page/layout/AppMain"
  import  Navbar  from  "@/page/layout/Navbar"
  import  Sidebar  from  "@/page/layout/Sidebar"
  import ElImageViewer from "element-ui/packages/image/src/image-viewer";
  import logo from '@/assets/img/danshengdog.png'
export default {
  name: 'layout',
  components: {
    ElImageViewer,
      Navbar,
      Sidebar,
      Appmain
  },
  data() {
    return {
      header_logo_img: logo,
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function (){
          that.timer = false
        },400)
      }

    }
  },
  mounted () {
    this.get_bodyHeight()
  },
  methods : {
    get_bodyHeight() {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
  }
</script>
<style  scoped>
  .el-header{
    background-color: #545E6A;
    color: #F6F6F6;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header_row {
    height: 60px;
  }
  .el-aside {
    background-color: #3D464F;
    color: #828692;
    width: 8%;
    text-align: center;
    line-height: 600px;
  }
  .el-main {
    background-color: #283647;
    color: #E6E8EA;
    text-align: center;
    line-height: 600px;
  }
  .header_logo {
    flex: 3;
    display: flex;
    justify-content: left;
    margin-left: 60px;
  }

  .zq_header_input {
    width: 200px;
  }
</style>
<style>
</style>
