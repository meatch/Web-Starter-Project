import React from 'react';
import styled from 'styled-components';

import OrderDetailList from './OrderDetailList.jsx';

const OrderDetails = (props) => {
    return (
        <OrderDetailsStyled className='OrderDetails'>
            <OrderDetailList {...props} />
        </OrderDetailsStyled>
    );
}

export default OrderDetails;

const OrderDetailsStyled = styled.div`

`;