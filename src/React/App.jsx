import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

/* Redux ---------------------------*/
import configureStore from '../Redux/store.js';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Loader from './common/Loader.jsx';
import Header from './Layout/Header/Header.jsx';
import Footer from './Layout/Footer/Footer.jsx';
import Main from './Main.jsx';

const App = () => {

    const { store, persistor } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <MediaQueryProvider>
                    <BrowserRouter>
                        <AppStyled className='App'>
                            <Header />
                            <Main />
                            <Footer />
                        </AppStyled>
                    </BrowserRouter>
                </MediaQueryProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;

const AppStyled = styled.div`

`;