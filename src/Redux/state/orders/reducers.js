import { ActionTypes } from '../actionTypes';

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ORDERS_ADD:
            return [
                ...action.orders
            ];
        case ActionTypes.ORDERS_REMOVE:
            return [
                ...action.orders
            ];
        default:
            return state;
    }
}