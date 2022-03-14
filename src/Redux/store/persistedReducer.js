import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web

import combinedReducers from './combinedReducers.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // only user will be persisted
}

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;