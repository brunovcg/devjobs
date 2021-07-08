import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-api-devjobs.herokuapp.com',
});

export default api;