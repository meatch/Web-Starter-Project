import { ActionTypes } from '../actionTypes';

const defaultState = {
    items: [],
    payment: {},
    orderPlaced: false,
    flow: [
        { step: 1,      title: 'Payment',    unlocked: true,    url: '/auth/checkout/payment'   },
        { step: 2,      title: 'Review',     unlocked: false,   url: '/auth/checkout/review'    },
        { step: 3,      title: 'Thanks',     unlocked: false,   url: '/auth/checkout/thanks'    },
    ],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CART_ADD_ITEM: {

            const items = [ ...state.items ];

            const productExists = items.find((item) => item.product._id === action.product._id );

            if (!productExists) {
                items.push({
                    product: action.product,
                    qty: 1,
                });
            }

            return {
                ...state,
                items: items,
            };
        }

        case ActionTypes.CART_REMOVE_ITEM: {

            const items = state.items.filter((item) => item.product._id !== action.product._id);

            return {
                ...state,
                items: items,
            };

        }

        case ActionTypes.CART_CLEAR_ITEMS: {
            return {
                ...state,
                items: [],
            };;
        }

        case ActionTypes.CART_QUANTITY_INCR: {
            const item = action.item;
            const qty = item.qty + 1;

            // Add cap here
            if (qty > 20) {
                console.log('Exceeded TOP Cap', qty);
                return state;
            }

            item.qty = qty;

            return updateItem(state, item);
        }

        case ActionTypes.CART_QUANTITY_DECR: {
            const item = action.item;
            const qty = item.qty - 1;

            // Add cap here
            if (qty < 1) {
                console.log('Exceeded BOTTOM Cap', qty);
                return state;
            }

            item.qty = qty;

            return updateItem(state, item);
        }

        case ActionTypes.CART_FLOW_UNLOCK_STEP:

            const flow = state.flow.map((step) => {
                if (step.step === action.step) {
                    step.unlocked = true;
                }

                return step;
            });

            return {
                ...state,
                flow: flow,
            }

        case ActionTypes.CART_ADD_PAYMENT:
            return {
                ...state,
                payment: action.payment,
            };
        default:
            return state;
    }
}


const updateItem = (state, updatedItem) => {
    const items = state.items.map((item) => {
        return (updatedItem.product._id === item.product.__id) ? updatedItem : item;
    });

    return {
        ...state,
        items: items,
    }
}