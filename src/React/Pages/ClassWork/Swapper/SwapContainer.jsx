import React, { useState } from 'react';
import styled from 'styled-components';

import Swap from './Swap.jsx';

const SwapContainer = ({swap}) => {

    const {
        title,
        bgColor,
    } = swap;

    return (
        <SwapContainerStyled
            className='SwapContainer'
            bgColor={ bgColor }
        >
            <h3>{ title }</h3>
            <Swap swap={ swap }/>
        </SwapContainerStyled>
    );
}

export default SwapContainer;

const SwapContainerStyled = styled.div`
    background-color: ${({bgColor}) => bgColor};
    text-align: center;
    padding: 20px;
    margin: 25px 0px;

    h3 {
        color: teal;
        font-size: 50px;
        margin: 0px 0px 10px;
    }

`;