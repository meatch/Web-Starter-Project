import React from 'react';
import styled from 'styled-components';

import Product from './Product.jsx';

const Products = ({products}) => {

    return (
        <ProductsStyled className='Products'>
            {
                products.map((product, idx) => {
                    return <Product key={ idx} product={ product } />
                })
            }
        </ProductsStyled>
    );
}

export default Products;

const ProductsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;