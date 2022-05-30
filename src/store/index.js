import Vue from 'vue';
import Vuex from 'vuex';
import { fetchImageList, fetchImageInfo } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    imageList: [],
    imageInfo: {},
    loadingStatus: false,
    pageBtn: true,
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
    startSpinner(state) {
      state.loadingStatus = true;
    },
    endSpinner(state) {
      state.loadingStatus = false;
    },
    pageBtn(state) {
      state.pageBtn = true;
    },
    backBtn(state) {
      state.pageBtn = false;
    },
  },
  actions: {
    async FETCH_IMAGELIST({ commit }, { page, limit }) {
      const response = await fetchImageList(page, limit);
      commit('SET_IMAGELIST', response.data);
      return response;
    },
    async FETCH_IMAGEINFO({ commit }, id) {
      const response = await fetchImageInfo(id);
      commit('SET_IMAGEINFO', response.data);
      return response;
    },
  },
});
