import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from '../Pages/Home/Home.jsx';
import Staff from '../Pages/Staff/Staff.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Merch from '../Pages/Merch/Merch.jsx';
import Cart from '../Pages/Cart/Cart.jsx';

import Access from '../Pages/Access/Access.jsx';
import Authenticated from '../Pages/Authenticated/Authenticated.jsx';

import ClassWork from '../Pages/ClassWork/ClassWork.jsx';

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
                <Route path='/access'>
                    <Access />
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