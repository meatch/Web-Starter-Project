import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Home/Home.jsx';
import Staff from './Staff/Staff.jsx';
import Contact from './Contact.jsx';
import Merch from './Merch.jsx';
import Cart from './Cart.jsx';

import LoginCallBack from './Auth0/LoginCallBack.jsx';
import Login from './Auth0/Login.jsx';

import Authenticated from './Authenticated/Authenticated.jsx';
import User from './Authenticated/User/User.jsx';
import UserProfile from './Authenticated/User/UserProfile.jsx';
import OrderHistory from './Authenticated/User/OrderHistory/OrderHistory.jsx';

import Checkout from './Authenticated/Checkout/Checkout.jsx';
import Payment from './Authenticated/Checkout/Payment.jsx';
import Review from './Authenticated/Checkout/Review.jsx';
import Thanks from './Authenticated/Checkout/Thanks.jsx';

import ClassWork from './ClassWork/ClassWork.jsx';
import Homework from './ClassWork/Homework/Homework.jsx';
import Preloader from 'UI/common/Preloader/Preloader.jsx';
import Swapper from './ClassWork/Swapper/Swapper.jsx';
import Branding from './ClassWork/Branding.jsx';
import ControlledInput from './ClassWork/ControlledInput.jsx';
import Forms from './ClassWork/Forms.jsx';

const Main = () => {
    return (
        <MainStyled className='Main'>
            <Routes>
                <Route element={ <Home /> } path='' />
                <Route element={ <Staff /> } path='staff' />
                <Route element={ <Contact /> } path='contact' />
                <Route element={ <Merch /> } path='merch' />
                <Route element={ <Cart /> } path='cart' />
                <Route path='/auth0'>
                    <Route element={ <LoginCallBack /> } path='loginCallBack' />
                    <Route element={ <Login /> } path='login' />
                </Route>

                {/* Authenticated */}
                <Route element={ <Authenticated /> } path='auth'>
                    <Route element={ <User /> } path='user'>
                        <Route element={ <UserProfile /> } path='' />
                        <Route element={ <OrderHistory /> } path='orderHistory' />
                    </Route>
                    <Route element={ <Checkout /> } path='checkout'>
                        <Route element={ <Payment /> } path='payment' />
                        <Route element={ <Review /> } path='review' />
                        <Route element={ <Thanks /> } path='thanks' />
                    </Route>
                </Route>

                {/* Course Work */}
                <Route element={ <ClassWork /> } path='class'>
                    <Route element={ <Homework /> } path='' />
                    <Route element={ <Swapper /> } path='Swapper' />
                    <Route element={ <Preloader /> } path='Preloader' />
                    <Route element={ <Branding /> } path='Branding' />
                    <Route element={ <ControlledInput /> } path='ControlledInput' />
                    <Route element={ <Forms /> } path='Forms' />
                </Route>
            </Routes>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`

`;