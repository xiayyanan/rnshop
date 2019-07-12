import Util from '../../util/common'
import * as types from '../types'

const state = {
  addressIndex:0
}

const mutations = {
  [types.CHANGE_ADDRESSINDEX] (state,res) {
    state.addressIndex = res
  }
}


export default {
  state,
  mutations
}
