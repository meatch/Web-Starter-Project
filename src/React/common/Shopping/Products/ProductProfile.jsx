import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

/* Scripts ---------------------------*/
import { centsToDollars } from 'common/utilities.js';

/* Components ---------------------------*/
import UniversalButton from 'React/common/UniversalButton.jsx';


const ProductProfile = ({profile, profileUpdate}) => {

    const {
        image,
        title,
        price,
        gender,
        description,
    } = profile;

    const handleBackClick = () => {
        profileUpdate(false);
    }

    return (
        <ProductProfileStyled className='ProductProfile'>
            <UniversalButton onClick={ handleBackClick }>
                <FontAwesomeIcon icon={ faArrowLeft } /> Back to Products
            </UniversalButton>
            <h2>{ title }</h2>
            <div className='row'>
                <div className="col1">
                    <img src={ image } alt={ title } />
                </div>
                <div className="col2">
                    <div className="price">
                        <b>Price:</b> { centsToDollars(price) }
                    </div>
                    <div className="price">
                        <b>Gender:</b> { gender }
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>

        </ProductProfileStyled>
    );
}

export default ProductProfile;

const ProductProfileStyled = styled.div`

    h2 {
        margin: 50px 0px;
    }
    .row {
        display: flex;
    }

    .col1 { flex: 1; }
    .col2 { flex: 3; }

    img {
        max-width: 100%;
    }


    .price {
        margin-bottom: 10px;
    }

`;