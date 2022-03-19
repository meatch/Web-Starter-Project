import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

/* Components ---------------------------*/
import AuthSublinks from './AuthSublinks.jsx';
import User from './User/User.jsx';
import Checkout from './Checkout/Checkout.jsx';

const Authenticated = () => {

    const history = useHistory();
    const { user } = useSelector((state) => state);

    useEffect(() => {
        if (!user.loggedIn) {
            history.push('/access/login');
        }
    }, [user]);

    return (
        <AuthenticatedStyled className='Authenticated inset'>
            <h1>Authenticated</h1>
            <AuthSublinks />
            <Switch>
                <Route path='/auth/user'>
                    <User />
                </Route>
                <Route path='/auth/checkout'>
                    <Checkout />
                </Route>
            </Switch>
        </AuthenticatedStyled>
    );
}

export default Authenticated;

const AuthenticatedStyled = styled.div`

`;