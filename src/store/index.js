import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    quizes: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_QUIZES(state, quizes) {
      state.quizes = quizes;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    setQuizes({ commit }, quizes) {
      commit("SET_QUIZES", quizes);
    },
  },
  modules: {},
});
