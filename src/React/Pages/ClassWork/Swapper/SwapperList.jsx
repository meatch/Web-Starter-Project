import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { swapperData } from './swapperData.js';

/* Components ---------------------------*/
import Swapper from './Swapper.jsx';


const SwapperList = () => {
    return (
        <SwapperListStyled className='SwapperList'>
            <h2>Swapping Content</h2>
            <div className="list">
                {
                    swapperData.map((swap, idx) => {
                        return <Swapper key={ idx } swap={ swap } />
                    })
                }
            </div>
        </SwapperListStyled>
    );
}

export default SwapperList;

const SwapperListStyled = styled.div`
    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .Swapper {
        flex: 1;
        min-width: 330px;
    }
`;