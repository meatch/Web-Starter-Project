import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/* Redux ---------------------------*/
import configureStore from '../Redux/store.js';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Header from './Layout/Header/Header.jsx';
import Footer from './Layout/Footer/Footer.jsx';
import Main from './Main.jsx';

const App = () => {

    const store = configureStore();

    return (
        <Provider store={store}>
            <MediaQueryProvider>
                <BrowserRouter>
                    <AppStyled className='App'>
                        <Header />
                        <Main />
                        <Footer />
                    </AppStyled>
                </BrowserRouter>
            </MediaQueryProvider>
        </Provider>
    );
}

export default App;

const AppStyled = styled.div`

`;