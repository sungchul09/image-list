import axios from 'axios';

const config = {
    baseUrl: process.env.VUE_APP_API_URL,
}

function fetchImageList(page, limit) {
    return axios.get(`${config.baseUrl}/v2/list?page=${page}&limit=${limit}`);
}

function fetchImageInfo(id) {
    return axios.get(`${config.baseUrl}/id/${id}/info`);
}

export { fetchImageList, fetchImageInfo };