import { ActionTypes } from '../actionTypes';

export const set = (products) => {
    return ({
        type: ActionTypes.PRODUCTS_SET,
        products: products
    });
}

/**
 * redirectAfterLoginSet: Tell auth0 LoginCallBack where to go after login.
 */
export const redirectAfterLoginSet = (redirectAfterLogin) => {
    return ({
        type: ActionTypes.ROUTING_REDIRECT_AFTER_LOGIN_SET,
        redirectAfterLogin: redirectAfterLogin
    });
}