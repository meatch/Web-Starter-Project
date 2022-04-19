import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CheckOutHeader from 'UI/common/Shopping/CheckOutHeader/CheckOutHeader.jsx';
import OrderDetails from 'UI/common/Shopping/OrderDetails/OrderDetails.jsx';

const Cart = () => {

    const { cart } = useSelector(state => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (cart.items.length < 1) {
            navigate('/merch');
        }
    }, [cart.items]);

    return (
        <CartStyled className='Cart inset'>
            <CheckOutHeader>
                <h1>Cart</h1>
            </CheckOutHeader>
            <OrderDetails items={ cart.items } showControls />
        </CartStyled>
    );
}

export default Cart;

const CartStyled = styled.div`

`;