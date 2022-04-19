import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Pages/Home/Home.jsx';
import Staff from './Pages/Staff/Staff.jsx';
import Contact from './Pages/Contact.jsx';
import Merch from './Pages/Merch.jsx';
import Cart from './Pages/Cart.jsx';

import LoginCallBack from './Pages/Auth0/LoginCallBack.jsx';
import Login from './Pages/Auth0/Login.jsx';

import Authenticated from './Pages/Authenticated/Authenticated.jsx';
import User from './Pages/Authenticated/User/User.jsx';
import UserProfile from './Pages/Authenticated/User/UserProfile.jsx';
import OrderHistory from './Pages/Authenticated/User/OrderHistory/OrderHistory.jsx';

import Checkout from './Pages/Authenticated/Checkout/Checkout.jsx';
import Payment from './Pages/Authenticated/Checkout/Payment.jsx';
import Review from './Pages/Authenticated/Checkout/Review.jsx';
import Thanks from './Pages/Authenticated/Checkout/Thanks.jsx';

import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import Preloader from 'UI/common/Preloader/Preloader.jsx';
import Swapper from './Pages/ClassWork/Swapper/Swapper.jsx';
import Branding from './Pages/ClassWork/Branding.jsx';
import ControlledInput from './Pages/ClassWork/ControlledInput.jsx';
import Forms from './Pages/ClassWork/Forms.jsx';

const Routing = () => {
    return (
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
    );
}

export default Routing;