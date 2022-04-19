import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { preloadState } from 'Redux/preloadState.js';
import * as AuthActions from 'Redux/state/auth/actions.js';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = ({children}) => {

    const dispatch = useDispatch();
    const authIntervalCheck = AuthActions.authIntervalCheck(dispatch);

    useEffect(() => {
        // Mount
        dispatch(preloadState());

        // ...then check on intervals
        authIntervalCheck.start();

        // Dismount - should never really dismount, unless user closes browser.
        return () => {
            authIntervalCheck.end();
        }

    }, []);

    return (
        <LayoutStyled className='Layout'>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </LayoutStyled>
    );
}

export default Layout;

const LayoutStyled = styled.div`

`;