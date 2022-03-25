import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

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
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/staff'>
                    <Staff />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/merch'>
                    <Merch />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route path='/auth0'>
                    <Auth0 />
                </Route>

                {/* Authenticated */}
                <Route path='/auth'>
                    <Authenticated />
                </Route>

                {/* Course Work */}
                <Route path='/class'>
                    <ClassWork />
                </Route>
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`

`;