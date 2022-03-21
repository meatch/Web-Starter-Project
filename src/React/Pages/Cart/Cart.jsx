import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CheckOutHeader from 'React/common/CheckOutHeader/CheckOutHeader.jsx';

const Cart = () => {

    const orders = useSelector((state) => state.orders);
    const products = orders.map((o) => o.product);
    const history = useHistory();

    useEffect(() => {
        if (orders.length < 1) {
            history.push('/merch');
        }
    }, [orders]);

    return (
        <CartStyled className='Cart inset'>
            <CheckOutHeader>
                <h1>Cart</h1>
            </CheckOutHeader>
        </CartStyled>
    );
}

export default Cart;

const CartStyled = styled.div`

`;