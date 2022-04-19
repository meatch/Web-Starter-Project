import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import LoginCallBack from './LoginCallBack.jsx';
import Login from './Login.jsx';

const Auth0 = () => {
    return (
        <Auth0Styled className='Auth0'>
            <Routes>
                <Route element={ <LoginCallBack /> } path='/auth0/loginCallBack' />
                <Route element={ <Login /> } path='/auth0/login' />
            </Routes>
        </Auth0Styled>
    );
}

export default Auth0;

const Auth0Styled = styled.div`

`;