import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { axios } from 'common/axios.js';

/* Components ---------------------------*/
import OrderList from './OrderList.jsx';

const OrderHistory = () => {

    const { user } = useSelector(state => state);

    const [loaded, loadedUpdate] = useState(false);
    const [pastOrders, pastOrdersUpdate] = useState([]);

    useEffect(() => {
        axios.get(`/orders/getOrderHistory/${user.profile.sub}`)
            .then((resp) => {
                pastOrdersUpdate(resp.data.payload);
                loadedUpdate(true);
            });
    }, []);

    if (!loaded) { return 'Loading...'; }

    return (
        <OrderHistoryStyled className='OrderHistory'>
            <h1>Order History</h1>

            {
                pastOrders
                ? <OrderList orders={ pastOrders } />
                : <div>You currently have not past orders.</div>
            }

        </OrderHistoryStyled>
    );
}

export default OrderHistory;

const OrderHistoryStyled = styled.div`

`;