import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

/* Scripts ---------------------------*/
import { MediaQueryProvider } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Header from './Layout/Header/Header.jsx';
import Nav from './Layout/Nav/Nav.jsx';
import Footer from './Layout/Footer/Footer.jsx';
import Main from './Main.jsx';

const App = () => {

    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <AppStyled className='App'>
                    <Header />
                    <Nav />
                    <Main />
                    <Footer />
                </AppStyled>
            </BrowserRouter>
        </MediaQueryProvider>
    );
}

export default App;

const AppStyled = styled.div`
    
`;