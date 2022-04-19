import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';
import { centsToDollars } from 'common/utilities.js';

/* Components ---------------------------*/
import CartAddRemove from './CartAddRemove/CartAddRemove.jsx';
import Qty from './Qty/Qty.jsx';

const Product = ({ product, profileUpdate }) => {

    const {
        image,
        title,
        price,
    } = product;

    const handleOnClick = () => {
        profileUpdate(product);
    }

    return (
        <ProductStyled className='Product'>
            <div className="deets" onClick={ handleOnClick }>
                <img src={ image } alt={ title } />
                <h3>{ title }</h3>
                <div className="price">
                    <b>Price:</b> { centsToDollars(price) }
                </div>
            </div>
            <CartAddRemove product={ product } />
            <Qty product={ product } />
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
`;