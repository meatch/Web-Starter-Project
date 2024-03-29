import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CheckoutLink from './CheckoutLink.jsx';

const CheckoutHeader = ({children}) => {

    const { cart } = useSelector(state => state);

    return (
        <CheckoutHeaderStyled className='CheckoutHeader'>
            <div className="col1">
                { children }
            </div>
            {
                cart.items.length > 0 &&
                <div className="col2">
                    <CheckoutLink />
                </div>
            }
        </CheckoutHeaderStyled>
    );
}

export default CheckoutHeader;

const CheckoutHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;

    .col1 {
        flex: 3;
    }
    .col2 {
        flex: 1;
        text-align: right;
    }
`;