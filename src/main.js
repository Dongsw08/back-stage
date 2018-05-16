// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import "./reset.css";
import ElementUI from 'element-ui';
import  "element-ui/lib/theme-chalk/index.css";
import App from './App';
import router from './router';
import Vuex from "vuex";


//Vue.prototype.$ELEMENT = { size:'small' };

Vue.use(ElementUI,{size:'small'});
//Vue.use(Vuex);
Vue.config.productionTip = false;

import store from "./store/store.js";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
