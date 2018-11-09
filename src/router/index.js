import Vue from 'vue'
import Router from 'vue-router'


// 引入home组件
// //首页
import home from '../components/home'
//借还
import borrow from  '../components/borrow'
// 社区
import community from '../components/community'
// 我的
import personage from '../components/personage'


Vue.use(Router)


const router = new Router({
  //routes 里面写路由规则
  mode:'history',
  routes: [
    {
      path: '/',
      component:home
    },
    {
      path:'/borrow',
      component:borrow
    },
    {
      path:'/community',
      component:community
    },
    {
      path:'/personage',
      component:personage
    },
    {
      path:'/home',
      component:home
    }
  ]
})
export default router;
