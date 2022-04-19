import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import BreadcrumbList from './BreadcrumbList/BreadcrumbList.jsx';
import Payment from './Payment.jsx';
import Review from './Review.jsx';
import Thanks from './Thanks.jsx';

const Checkout = () => {
    return (
        <CheckoutStyled className='Checkout'>
            <BreadcrumbList />
            <Routes>
                <Route element={ <Payment /> } path='/auth/checkout/payment' />
                <Route element={ <Review /> } path='/auth/checkout/review' />
                <Route element={ <Thanks /> } path='/auth/checkout/thanks' />
            </Routes>
        </CheckoutStyled>
    );
}

export default Checkout;

const CheckoutStyled = styled.div`

`;