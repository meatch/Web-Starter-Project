import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import MainMenu from './MainMenu.jsx';
import UserMenu from './UserMenu.jsx';

const Menus = () => {
    return (
        <MenusStyled className='Menus'>
            <MainMenu />
            <UserMenu />
        </MenusStyled>
    );
}

export default Menus;

const MenusStyled = styled.div`

`;