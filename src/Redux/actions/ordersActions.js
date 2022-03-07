import { ActionTypes } from '../actionTypes';

export const ordersUpdate = (orders) => {
    return ({
        type: ActionTypes.ORDERS_UPDATE,
        orders: orders
    });
}

export const sampleDispatch = () => {
    return (dispatch, getState) => {
        dispatch(ordersUpdate([]));
    }
}