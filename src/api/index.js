import axios from 'axios';

const config = {
  API_URL: process.env.VUE_APP_API_URL
}

const instance = axios.create({
  baseURL: config.API_URL,
})

async function fetchImageList(page, limit) {
  try {
    const response = await instance.get(`v2/list?page=${page}&limit=${limit}`);
    response.data.map((v) => (v.download_url = `${config.API_URL}id/${v.id}/250`));
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchImageInfo(id) {
  try {
    const response = await instance.get(`id/${id}/info`);
    const width = parseInt(response.data.width);
    const height = parseInt(response.data.height);
    response.data.download_url = `${config.API_URL}id/${id}/${width}/${height}`;
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchImageList, fetchImageInfo };
