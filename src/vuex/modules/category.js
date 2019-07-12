import Util from '../../util/common'
import * as types from '../types'

const state = {
  catIndex:0
}

const mutations = {
  [types.CHANGE_CATINDEX] (state,res) {
    state.catIndex = res
  }
}


export default {
  state,
  mutations
}
