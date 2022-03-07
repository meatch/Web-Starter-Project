import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer.js';
import productsReducer from './productsReducer.js';
import cartItemsReducer from './cartItemsReducer.js';
import ordersReducer from './ordersReducer.js';

// Combine All Reducers
const combinedReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    orders: ordersReducer,
});

export default combinedReducers;
