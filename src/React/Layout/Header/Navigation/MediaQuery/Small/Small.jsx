import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';

/* Components ---------------------------*/
import Hamburger from './Hamburger.jsx';
import Menus from '../Menus/Menus.jsx';

const Small = () => {

    const { state } = useContext(Context);

    return (
        <SmallStyled className='Small'>
            Mobile Menu (Small)
            <Hamburger />
            {
                state.showMenu &&
                <Menus />
            }
        </SmallStyled>
    );
}

export default Small;

const SmallStyled = styled.div`

`;