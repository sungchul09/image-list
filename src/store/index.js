import Vue from 'vue';
import Vuex from 'vuex';
import { fetchImageList, fetchImageInfo } from '@/api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        imageList: [],
        imageInfo: {}
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
            fetchImageList(page, limit)
                .then(response => {
                    const data = response.data;
                    data.map(v => {
                        v.download_url = `https://picsum.photos/id/${v.id}/250`
                        return v;
                    });
                    commit('SET_IMAGELIST', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_IMAGEINFO({ commit }, id) {
            fetchImageInfo(id)
                .then(response => {
                    const data = response.data;
                    const width = parseInt(data.width);
                    const height = parseInt(data.height);
                    data.download_url = `https://picsum.photos/id/${data.id}/${width}/${height}`
                    commit('SET_IMAGEINFO', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
})