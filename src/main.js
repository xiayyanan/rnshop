// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http请求
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
Vue.use(vuescroll)
Vue.use(MintUI)
//import VueTouch from 'vue-touchjs'
//Vue.use(VueTouch);

Vue.config.productionTip = false;
Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
