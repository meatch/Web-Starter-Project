import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const CheckoutLink = () => {
    return (
        <CheckoutLinkStyled className='CheckoutLink'>
            <NavLink to='/auth/checkout/payment'>
                <FontAwesomeIcon className='cart-icon' icon={ faShoppingCart } />
                Checkout
            </NavLink>
        </CheckoutLinkStyled>
    );
}

export default CheckoutLink;

const CheckoutLinkStyled = styled.div`
    a {
        display: inline-block;
        text-decoration: none;
        background-color: #014444;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;

        &:hover, &:focus {
            background-color: #037979;
        }

        &:active {
            background-color: #014444;
        }

        .cart-icon {
            margin-right: 5px;
        }
    }
`;