import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = '2a44c055';

const api = axios.create({
    baseURL: BASE_URL,
    params : {
        apikey: API_KEY
    },
});

export default api;
