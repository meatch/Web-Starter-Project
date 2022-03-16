import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Products from 'React/Products/Products.jsx';

const Cart = () => {

    const orders = useSelector((state) => state.orders);
    const products = orders.map((o) => o.product);

    return (
        <CartStyled className='Cart'>
            <h2>Cart</h2>
            <Products products={ products } />
        </CartStyled>
    );
}

export default Cart;

const CartStyled = styled.div`

`;