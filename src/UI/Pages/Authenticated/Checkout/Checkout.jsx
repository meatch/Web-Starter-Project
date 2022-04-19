import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import BreadcrumbList from './BreadcrumbList/BreadcrumbList.jsx';

const Checkout = () => {
    return (
        <CheckoutStyled className='Checkout'>
            <BreadcrumbList />
            <Outlet />
        </CheckoutStyled>
    );
}

export default Checkout;

const CheckoutStyled = styled.div`

`;