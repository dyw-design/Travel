import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getters from './getters'
import mutation from './mutation'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    action,
    mutation,
    getters
})