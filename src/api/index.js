import Vue from 'vue'

export const getPeople = params => {
  return Vue.http.get('/')
}

export const getAPerson = personId => {
  return Vue.http.get('/')
}
