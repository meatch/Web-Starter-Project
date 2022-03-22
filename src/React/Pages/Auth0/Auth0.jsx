import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import LoginCallBack from './LoginCallBack.jsx';

const Auth0 = () => {
    return (
        <Auth0Styled className='Auth0'>
            <Switch>
                <Route path='/auth0/loginCallBack'>
                    <LoginCallBack />
                </Route>
            </Switch>
        </Auth0Styled>
    );
}

export default Auth0;

const Auth0Styled = styled.div`

`;