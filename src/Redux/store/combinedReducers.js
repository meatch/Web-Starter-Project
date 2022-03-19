import { combineReducers } from 'redux';

// Reducers
import user from '../state/user/reducers.js';
import products from '../state/products/reducers.js';
import orders from '../state/orders/reducers.js';
import checkout from '../state/checkout/reducers.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    user: user,
    products: products,
    orders: orders,
    checkout: checkout,
});

export default combinedReducers;
