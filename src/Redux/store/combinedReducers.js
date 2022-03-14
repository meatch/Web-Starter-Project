import { combineReducers } from 'redux';

// Reducers
import user from '../state/user/reducers.js';
import products from '../state/products/reducers.js';
import orders from '../state/orders/reducers.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    user: user,
    products: products,
    orders: orders,
});

export default combinedReducers;
