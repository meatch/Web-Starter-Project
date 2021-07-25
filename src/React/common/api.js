import axios from 'axios';

console.log('process.env', process.env.REACT_APP_API);


const baseURL = (process.env.REACT_APP_API) ? `${process.env.REACT_APP_API}` : `http://localhost:5099/api`;

const api = axios.create({
    baseURL: baseURL
});

export default api;