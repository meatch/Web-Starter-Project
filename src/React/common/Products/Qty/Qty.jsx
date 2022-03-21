import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMinusCircle,
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

/* Components ---------------------------*/
import QtyButton from './QtyButton.jsx';

const Qty = ({ product }) => {

    const { cart } = useSelector(state => state);
    const item = cart.items.find((item) => item.product._id === product._id );

    if (!item) { return ''; }

    return (
        <QtyStyled className='Qty'>
            <div className="buttonLeft">
                <QtyButton item={ item } stepDirection='decr' >
                    <FontAwesomeIcon icon={ faMinusCircle } />
                </QtyButton>
            </div>
            <div className="counter">{ item.qty }</div>
            <div className="buttonRight">
                <QtyButton item={ item } stepDirection='incr'>
                    <FontAwesomeIcon icon={ faPlusCircle } />
                </QtyButton>
            </div>
        </QtyStyled>
    );
}

export default Qty;

const QtyStyled = styled.div`
    margin: 20px auto;
    width: 125px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px #eee;
    border-radius: 5px;
    overflow: hidden;

    * > div {
        outline: solid 1px red;
    }

    .buttonLeft {
        flex: 1;
    }
    .counter {
        flex: 2;
        text-align: center;
        font-size: 20px;
    }
    .buttonRight { flex: 1; }

`;