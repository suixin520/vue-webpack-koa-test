import * as types from './mutation-types'

export const changeTest = function({commit}, test) {
  commit(types.SET_TEST, test)
}
