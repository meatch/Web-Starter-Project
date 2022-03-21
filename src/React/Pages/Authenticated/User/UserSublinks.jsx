import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const UserSublinks = () => {

    return (
        <UserSublinksStyled className='UserSublinks sublinks'>
            <NavLink to="/auth/user" exact>Update</NavLink>
            <NavLink to="/auth/user/password">Update Password</NavLink>
            <NavLink to="/auth/user/order-history">Order History</NavLink>
        </UserSublinksStyled>
    );
}

export default UserSublinks;

const UserSublinksStyled = styled.nav`

`;