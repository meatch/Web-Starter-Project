import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' } exact>Home</NavLink>
            <NavLink onClick={ clickHandler } to={ '/merch' }>Merch</NavLink>
            <NavLink onClick={ clickHandler } to={ '/cart' }>Cart</NavLink>
            <NavLink onClick={ clickHandler } to={ '/contact' }>Contact</NavLink>
            <NavLink onClick={ clickHandler } to={ '/play' }>Play</NavLink>
            <NavLink onClick={ clickHandler } to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div` 
    a {
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #007373;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: #038484;
        }
        &.active {
            color: #007373;
            background-color: #AEE6E6;
        }

    }
    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            width: 150px;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }
`;