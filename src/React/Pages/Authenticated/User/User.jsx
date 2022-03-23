import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import UserNav from './UserNav.jsx';
import UserProfile from './UserProfile.jsx';
import OrderHistory from './OrderHistory/OrderHistory.jsx';

const User = () => {
    return (
        <UserStyled className='User'>
            <UserNav />
            <Switch>
                <Route path='/auth/user' exact>
                    <UserProfile />
                </Route>
                <Route path='/auth/user/orderHistory'>
                    <OrderHistory />
                </Route>
            </Switch>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;