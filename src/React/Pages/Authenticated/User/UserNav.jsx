import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <UserNavStyled className='UserNav sublinks'>
            <NavLink to='/auth/user' exact>Profile</NavLink>
            <NavLink to='/auth/user/orderHistory'>Order History</NavLink>
        </UserNavStyled>
    );
}

export default UserNav;

const UserNavStyled = styled.nav`

`;