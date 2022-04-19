import React from 'react';
import styled from 'styled-components';

import SwapList from './SwapList.jsx';

const Swapper = () => {
    return (
        <SwapperStyled className='Swapper'>
            <h2>Swapper</h2>
            <SwapList />
        </SwapperStyled>
    );
}

export default Swapper;

const SwapperStyled = styled.div`

`;