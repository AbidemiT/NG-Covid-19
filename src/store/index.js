import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ngCovid: [],
  },
  mutations: {
    SET_NGCOVIDDATA(state, data) {
      state.ngCovid = data;
    },
  },
  actions: {
    async getNgCovidData({ commit }) {
      let url = "https://covidnigeria.herokuapp.com/api";
      let result = await axios.get(url);
      commit("SET_NGCOVIDDATA", result.data.data);
    },
  },
  getters: {
    totalSamplesTested: (state) => {
      return state.ngCovid.totalSamplesTested;
    },
    totalConfirmedCases: (state) => {
      return state.ngCovid.totalConfirmedCases;
    },
    totalActiveCases: (state) => {
      return state.ngCovid.totalActiveCases;
    },
    totalDischarged: (state) => {
      return state.ngCovid.discharged;
    },
    totalDeath: (state) => {
      return state.ngCovid.death;
    },
    totalState: (state) => {
      return state.ngCovid.states;
    },
  },
});
