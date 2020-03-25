import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/index'
import Main from  '@/page/dashboard/index'
import  dashboard  from  '@/page/dashboard/dashboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'Main',
      component: Main,
      children:[{
        path: '/dashboard',
        component:dashboard,
        name:'首页'
      }
      ]
    }
  ]
})
