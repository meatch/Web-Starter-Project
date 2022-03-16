import { ActionTypes } from '../actionTypes';

export const ordersAdd = (product) => {
    return (dispatch, getState) => {

        const state = getState();

        const orders = [ ...state.orders ];

        const productExists = orders.find((o) => o.product._id === product._id );

        if (!productExists) {
            orders.push({
                product: product,
                qty: 1,
            });
            return dispatch({
                type: ActionTypes.ORDERS_ADD,
                orders: orders
            });
        }

        return false;
    }
}

export const ordersRemove = (product) => {
    return (dispatch, getState) => {

        const state = getState();

        const orders = state.orders.filter((o) => o.product._id !== product._id);

        return dispatch({
            type: ActionTypes.ORDERS_REMOVE,
            orders: orders
        });

    }
}
