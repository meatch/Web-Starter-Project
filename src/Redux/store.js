import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

// Setting Up Store
import composeEnhancers from './composeEnhancers.js';
import persistedReducer from './persistedReducer.js';

export default () => {
    const store = createStore(persistedReducer, composeEnhancers);
    const persistor = persistStore(store);
    return { store, persistor }
};