import { ActionTypes } from '../actionTypes';

export const add = (product) => {
    return {
        type: ActionTypes.ORDERS_ADD,
        product: product
    };
}

export const remove = (product) => {
    return {
        type: ActionTypes.ORDERS_REMOVE,
        product: product
    };
}

export const quantityIncr = (order) => {
    return {
        type: ActionTypes.ORDER_QUANTITY_INCR,
        order: order
    };
}

export const quantityDecr = (order) => {
    return {
        type: ActionTypes.ORDER_QUANTITY_DECR,
        order: order
    };
}
