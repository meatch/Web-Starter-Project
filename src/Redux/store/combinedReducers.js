import { combineReducers } from 'redux';

// Reducers
import auth from '../state/auth/reducers.js';
import products from '../state/products/reducers.js';
import cart from '../state/cart/reducers.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    auth: auth,
    products: products,
    cart: cart,
});

export default combinedReducers;
