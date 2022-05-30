import Vue from 'vue';
import Vuex from 'vuex';
import { fetchImageList, fetchImageInfo } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    imageList: [],
    imageInfo: {},
    spinnerStatus: '',
    btnStatus: '',
  },
  getters: {
    getImageList(state) {
      return state.imageList;
    },
    getImageInfo(state) {
      return state.imageInfo;
    },
  },
  mutations: {
    SET_IMAGELIST: function (state, data) {
      state.imageList = data;
    },
    SET_IMAGEINFO: function (state, data) {
      state.imageInfo = data;
    },
  },
  actions: {
    async FETCH_IMAGELIST({ commit }, { page, limit }) {
      const response = await fetchImageList(page, limit);
      commit('SET_IMAGELIST', response.data);
      return response;
    },
    async FETCH_IMAGEINFO({ commit }, id) {
      console.log(id);
      const response = await fetchImageInfo(id);
      commit('SET_IMAGEINFO', response.data);
      return response;
    },
  },
});
