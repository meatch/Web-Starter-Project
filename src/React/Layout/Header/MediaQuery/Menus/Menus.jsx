import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';
import { updateShowMenu } from '../../Context/actions.js';

/* Components ---------------------------*/
import MainMenu from './MainMenu.jsx';
import UserMenu from './UserMenu.jsx';

const Menus = () => {

    const { dispatch, state } = useContext(Context);

    const handleOnClick = () => {
        dispatch(updateShowMenu(false))
    }

    return (
        <MenusStyled className='Menus' onClick={ handleOnClick }>
            <MainMenu />
            <UserMenu />
        </MenusStyled>
    );
}

export default Menus;

const MenusStyled = styled.div`

`;