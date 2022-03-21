import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CheckOutHeader from 'React/common/CheckOutHeader/CheckOutHeader.jsx';
import OrderList from 'React/common/Orders/OrderList.jsx';


const Cart = () => {

    const orders = useSelector((state) => state.orders);
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
            <OrderList />
        </CartStyled>
    );
}

export default Cart;

const CartStyled = styled.div`

`;