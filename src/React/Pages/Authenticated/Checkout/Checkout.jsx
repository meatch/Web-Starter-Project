import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import BreadcrumbList from './BreadcrumbList/BreadcrumbList.jsx';
import Payment from './Payment.jsx';
import Review from './Review.jsx';
import Thanks from './Thanks.jsx';

const Checkout = () => {
    return (
        <CheckoutStyled className='Checkout'>
            <BreadcrumbList />
            <Switch>
                <Route path='/auth/checkout/payment'>
                    <Payment />
                </Route>
                <Route path='/auth/checkout/review'>
                    <Review />
                </Route>
                <Route path='/auth/checkout/thanks'>
                    <Thanks />
                </Route>
            </Switch>
        </CheckoutStyled>
    );
}

export default Checkout;

const CheckoutStyled = styled.div`

`;