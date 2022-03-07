import { ActionTypes } from '../actionTypes';

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CART_ITEMS_UPDATE:
            return {
                ...action.cartItems
            };
        default:
            return state;
    }
}