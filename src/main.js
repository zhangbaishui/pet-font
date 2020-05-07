// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter  from  'vue-router';
// import store from  './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import echarts from  'echarts';
import VueResource from 'vue-resource';
import Cookies  from  'js-cookie';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>',
})

/*前端校验cookie*/
router.beforeEach((to,from,next)=>{
  // console.log(sessionStorage.getItem('user'))
  // console.log(to.path)
  if(to.path === '/login'){
    // sessionStorage.removeItem('user');
    Cookies.remove('user')
  }
  // var user = sessionStorage.getItem('user');
  var user ={};
  if (Cookies.get('user') !== undefined) {
     user  =  JSON.parse(Cookies.get('user'));
  }
  if(user.name === undefined  && to.path !== '/login'){
    next({
      path: '/login'
    })
  }else{
    next();
  }
})

