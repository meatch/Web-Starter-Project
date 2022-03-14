import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { preloadState } from 'Redux/preloadState.js';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(preloadState());
    }, []);

    return (
        <LayoutStyled className='Layout'>
            <Header />
            <Main />
            <Footer />
        </LayoutStyled>
    );
}

export default Layout;

const LayoutStyled = styled.div`

`;