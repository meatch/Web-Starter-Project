import axios from 'axios';

const baseURL = (process.env.REACT_APP_URL) ? `${process.env.REACT_APP_URL}/api` : `/api`;

const api = axios.create({
    baseURL: baseURL
});

export default api;