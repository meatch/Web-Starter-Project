import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Pages/Home/Home.jsx';
import Staff from './Pages/Staff/Staff.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Merch from './Pages/Merch/Merch.jsx';

import User from './Pages/User/User.jsx';
import ClassWork from './Pages/ClassWork/ClassWork.jsx';

const Main = () => {
    return (
        <MainStyled className='Main'>
            <div className="inset">
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

                    {/* Authenticated */}
                    <Route path='/user'>
                        <User />
                    </Route>

                    {/* Course Work */}
                    <Route path='/class'>
                        <ClassWork />
                    </Route>
                </Switch>
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    padding: 50px 0px;
    .inset {
        min-height: 500px;
    }
`;