import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { centsToDollars, getTotalCostOfOrders } from 'common/utilities.js';

/* Components ---------------------------*/
import Order from './Order.jsx';

const OrderList = () => {

    const { orders } = useSelector(state => state);
    const grandTotal = getTotalCostOfOrders(orders);

    return (
        <OrderListStyled className='OrderList'>
            <thead>
                <tr>
                    <th className='num'>#</th>
                    <th className='title'>Title</th>
                    <th className='rmv'>Rmv</th>
                    <th className='qty'>Qty</th>
                    <th className='price'>Price</th>
                    <th className='total'>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order,idx) => {
                        return <Order key={ idx } num={ idx+1 } order={ order }/>
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="5">Total Cost</th>
                    <td className='grandTotal'>{ centsToDollars(grandTotal) }</td>
                </tr>
            </tfoot>
        </OrderListStyled>
    );
}

export default OrderList;

const OrderListStyled = styled.table`
    border-collapse: collapse;
    border: solid 1px #ccc;
    width: 100%;
    margin: 20px 0px;

    th, td {
        padding: 10px;
        border: solid 1px #ccc;
    }

    .num { width: 50px; text-align: center; }
    .title { width: auto; text-align: left; }
    .rmv { width: 50px; text-align: center; }
    .qty { width: 50px; text-align: center; }
    .price { width: 100px; text-align: center; }
    .total { width: 100px; text-align: center; }

    tfoot {
        font-size: 18px;

        th { text-align: right; }
        .grandTotal { text-align: center; }
    }
`;