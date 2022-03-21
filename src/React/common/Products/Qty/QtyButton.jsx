import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

const QtyButton = ({stepDirection, item, children}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        if (stepDirection === 'incr') {
            return dispatch(CartActions.quantityIncr(item));
        }

        return dispatch(CartActions.quantityDecr(item));
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