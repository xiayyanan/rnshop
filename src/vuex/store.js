//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import detail from './modules/detail'
import category from './modules/category'
import order from './modules/order'
import login from './modules/login'

export default new Vuex.Store({
	modules: {
		detail,
		category,
		order,
		login
	}
})