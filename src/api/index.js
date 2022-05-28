import axios from 'axios';

const config = {
    baseUrl: 'https://picsum.photos/'
}

function fetchImageList() {
    return axios.get(`${config.baseUrl}/v2/list`);
}

function fetchImageInfo(id) {
    return axios.get(`${config.baseUrl}/id/${id}/info`);
}

export { fetchImageList, fetchImageInfo };