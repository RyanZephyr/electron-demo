import Vue from 'vue';
import axios from 'axios';

import App from './App';
import store from './store';

/* process.env.IS_WEB只有在渲染过程才能获取，如果项目在electron环境下则返回false，否则返回true */
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>',
}).$mount('#app');
