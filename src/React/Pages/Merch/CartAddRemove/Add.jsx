import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { ordersAdd } from 'Redux/state/orders/actions.js';

const Add = ({product}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(ordersAdd(product));
    }

    return (
        <AddStyled className='Add' onClick={ handleOnClick }>
            Add to Cart
        </AddStyled>
    );
}

export default Add;

const AddStyled = styled.button`

`;