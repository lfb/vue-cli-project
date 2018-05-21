import Vue from 'vue';
import Vuex from 'vuex';
// 医生
import doctor from './modules/doctor';

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    doctor,
  }
});

export default store;
