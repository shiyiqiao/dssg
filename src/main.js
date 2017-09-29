// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import elementUI from "element-ui"
import 'element-ui/lib/theme-default/index.css'
import './assets/css/font-awesome.min.css'
import './assets/fonts/iconfont.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
//import $ from 'jquery'
Vue.use(vueResource);
Vue.use(elementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
