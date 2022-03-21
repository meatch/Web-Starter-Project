import { axios } from 'common/axios.js';

import * as Products from './state/products/actions.js';

export const preloadState = () => {
    return async (dispatch) => {

        // await axios call
        const {
            status: serverStatus,
            data: {
                success: apiSuccess,
                payload: loadedState,
            }
        } = await axios.get('/preloadState');

        if (serverStatus === 200 && apiSuccess) {
            dispatch(Products.set(loadedState.products));
        }
    }
}