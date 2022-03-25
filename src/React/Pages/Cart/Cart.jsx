import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CheckOutHeader from 'React/common/Cart/CheckOutHeader/CheckOutHeader.jsx';
import ItemList from 'React/common/Cart/ItemList.jsx';

const Cart = () => {

    const { cart } = useSelector(state => state);
    const history = useHistory();

    useEffect(() => {
        if (cart.items.length < 1) {
            history.push('/merch');
        }
    }, [cart.items]);

    return (
        <CartStyled className='Cart inset'>
            <CheckOutHeader>
                <h1>Cart</h1>
            </CheckOutHeader>
            <ItemList items={ cart.items } showControls />
        </CartStyled>
    );
}

export default Cart;

const CartStyled = styled.div`

`;