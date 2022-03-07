import axios from 'axios';

const baseURL = (process.env.REACT_APP_API) ? `${process.env.REACT_APP_API}` : `http://localhost:5050`;

const api = axios.create({
    baseURL: baseURL
});

export default api;