import { ActionTypes } from '../actionTypes';

export const cartItemsUpdate = (cartItems) => {
    return ({
        type: ActionTypes.CART_ITEMS_UPDATE,
        cartItems: cartItems
    });
}

export const sampleDispatch = () => {
    return (dispatch, getState) => {
        dispatch(cartItemsUpdate([]));
    }
}