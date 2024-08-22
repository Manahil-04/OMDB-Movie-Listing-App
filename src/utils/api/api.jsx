import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const api = axios.create({
    baseURL: BASE_URL,
    params : {
        apikey: API_KEY
    },
});

export default api;
