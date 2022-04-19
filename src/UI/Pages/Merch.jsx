import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CheckOutHeader from 'UI/common/Shopping/CheckOutHeader/CheckOutHeader.jsx';
import Products from 'UI/common/Shopping/Products/Products.jsx';

const Merch = () => {

    const products = useSelector((state) => state.products);

    return (
        <MerchStyled className='Merch inset'>
            <CheckOutHeader>
                <h1>Merchandise</h1>
            </CheckOutHeader>
            <Products products={ products } />
        </MerchStyled>
    );
}

export default Merch;

const MerchStyled = styled.div`

`;