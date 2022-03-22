import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

/* Components ---------------------------*/
import OrderHistory from './OrderHistory/OrderHistory.jsx';
import Checkout from './Checkout/Checkout.jsx';

const Authenticated = () => {

    const history = useHistory();
    const { auth } = useSelector((state) => state);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            history.push('/');
        }
    }, [auth.isAuthenticated]);

    return (
        <AuthenticatedStyled className='Authenticated inset'>
            <Switch>
                <Route path='/auth/orderHistory'>
                    <OrderHistory />
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