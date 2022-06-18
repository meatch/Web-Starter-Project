import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { swapperData } from 'data/swapperData.js';

/* Components ---------------------------*/
import Swap from './Swap.jsx';


const SwapList = () => {
    return (
        <SwapListStyled className='SwapList'>
            <div className="list">
                {
                    swapperData.map((swap, idx) => {
                        return <Swap key={ idx } swap={ swap } />
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

    .Swap {
        flex: 1;
        min-width: 330px;
    }
`;