// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/lib-flexible/flexible.js'
import './common/fot/font.css'
import store from '@/store'
import axios from 'axios'
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant'
import { Row, Col } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Card } from 'vant';
import { Rate } from 'vant';

Vue.use(Button).use(Row).use(Col).use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(Checkbox).use(CheckboxGroup);
Vue.use(Card).use(Rate);

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
