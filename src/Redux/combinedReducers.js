import { combineReducers } from 'redux';

// Reducers
import user from './user/reducers.js';
import products from './products/reducers.js';
import orders from './orders/reducers.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    user: user,
    products: products,
    orders: orders,
});

export default combinedReducers;
