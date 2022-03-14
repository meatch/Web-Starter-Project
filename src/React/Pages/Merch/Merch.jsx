import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Product from './Product.jsx';

const Merch = () => {

    const products = useSelector((state) => state.products);

    return (
        <MerchStyled className='Merch inset'>
            <h1>Merchandise</h1>
            {
                products.map((product, idx) => {
                    return <Product key={ idx} product={ product } />
                })
            }
        </MerchStyled>
    );
}

export default Merch;

const MerchStyled = styled.div`

`;