import { ActionTypes } from '../actionTypes';

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ORDERS_ADD: {

            const orders = [ ...state ];

            const productExists = orders.find((o) => o.product._id === action.product._id );

            if (!productExists) {
                orders.push({
                    product: action.product,
                    qty: 1,
                });
            }

            return orders;
        }

        case ActionTypes.ORDERS_REMOVE: {

            const orders = state.filter((o) => o.product._id !== action.product._id);

            return orders;

        }

        case ActionTypes.ORDERS_CLEAR: {
            return [];
        }

        case ActionTypes.ORDER_QUANTITY_INCR: {
            const order = action.order;
            const qty = order.qty + 1;

            // Add cap here
            if (qty > 20) {
                console.log('Exceeded TOP Cap', qty);
                return state;
            }

            order.qty = qty;

            return updateOrder(state, order);
        }

        case ActionTypes.ORDER_QUANTITY_DECR: {
            const order = action.order;
            const qty = order.qty - 1;

            // Add cap here
            if (qty < 1) {
                console.log('Exceeded BOTTOM Cap', qty);
                return state;
            }

            order.qty = qty;

            return updateOrder(state, order);
        }

        default:
            return state;
    }
}

const updateOrder = (orders, updatedOrder) => {
    return orders.map((o) => {
        return (updatedOrder.product._id === o.product.__id) ? updatedOrder : o;
    });
}