import Vue from 'vue'
import Vuex from 'vuex'
import macro from './modules/macro'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    macro
  }
})
