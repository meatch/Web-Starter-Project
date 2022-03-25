import React, { useState } from 'react';
import styled from 'styled-components';

import ProductProfile from './ProductProfile.jsx';
import ProductList from './ProductList.jsx';

const Products = (props) => {

    const [profile, profileUpdate] = useState(false);

    return (
        <ProductsStyled className='Products'>
            {
                profile
                ? <ProductProfile profile={profile} profileUpdate={ profileUpdate }/>
                : <ProductList {...props} profileUpdate={ profileUpdate }/>
            }
        </ProductsStyled>
    );
}

export default Products;

const ProductsStyled = styled.div`

`;