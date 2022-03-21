import React from 'react';
import styled from 'styled-components';

import Product from './Product.jsx';

const ProductList = ({products}) => {

    return (
        <ProductListStyled className='ProductList'>
            {
                products.map((product, idx) => {
                    return <Product key={ idx} product={ product } />
                })
            }
        </ProductListStyled>
    );
}

export default ProductList;

const ProductListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;