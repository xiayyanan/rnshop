import Util from '../../util/common'
import * as types from '../types'

// 容器
const state = {
	fetchLoading: false, //全局加载状态的Loading
	isColect:false,//商品收藏状态
	carnum:1//购物车数量
}

//更改 store 中的状态的唯一方法:提交 mutation
const mutations = {
	// loading开关
	[types.SET_LOADING](state, res) {
		state.fetchLoading = res
	},
	//商品收藏状态
	[types.SET_COLECT](state, res) {
		state.isColect = res
	},
	//购物车数量
	[types.SET_CARNUM](state, res) {
		state.carnum = res
	}
}
export default {
	state,
	mutations
}