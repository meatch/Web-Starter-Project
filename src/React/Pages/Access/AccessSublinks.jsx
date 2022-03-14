import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AccessSublinks = () => {
    return (
        <AccessSublinksStyled className='AccessSublinks sublinks'>
            <NavLink to="/access/login">Login</NavLink>
            <NavLink to="/access/create">Create</NavLink>
        </AccessSublinksStyled>
    );
}

export default AccessSublinks;

const AccessSublinksStyled = styled.nav`

`;