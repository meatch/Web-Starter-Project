import React from 'react';
import styled from 'styled-components';

import Products from './Products/Products.jsx';

const Merch = () => {

    return (
        <MerchStyled className='Merch inset'>
            <h1>Merchandise</h1>
            <Products />
        </MerchStyled>
    );
}

export default Merch;

const MerchStyled = styled.div`

`;