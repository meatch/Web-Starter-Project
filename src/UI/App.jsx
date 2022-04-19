import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

/* Redux ---------------------------*/
import configureStore from '../Redux/store/index.js';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'UI/common/useMediaQuery.js';

/* Components ---------------------------*/
import Preloader from 'UI/common/Preloader/Preloader.jsx';
import Layout from './Layout/Layout.jsx';
import Routing from './Routing.jsx';

const { store, persistor } = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Preloader />} persistor={persistor}>
                <MediaQueryProvider>
                    <BrowserRouter>
                        <Layout>
                            <MainStyled className='Main'>
                                <Routing />
                            </MainStyled>
                        </Layout>
                    </BrowserRouter>
                </MediaQueryProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;

const MainStyled = styled.main`

`;