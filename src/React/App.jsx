import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

/* Redux ---------------------------*/
import configureStore from '../Redux/store/index.js';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Preloader from 'React/common/Preloader/Preloader.jsx';
import Layout from './Layout/Layout.jsx';
import Pages from './Pages/Pages.jsx';

const { store, persistor } = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Preloader />} persistor={persistor}>
                <MediaQueryProvider>
                    <BrowserRouter>
                        <Layout>
                            <Pages />
                        </Layout>
                    </BrowserRouter>
                </MediaQueryProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;