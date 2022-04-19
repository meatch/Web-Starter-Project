import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Home/Home.jsx';
import Staff from './Staff/Staff.jsx';
import Contact from './Contact.jsx';
import Merch from './Merch.jsx';
import Cart from './Cart.jsx';

import Auth0 from './Auth0/Auth0.jsx';
import Authenticated from './Authenticated/Authenticated.jsx';

import ClassWork from './ClassWork/ClassWork.jsx';

const Main = () => {
    return (
        <MainStyled className='Main'>
            <Routes>
                <Route element={ <Home /> } path='/' />
                <Route element={ <Staff /> } path='/staff' />
                <Route element={ <Contact /> } path='/contact' />
                <Route element={ <Merch /> } path='/merch' />
                <Route element={ <Cart /> } path='/cart' />
                <Route element={ <Auth0 /> } path='/auth0' />

                {/* Authenticated */}
                <Route element={ <Authenticated /> } path='/auth' />

                {/* Course Work */}
                <Route element={ <ClassWork /> } path='/class' />
            </Routes>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`

`;