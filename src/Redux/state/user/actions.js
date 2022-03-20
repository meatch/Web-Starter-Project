import { ActionTypes } from '../actionTypes';
import * as OrderActions from '../orders/actions.js';

export const login = (profile) => {
    return ({
        type: ActionTypes.USER_LOGIN,
        profile: profile
    });
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(OrderActions.clear());
        dispatch({type: ActionTypes.USER_LOGOUT});
    }
}