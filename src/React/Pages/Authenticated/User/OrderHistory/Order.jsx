import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

/* Scripts ---------------------------*/
import { centsToDollars } from 'common/utilities.js';

/* Components ---------------------------*/
import ItemList from 'React/common/Cart/ItemList.jsx';

const Order = ({order}) => {

    const theDate = moment.utc(order.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a");

    return (
        <OrderStyled className='Order'>
            <h2>{ theDate }</h2>
            <div className=''>Order Id: {order._id}</div>
            <div className='total'>Total: { centsToDollars(order.details.totalCost) }</div>
            <ItemList items={ order.details.items } />
        </OrderStyled>
    );
}

export default Order;

const OrderStyled = styled.div`
    border: solid 2px teal;
    padding: 20px;
    margin: 40px 0px;

    > .total {
        font-size: 20px;
        margin: 20px 0px;
    }
`;