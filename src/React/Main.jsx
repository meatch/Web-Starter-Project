import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Pages/Home/Home.jsx';
import Merch from './Pages/Merch/Merch.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Play from './Pages/Play/Play.jsx';
import Homework from './Pages/Homework/Homework.jsx';

const Main = () => {
    return (
        <MainStyled className='Main'>
            <div className="inset">
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/merch'>
                        <Merch />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/play'>
                        <Play />
                    </Route>
                    <Route path='/homework'>
                        <Homework />
                    </Route>
                </Switch>
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    .inset {
        min-height: 500px;
    }
`;