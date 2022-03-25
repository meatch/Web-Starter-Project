import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { swapperData } from 'data/swapperData.js';

/* Components ---------------------------*/
import SwapContainer from './SwapContainer.jsx';


const SwapList = () => {
    return (
        <SwapListStyled className='SwapList'>
            <h2>Swapping Content</h2>
            <div className="list">
                {
                    swapperData.map((swap, idx) => {
                        return <SwapContainer key={ idx } swap={ swap } />
                    })
                }
            </div>
        </SwapListStyled>
    );
}

export default SwapList;

const SwapListStyled = styled.div`
    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .SwapContainer {
        flex: 1;
        min-width: 330px;
    }
`;