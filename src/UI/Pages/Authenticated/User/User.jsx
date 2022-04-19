import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import UserNav from './UserNav.jsx';
import UserProfile from './UserProfile.jsx';
import OrderHistory from './OrderHistory/OrderHistory.jsx';

const User = () => {
    return (
        <UserStyled className='User'>
            <UserNav />
            <Routes>
                <Route element={ <UserProfile /> } path='/auth/user' />
                <Route element={ <OrderHistory /> } path='/auth/user/orderHistory' />
            </Routes>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;