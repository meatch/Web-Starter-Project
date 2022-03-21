import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
} from '@fortawesome/free-solid-svg-icons';


/* Scripts ---------------------------*/
import * as OrderActions from 'Redux/state/orders/actions.js';
import { centsToDollars } from 'common/utilities.js';

/* Components ---------------------------*/
import Qty from 'React/common/Products/Qty/Qty.jsx';


const Order = ({num, order}) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(OrderActions.remove(order.product));
    }

    return (
        <OrderStyled className='Order'>
            <td className='num'>{ num }</td>
            <td className='title'>
                <div className="row">
                    <div className="image">
                        <img src={ order.product.image } alt={ order.product.title } />
                    </div>
                    <div className="text">
                        { order.product.title }
                    </div>
                </div>
            </td>
            <td className="rmv"><button onClick={ handleRemove }><FontAwesomeIcon icon={ faTrash } /></button></td>
            <td className='qty'><Qty product={ order.product } /></td>
            <td className='price'>{ centsToDollars(order.product.price) }</td>
            <td className='total'>{ centsToDollars(order.product.price * order.qty) }</td>
        </OrderStyled>
    );
}

export default Order;

const OrderStyled = styled.tr`
    .row {
        display: flex;
        align-items: center;
        .image {
            flex: 1;
            margin-right: 5px;
            img {
                max-width: 100%;
            }
        }
        .text {
            flex: 10;
        }
    }

    .rmv {
        button {
            cursor: pointer;
            padding: 10px;
            background-color: transparent;
            border: none;
            outline: none;
        }
    }
`;