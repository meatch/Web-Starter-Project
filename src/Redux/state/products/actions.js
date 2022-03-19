import { ActionTypes } from '../actionTypes';

export const set = (products) => {
    return ({
        type: ActionTypes.PRODUCTS_SET,
        products: products
    });
}