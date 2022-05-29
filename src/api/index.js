import axios from 'axios';

const config = {
    baseUrl: process.env.VUE_APP_API_URL,
}

async function fetchImageList(page, limit) {
    try {
        const response = await axios.get(`${config.baseUrl}/v2/list?page=${page}&limit=${limit}`);
        response.data.map(v => v.download_url = `https://picsum.photos/id/${v.id}/250`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchImageInfo(id) {
    try {
        const response = await axios.get(`${config.baseUrl}/id/${id}/info`);
        const width = parseInt(response.data.width);
        const height = parseInt(response.data.height);
        response.data.download_url = `https://picsum.photos/id/${id}/${width}/${height}`
        return response;
    } catch (error) {
        console.log(error);
    }
}

export { fetchImageList, fetchImageInfo };