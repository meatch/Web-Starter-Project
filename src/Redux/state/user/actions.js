import { ActionTypes } from '../actionTypes';
import * as CartActions from '../cart/actions.js';

export const login = (profile) => {
    return ({
        type: ActionTypes.USER_LOGIN,
        profile: profile
    });
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(CartActions.clearItems());
        dispatch({type: ActionTypes.USER_LOGOUT});
    }
}

export const update = (profile) => {
    return({
        type: ActionTypes.USER_UPDATE,
        profile: profile
    });
}