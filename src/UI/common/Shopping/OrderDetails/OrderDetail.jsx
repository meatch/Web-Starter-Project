import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
} from '@fortawesome/free-solid-svg-icons';


/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';
import { centsToDollars } from 'common/utilities.js';

/* Components ---------------------------*/
import Qty from 'UI/common/Shopping/Products/Qty/Qty.jsx';


const OrderDetail = ({num, item, showControls}) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(CartActions.removeItem(item.product));
    }

    return (
        <OrderDetailStyled className='OrderDetail'>
            <td className='num'>{ num }</td>
            <td className='title'>
                <div className="row">
                    <div className="image">
                        <img src={ item.product.image } alt={ item.product.title } />
                    </div>
                    <div className="text">
                        { item.product.title }
                    </div>
                </div>
            </td>
            {
                showControls &&
                <td className="rmv"><button onClick={ handleRemove }><FontAwesomeIcon icon={ faTrash } /></button></td>
            }
            <td className='qty'>
                {
                    showControls
                    ? <Qty product={ item.product } />
                    : item.qty
                }
            </td>
            <td className='price'>{ centsToDollars(item.product.price) }</td>
            <td className='total'>{ centsToDollars(item.product.price * item.qty) }</td>
        </OrderDetailStyled>
    );
}

export default OrderDetail;

const OrderDetailStyled = styled.tr`
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