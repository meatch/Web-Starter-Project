import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

/* Components ---------------------------*/
import User from './User/User.jsx';
import Checkout from './Checkout/Checkout.jsx';

const Authenticated = () => {

    const history = useHistory();
    const { user: { isAuthenticated } } = useSelector((state) => state);

    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/');
        }
    }, []);

    return (
        <AuthenticatedStyled className='Authenticated inset'>
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