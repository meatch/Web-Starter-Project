import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';
import { updateShowMobileMenu } from '../../Context/actions.js';

/* Components ---------------------------*/
import MainMenu from './MainMenu.jsx';
import ClassMenu from './ClassMenu.jsx';

const Menus = () => {

    const { dispatch } = useContext(Context);

    const handleOnClick = () => {
        dispatch(updateShowMobileMenu(false))
    }

    return (
        <MenusStyled className='Menus' onClick={ handleOnClick }>
            <MainMenu />
            <ClassMenu />
        </MenusStyled>
    );
}

export default Menus;

const MenusStyled = styled.div`

`;