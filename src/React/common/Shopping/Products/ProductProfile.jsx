import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

/* Scripts ---------------------------*/
import { centsToDollars } from 'common/utilities.js';


const ProductProfile = ({profile, profileUpdate}) => {

    const {
        image,
        title,
        price,
    } = profile;

    const handleBackClick = () => {
        profileUpdate(false);
    }

    return (
        <ProductProfileStyled className='ProductProfile'>
            <button onClick={ handleBackClick }>
                <FontAwesomeIcon icon={ faArrowLeft } /> Back to Products
            </button>

            <img src={ image } alt={ title } />
            <h2>{ title }</h2>
            <div className="price">
                <b>Price:</b> { centsToDollars(price) }
            </div>

        </ProductProfileStyled>
    );
}

export default ProductProfile;

const ProductProfileStyled = styled.div`

    img {
        max-width: 200px;
    }

    .price {
        margin-bottom: 10px;
    }
`;