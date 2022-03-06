import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    return (
        <UserMenuStyled className='UserMenu'>
            <h2>User Menu</h2>
            <NavLink to={ '/user/login' } exact>Login</NavLink>
        </UserMenuStyled>
    );
}

export default UserMenu;

const UserMenuStyled = styled.nav`

`;