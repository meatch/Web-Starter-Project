import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

const Add = ({product}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(CartActions.addItem(product));
    }

    return (
        <AddStyled className='Add' onClick={ handleOnClick }>
            <FontAwesomeIcon className='cart-icon' icon={ faShoppingCart } />
            Add
        </AddStyled>
    );
}

export default Add;

const AddStyled = styled.button`

`;