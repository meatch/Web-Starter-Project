import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import LoginCallBack from './LoginCallBack.jsx';
import Login from './Login.jsx';

const Auth0 = () => {
    return (
        <Auth0Styled className='Auth0'>
            <Switch>
                <Route path='/auth0/loginCallBack'>
                    <LoginCallBack />
                </Route>
                <Route path='/auth0/login'>
                    <Login />
                </Route>
            </Switch>
        </Auth0Styled>
    );
}

export default Auth0;

const Auth0Styled = styled.div`

`;