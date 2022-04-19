import { applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// Redux Dev Tools
const enhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: 'CrossFit Decimate'}) :
    compose;

const composeEnhancers = enhancers(
    applyMiddleware(ReduxThunk),
);

export default composeEnhancers;