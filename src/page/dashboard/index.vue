<template>
  <el-container :style="'height:'+fullHeight+'px;'">
    <el-header>
      <div class="header_logo">
<!--        <el-image :src="header_logo_img" style="width: 75px;height: 60px; "/>-->
        欢迎 来到 泉哥 vue项目
      </div>
      <div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#283647"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-submenu index="2">
            <template slot="title">个人信息</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="zq_header_input">
        <el-input   placeholder=”请输入内容” prefix-icon="el-icon-search">
        </el-input>
      </div>
    </el-header>
    <el-container>
      <el-aside width="201px">
        <div>
          <el-col :span="12">
            <el-menu
              :router="true"
              :default-openeds="['2']"
              default-active="dashboard"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="rgb(242, 242, 242)">
              <el-menu-item index="dashboard">
                <i class="el-icon-s-home"></i>
                <span slot="title" >首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-platform"></i>
                  <span>样板管理</span>
                </template>
                  <el-menu-item index="user">样板信息</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </div>
      </el-aside>
      <el-main>
<!--        <div class="zq-container-main">-->
<!--      </div>-->
          <template>
            <router-view/>
          </template>
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
      activeIndex2:'1',
      isCollapse: false,
      header_logo_img: logo,
      fullHeight: document.documentElement.clientHeight
    }
  },
  created(){

  },
  watch: {
    fullHeight (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
    background-color: #283647;
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
    background-color:rgb(242, 242, 242);
    width: 8%;
  }
  .el-main {
    /*background-color: #283647;*/
    background-color: #FFFFFF;
    color: #E6E8EA;
    padding:13px;
  }
  .header_logo {
    flex: 3;
    display: flex;
    justify-content: left;
  }

  .zq_header_input {
    width: 200px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border-right: 0;
    border-bottom: 0;
  }
</style>
<style>
  .zq-container-main{
    margin: 2px;
    background: #fff;
  }
</style>
