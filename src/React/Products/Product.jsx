import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

import { centsToDollars } from 'React/common/utilities.js';

/* Components ---------------------------*/
import CartAddRemove from './CartAddRemove/CartAddRemove.jsx';

const Product = ({ product }) => {

    return (
        <ProductStyled className='Product'>
            <div className="deets">
                <img src={ product.image } alt={ product.title } />
                <h3>{ product.title }</h3>
                <div className="price">
                    <b>Price:</b> { centsToDollars(product.price) }
                </div>
            </div>
            <CartAddRemove product={ product } />
        </ProductStyled>
    );
}

export default Product;

const ProductStyled = styled.div`

    width: 100%;
    margin-bottom: 10px;

    @media ${defaultMediaQueries.mdUp} {
        width: 50%;
        margin-bottom: 30px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 25%;
        margin-bottom: 50px;
    }

    padding: 15px;
    border: solid 1px #eee;

    .deets {
        min-height: 420px;
    }

    img {
        width: 100%;
    }

    .price {
        margin-bottom: 10px;
    }

    .CartAddRemove {
        text-align: center;
    }
`;