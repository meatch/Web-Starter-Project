import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <MainMenuStyled className='MainMenu'>
            <h2>MainMenu Menu</h2>
            <NavLink to={ '/' } exact>Home</NavLink>
            <NavLink to={ '/merch' }>Merch</NavLink>
            <NavLink to={ '/cart' }>Cart</NavLink>
            <NavLink to={ '/contact' }>Contact</NavLink>
            <NavLink to={ '/play' }>Play</NavLink>
            <NavLink to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.nav`

`;