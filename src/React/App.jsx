import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

/* Redux ---------------------------*/
import configureStore from '../Redux/store/index.js';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Loader from './common/Loader.jsx';
import Layout from './Layout/Layout.jsx';

const App = () => {

    const { store, persistor } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <MediaQueryProvider>
                    <BrowserRouter>
                        <Layout />
                    </BrowserRouter>
                </MediaQueryProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;