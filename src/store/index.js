import Vue from 'vue';
import Vuex from 'vuex';
import { fetchImageList, fetchImageInfo } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        imageList: [],
        imageInfo: {},
        spinnerStatus: '',
    },
    getters: {
        GET_IMAGELIST(state) {
            return state.imageList;
        },
        GET_IMAGEINFO(state) {
            return state.imageInfo;
        }
    },
    mutations: {
        SET_IMAGELIST: function (state, data) {
            state.imageList = data;
        },
        SET_IMAGEINFO: function (state, data) {
            state.imageInfo = data;
        }
    },
    actions: {
        FETCH_IMAGELIST({ commit }, { page, limit }) {
            return fetchImageList(page, limit)
                .then(response => {
                    response.data.map(v => v.download_url = `https://picsum.photos/id/${v.id}/250`);
                    commit('SET_IMAGELIST', response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_IMAGEINFO({ commit }, id) {
            return fetchImageInfo(id)
                .then(response => {
                    const data = response.data;
                    const id = data.id;
                    const width = parseInt(data.width);
                    const height = parseInt(data.height);
                    data.download_url = `https://picsum.photos/id/${id}/${width}/${height}`
                    commit('SET_IMAGEINFO', response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
})