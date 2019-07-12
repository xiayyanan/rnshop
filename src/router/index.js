import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from '@/vuex/store.js'

import PageTransition from '@/views/PageTransition'
const index = (resolve) => require(['@/views/index.vue'], resolve)
const category = (resolve) => require(['@/views/category.vue'], resolve)
const list = (resolve) => require(['@/views/list.vue'], resolve)
const detail = (resolve) => require(['@/views/detail.vue'], resolve)
const evaluate = (resolve) => require(['@/views/evaluate.vue'], resolve)
const car = (resolve) => require(['@/views/car.vue'], resolve)
const order = (resolve) => require(['@/views/order.vue'], resolve)
import addressAdd from '@/views/addressAdd'
import addressEdit from '@/views/addressEdit'
import pay from '@/views/pay'
import payok from '@/views/payok'
import user from '@/views/user/user'
import myOrderTransition from '@/views/user/myOrderTransition'
const myOrder = (resolve) => require(['@/views/user/myOrder.vue'], resolve)
import myOrderEvaluation from '@/views/user/myOrderEvaluation'
import myOrderDetails from '@/views/user/myOrderDetails'
import myOrderLogistics from '@/views/user/myOrderLogistics'
import myOrderService from '@/views/user/myOrderService'
import myOrderReturns from '@/views/user/myOrderReturns'
import myRetreat from '@/views/user/myRetreat'
import myRetreatDetails from '@/views/user/myRetreatDetails'
import myCollect from '@/views/user/myCollect'
import myView from '@/views/user/myView'
import myShop from '@/views/user/myShop'
import myAddress from '@/views/user/myAddress'
import myFunds from '@/views/user/myFunds'
import withdraw from '@/views/user/withdraw'
import myCoupon from '@/views/user/myCoupon'
import myRedenvelope from '@/views/user/myRedenvelope'
import myRunning from '@/views/user/myRunning'
import mySpread from '@/views/user/mySpread'
import feedback from '@/views/user/feedback'
import mySet from '@/views/user/mySet'
import myInfo from '@/views/user/myInfo'
import myVerified from '@/views/user/myVerified'
import myPhone from '@/views/user/myPhone'
import myPassword from '@/views/user/myPassword'
import about from '@/views/user/about'
import help from '@/views/user/help'
import helpShow from '@/views/user/helpShow'
import login from '@/views/login'
import reg from '@/views/reg'
import protocol from '@/views/protocol'
import forgot from '@/views/forgot'
import reset from '@/views/reset'
import shop from '@/views/shop'
import message from '@/views/message'
import brand from '@/views/brand'
import news from '@/views/news'
import nshow from '@/views/nshow'
import chat from '@/views/chat'

Router.prototype.goBack = function() {
	window.history.go(-1)
}

export default new Router({
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	},
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/category',
			name: 'category',
			component: category
		},
		{
			path: '/list',
			name: 'list',
			component: list
		},
		{
			path: '/detail',
			name: 'detail',
			component: detail
		},
		{
			path: '/evaluate',
			name: 'evaluate',
			component: evaluate
		},
		{
			path: '/car',
			name: 'car',
			component: car
		},
		{
			path: '/order',
			name: 'order',
			component: order
		},
		{
			path: '/addressAdd',
			name: 'addressAdd',
			component: addressAdd
		},
		{
			path: '/pay',
			name: 'pay',
			component: pay
		},
		{
			path: '/payok',
			name: 'payok',
			component: payok
		},
		{
			path: '/user',
			name: 'user',
			component: user,
			beforeEnter: (to, from, next) => {
				if(store.state.login.isLogin) {
					next();
				} else {
					next({
						path: '/login'
					})
				}
			}
		},
		{
			path: '/myOrder',
			component: myOrderTransition,
			children: [{
					path: '/myOrder',
					name: 'myOrder',
					component: myOrder
				},
				{
					path: 'myOrderEvaluation',
					name: 'myOrderEvaluation',
					component: myOrderEvaluation
				},
				{
					path: 'myOrderDetails',
					name: 'myOrderDetails',
					component: myOrderDetails
				},
				{
					path: 'myOrderLogistics',
					name: 'myOrderLogistics',
					component: myOrderLogistics
				},
				{
					path: 'myOrderService',
					name: 'myOrderService',
					component: myOrderService
				},
				{
					path: 'myOrderReturns',
					name: 'myOrderReturns',
					component: myOrderReturns
				}
			]
		},
		{
			path: '/myRetreat',
			component: myOrderTransition,
			children: [{
					path: '/myRetreat',
					name: 'myRetreat',
					component: myRetreat
				},
				{
					path: 'myRetreatDetails',
					name: 'myRetreatDetails',
					component: myRetreatDetails
				}
			]
		},
		{
			path: '/myCollect',
			name: 'myCollect',
			component: myCollect
		},
		{
			path: '/myView',
			name: 'myView',
			component: myView
		},
		{
			path: '/myShop',
			name: 'myShop',
			component: myShop
		},
		{
			path: '/myAddress',
			name: 'myAddress',
			component: myAddress
		},
		{
			path: '/addressEdit',
			name: 'addressEdit',
			component: addressEdit
		},
		{
			path: '/myFunds',
			component: myOrderTransition,
			children: [{
					path: '/myFunds',
					name: 'myFunds',
					component: myFunds
				},
				{
					path: 'withdraw',
					name: 'withdraw',
					component: withdraw
				},
				{
					path: 'myCoupon',
					name: 'myCoupon',
					component: myCoupon
				},
				{
					path: 'myRedenvelope',
					name: 'myRedenvelope',
					component: myRedenvelope
				},
				{
					path: 'myRunning',
					name: 'myRunning',
					component: myRunning
				}
			]
		},
		{
			path: '/mySpread',
			name: 'mySpread',
			component: mySpread
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: feedback
		},
		{
			path: '/mySet',
			component: myOrderTransition,
			children: [{
					path: '/mySet',
					name: 'mySet',
					component: mySet
				},
				{
					path: 'myInfo',
					name: 'myInfo',
					component: myInfo
				},
				{
					path: 'myVerified',
					name: 'myVerified',
					component: myVerified
				},
				{
					path: 'myPhone',
					name: 'myPhone',
					component: myPhone
				},
				{
					path: 'myPassword',
					name: 'myPassword',
					component: myPassword
				},
				{
					path: 'about',
					name: 'about',
					component: about
				},
				{
					path: 'help',
					name: 'help',
					component: help
				},
				{
					path: 'helpShow',
					name: 'helpShow',
					component: helpShow
				}
			]
		},
		{
			path: '/login',
			component: myOrderTransition,
			children: [{
					path: '/login',
					name: 'login',
					component: login,
					beforeEnter: (to, from, next) => {
						if(store.state.login.isLogin) {
							next({
								path: '/user'
							});
						} else {
							next()
						}
					}
				},
				{
					path: '/reg',
					name: 'reg',
					component: reg,
					beforeEnter: (to, from, next) => {
						if(store.state.login.isLogin) {
							next({
								path: '/user'
							});
						} else {
							next()
						}
					}
				},
				{
					path: '/protocol',
					name: 'protocol',
					component: protocol
				},
				{
					path: '/forgot',
					name: 'forgot',
					component: forgot
				},
				{
					path: '/reset',
					name: 'reset',
					component: reset
				}
			]
		},
		{
			path: '/shop',
			name: 'shop',
			component: shop
		},
		{
			path: '/message',
			name: 'message',
			component: message
		},
		{
			path: '/brand',
			name: 'brand',
			component: brand
		},
		{
			path: '/news',
			name: 'news',
			component: news
		},
		{
			path: '/nshow',
			name: 'nshow',
			component: nshow
		},
		{
			path: '/chat',
			name: 'chat',
			component: chat
		}
	]
})