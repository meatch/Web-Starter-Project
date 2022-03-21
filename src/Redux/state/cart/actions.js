import { ActionTypes } from '../actionTypes';

export const addItem = (product) => {
    return {
        type: ActionTypes.CART_ADD_ITEM,
        product: product
    };
}

export const removeItem = (product) => {
    return {
        type: ActionTypes.CART_REMOVE_ITEM,
        product: product
    };
}

export const clearItems = () => {
    return {
        type: ActionTypes.CART_CLEAR_ITEMS,
    };
}

export const quantityIncr = (item) => {
    return {
        type: ActionTypes.CART_QUANTITY_INCR,
        item: item
    };
}

export const quantityDecr = (item) => {
    return {
        type: ActionTypes.CART_QUANTITY_DECR,
        item: item
    };
}

export const flowUnlockReview = () => {
    return ({
        type: ActionTypes.CART_FLOW_UNLOCK_REVIEW
    });
}

export const flowUnlockThankYou = () => {
    return ({
        type: ActionTypes.CART_FLOW_UNLOCK_THANK_YOU
    });
}

export const reset = () => {
    return ({
        type: ActionTypes.CART_RESET,
    });
}

export const addPayment = (payment) => {
    return ({
        type: ActionTypes.CART_ADD_PAYMENT,
        payment: payment,
    });
}

