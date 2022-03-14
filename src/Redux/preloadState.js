import api from 'React/common/api.js';

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
        } = await api.get('/preloadState');

        // console.log('loadedState', loadedState);

        if (serverStatus === 200 && apiSuccess) {
            dispatch(Products.productsUpdate(loadedState.products));
        }
    }
}