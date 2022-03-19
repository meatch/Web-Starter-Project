import { ActionTypes } from '../actionTypes';

const defaultState = [
    { step: 1,      title: 'Payment',    unlocked: true,    url: '/auth/checkout/payment'   },
    { step: 2,      title: 'Review',     unlocked: false,   url: '/auth/checkout/review'    },
    { step: 3,      title: 'Thanks',     unlocked: false,   url: '/auth/checkout/thanks'    },
];

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CHECKOUT_UPDATE:
            return state;
        default:
            return state;
    }
}