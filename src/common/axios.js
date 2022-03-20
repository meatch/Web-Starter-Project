import axiosLib from 'axios';

const baseURL = (process.env.REACT_APP_API) ? `${process.env.REACT_APP_API}` : `http://localhost:5050`;

export const axios = axiosLib.create({
    baseURL: baseURL,
    withCredentials: true,
});

export const reqResp = async (method, apiEndpoint, requestObject={}) => {
    const resp = await axios[method](apiEndpoint, requestObject);
    return resp.data;
}
