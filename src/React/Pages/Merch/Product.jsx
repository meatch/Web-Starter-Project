import React from 'react';
import styled from 'styled-components';

const Product = ({ product }) => {

    console.log('product', product);

    return (
        <ProductStyled className='Product'>
            <img src={ product.image } alt={ product.title } />
            <h3>{ product.title }</h3>
        </ProductStyled>
    );
}

export default Product;

const ProductStyled = styled.div`

`;