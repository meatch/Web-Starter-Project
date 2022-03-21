import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

/* Scripts ---------------------------*/
import * as OrderActions from 'Redux/state/orders/actions.js';

const QtyButton = ({stepDirection, order, children}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        if (stepDirection === 'incr') {
            return dispatch(OrderActions.quantityIncr(order));
        }

        return dispatch(OrderActions.quantityDecr(order));
    }

    return (
        <QtyButtonStyled className='QtyButton' onClick={ handleOnClick }>
            { children }
        </QtyButtonStyled>
    );
}

export default QtyButton;

const QtyButtonStyled = styled.button`
    background-color: #eee;
    border: none;
    outline: none;

    font-size: 20px;
    padding: 10px;

    cursor: pointer;

    &:hover, &:focus {
        background-color: #014444;
        color: white;
    }

    &:active {
        background-color: #037979;
    }
`;