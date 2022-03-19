import { ActionTypes } from '../actionTypes';

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCTS_SET:
            return [
                ...action.products
            ];
        default:
            return state;
    }
}