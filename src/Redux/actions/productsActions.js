import { ActionTypes } from '../actionTypes';

export const productsUpdate = (products) => {
    return ({
        type: ActionTypes.PRODUCTS_UPDATE,
        products: products
    });
}

export const sampleDispatch = () => {
    return (dispatch, getState) => {
        dispatch(productsUpdate([]));
    }
}