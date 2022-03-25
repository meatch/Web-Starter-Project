import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

const Remove = ({product}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(CartActions.removeItem(product));
    }

    return (
        <RemoveStyled className='Remove' onClick={ handleOnClick }>
            <FontAwesomeIcon className='cart-icon' icon={ faShoppingCart } />
            Remove
        </RemoveStyled>
    );
}

export default Remove;

const RemoveStyled = styled.button`

`;