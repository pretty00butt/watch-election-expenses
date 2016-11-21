import Vue from 'vue'
import * as types from '../mutation-types'
import * as apis from '../../api'

const state = {
  people: [],
  queryParams: {},
  person: {}
};

const mutations = {
  [types.GET_PEOPLE] (state, { people }) {
    state.people = people
  },

  [types.SET_QUERY_PARAMS] (state, { queryParams }) {
    state.queryParams = queryParams
  },

  [types.GET_MORE_PEOPLE] (state, { people }) {
    state.people = state.people.concat(people)
  },

  [types.GET_A_PERSON] (state, { person }) {
    state.person = person
  }
}

const actions = {
  getPeople({commit}, params) {
    /*
     * Store Query params
     */
    commit(types.SET_QUERY_PARAMS, {
      queryParams: params
    })

    apis.getPeople(params)
      .then(res => {
        commit(types.GET_PEOPLE, {
          people: [{id: 1, name: 'Lee'}]
        })
      })
      .catch(err => {

      })
  },

  getMorePeople({state, commit}) {
    Vue.http.get('/')
      .then(res => {
        commit(types.GET_MORE_PEOPLE, {
          people: [{id: 1, name: 'Lee'}]
        })
      })
      .catch(err => {})
  },

  getAPerson({commit}) {
    Vue.http.get('/')
      .then(res => {
        commit(types.GET_A_PERSON, {
          person: {id: 1, name: 'Lee'}
        })
      })
      .catch(err => {})
  }
}

const getters = {
  people: state => state.people,
  person: state => state.person,
  queryParams: state => state.queryParams
}

export default {
  state,
  mutations,
  getters,
  actions
}
