import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { ordersRemove } from 'Redux/state/orders/actions.js';

const Remove = ({product}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(ordersRemove(product));
    }

    return (
        <RemoveStyled className='Remove' onClick={ handleOnClick }>
            Remove from Cart
        </RemoveStyled>
    );
}

export default Remove;

const RemoveStyled = styled.button`

`;