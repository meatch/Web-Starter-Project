import React from 'react';
import styled from 'styled-components';

import Order from './Order.jsx';

const OrderList = ({orders}) => {
    return (
        <OrderListStyled className='OrderList'>
            {
                orders.map((order, idx) => {
                    return <Order order={ order } key={ idx } />
                })
            }
        </OrderListStyled>
    );
}

export default OrderList;

const OrderListStyled = styled.div`

`;