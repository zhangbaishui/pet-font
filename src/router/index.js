import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/index'
import Main from '@/page/dashboard/index'

Vue.use(Router)

export default new Router(
  {
    mode: "history",
    routes: [
      {
        path: '/',
        redirect: 'login',
      },
      {
        path: '/login',
        name: '登录',
        component: login
      },
      {
        path: '/index',
        name: 'Main',
        component: Main,
        children: [
          {
          path: '/dashboard',
          component: () => import("@/page/dashboard/dashboard"),
          name: '首页'
           },
          {
            path: '/user',
            component: () => import("@/page/user/usermanage"),
            name: '用户管理'
          }
        ]
      }
    ]
  })


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
