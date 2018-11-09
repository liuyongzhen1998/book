// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//矢量图图表库
import { Button } from 'vant'
import { Row, Col } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Button).use(Row).use(Col).use(Tabbar).use(TabbarItem);


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
