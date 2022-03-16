import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* Components ---------------------------*/
import Add from './Add.jsx';
import Remove from './Remove.jsx';

const CartAddRemove = ({ product }) => {

    const { orders } = useSelector((state) => state);
    const productExists = orders.find((o) => o.product._id === product._id );

    return (
        <CartAddRemoveStyled className='CartAddRemove'>
            {
                productExists
                    ? <Remove product={ product } />
                    : <Add product={ product } />
            }
        </CartAddRemoveStyled>
    );
}

export default CartAddRemove;

const CartAddRemoveStyled = styled.div`
    button {
        background-color: #014444;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;

        &:hover {
            background-color: #014444;
        }

        .cart-icon {
            margin-right: 5px;
        }

        &.Remove {
            background-color: maroon;
        }
    }
`;