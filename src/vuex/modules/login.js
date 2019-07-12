import Util from '../../util/common'
import * as types from '../types'
const state = {
  isLogin:false
}

const mutations = {
  [types.CHANGE_LOGIN] (state,res) {
    state.isLogin = res
  }
}


export default {
  state,
  mutations
}
