import { createStore, applyMiddleware, compose } from 'redux';
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

const store = () => {
    return createStore(reducers, enhancers);
};

export default store;