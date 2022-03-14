import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthSublinks = () => {

    return (
        <AuthSublinksStyled className='AuthSublinks sublinks'>
            <NavLink to="/auth/user">Update</NavLink>
            <NavLink to="/auth/cart">Cart</NavLink>
        </AuthSublinksStyled>
    );
}

export default AuthSublinks;

const AuthSublinksStyled = styled.nav`

`;