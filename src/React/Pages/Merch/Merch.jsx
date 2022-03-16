import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Products from 'React/Products/Products.jsx';

const Merch = () => {

    const products = useSelector((state) => state.products);

    return (
        <MerchStyled className='Merch inset'>
            <h1>Merchandise</h1>
            <Products products={ products } />
        </MerchStyled>
    );
}

export default Merch;

const MerchStyled = styled.div`

`;