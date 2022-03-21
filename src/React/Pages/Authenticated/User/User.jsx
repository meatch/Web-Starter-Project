import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import UserSublinks from './UserSublinks.jsx';
import Update from './Update.jsx';
import UpdatePassword from './UpdatePassword.jsx';
import OrderHistory from './OrderHistory/OrderHistory.jsx';

const User = () => {

    return (
        <UserStyled className='User'>
            <UserSublinks />
            <Switch>
                <Route path='/auth/user' exact>
                    <Update />
                </Route>
                <Route path='/auth/user/password'>
                    <UpdatePassword />
                </Route>
                <Route path='/auth/user/order-history'>
                    <OrderHistory />
                </Route>
            </Switch>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;