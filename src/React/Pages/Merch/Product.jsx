import React from 'react';
import styled from 'styled-components';

import CartAddRemove from './CartAddRemove/CartAddRemove.jsx';

const Product = ({ product }) => {

    return (
        <ProductStyled className='Product'>
            <img src={ product.image } alt={ product.title } />
            <h3>{ product.title }</h3>
            <CartAddRemove product={ product } />
        </ProductStyled>
    );
}

export default Product;

const ProductStyled = styled.div`

`;