<template>
  <div>
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
  </div>
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


  }
</script>
<style  scoped>
</style>
<style>
  .zq-container-main{
    margin: 2px;
    background: #fff;
  }
</style>
