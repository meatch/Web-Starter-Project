import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

/* Components ---------------------------*/
import UniversalButton from 'UI/common/UniversalButton.jsx';

const CartAddRemove = ({ product }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
    const productExists = cart.items.find((item) => item.product._id === product._id );

    const handleOnClick = () => {
        if (productExists) {
            return dispatch(CartActions.removeItem(product));
        }
        return dispatch(CartActions.addItem(product));
    }

    return (
        <CartAddRemoveStyled className='CartAddRemove'>
            <UniversalButton
                onClick={ handleOnClick }
                branding={ productExists ? 'remove' : 'primary' }
            >
                <FontAwesomeIcon className='cart-icon' icon={ faShoppingCart } />
                { productExists ? 'Remove' : 'Add' }
            </UniversalButton>
        </CartAddRemoveStyled>
    );
}

export default CartAddRemove;

const CartAddRemoveStyled = styled.div`
    text-align: center;

    button {
        .cart-icon {
            margin-right: 5px;
        }
    }
`;