import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'CrossFit Decimate'
        }) : compose;

const enhancers = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    const store = createStore(persistedReducer, enhancers);
    const persistor = persistStore(store);
    return { store, persistor }
};