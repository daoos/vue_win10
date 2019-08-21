console.log('版本:' + process.env.VERSION);
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './base.css'
import './assets/iconfont/iconfont.css'
import './http/axios'

import './mainJs/directive';
Vue.use(require('vue-moment'));

Vue.config.devtools = true;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
