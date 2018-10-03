import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reportData: []
  },
  getters: {
    getReportData: (state) => {
      return state.reportData
    }
  },
  mutations: {
    storeReportData: (state, data) => {
      for (let i = 0; i < data.length; i++) {
        state.reportData.push(data[i])
      }
    }
  }
})
