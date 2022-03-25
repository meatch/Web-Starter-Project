import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { swapperData } from 'data/swapperData.js';

/* Components ---------------------------*/
import SwapSingle from './SwapSingle.jsx';


const SwapList = () => {
    return (
        <SwapListStyled className='SwapList'>
            <h2>Swapping Content</h2>
            <div className="list">
                {
                    swapperData.map((swap, idx) => {
                        return <SwapSingle key={ idx } swap={ swap } />
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

    .Swapper {
        flex: 1;
        min-width: 330px;
    }
`;