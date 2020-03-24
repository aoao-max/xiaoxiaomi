import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'./assets/js/flexible.min.js'
import './assets/css/animate.min.css'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);
import { Notify } from 'vant';
Vue.use(Notify);

import axios from 'axios'
Vue.prototype.$http = axios;

import { GoodsAction} from 'vant';
Vue.use(GoodsAction);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
