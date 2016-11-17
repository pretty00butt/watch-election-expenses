import * as types from '../mutation-types'

const state = {
  all: [],
};

const mutations = {
  [types.GET_PEOPLE] (state, { people }) {
    state.all = people;
  },
}

export default {
  state,
  mutations,
}
