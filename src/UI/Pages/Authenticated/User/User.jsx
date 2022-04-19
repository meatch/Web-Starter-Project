import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';

/* Components ---------------------------*/
import UserNav from './UserNav.jsx';

const User = () => {
    return (
        <UserStyled className='User'>
            <UserNav />
            <Outlet />
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;