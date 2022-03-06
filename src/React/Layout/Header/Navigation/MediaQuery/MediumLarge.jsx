import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Menus from './Menus/Menus.jsx';

const MediumLarge = () => {
    return (
        <MediumLargeStyled className='MediumLarge'>
            Medium Large
            <Menus />
        </MediumLargeStyled>
    );
}

export default MediumLarge;

const MediumLargeStyled = styled.div`

`;