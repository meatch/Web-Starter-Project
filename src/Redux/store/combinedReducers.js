import { combineReducers } from 'redux';

// Reducers
import user from '../state/user/reducers.js';
import products from '../state/products/reducers.js';
import cart from '../state/cart/reducers.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    user: user,
    products: products,
    cart: cart,
});

export default combinedReducers;
