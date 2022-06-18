import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from './Pages/Home/Home.jsx';
import Staff from './Pages/Staff/Staff.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';

import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import Swapper from './Pages/ClassWork/Swapper/Swapper.jsx';
import ControlledInput from './Pages/ClassWork/ControlledInput.jsx';
import Forms from './Pages/ClassWork/Forms.jsx';

const Routing = () => {
    return (
        <Routes>
            <Route element={ <Home /> } path='' />
            <Route element={ <Staff /> } path='staff' />
            <Route element={ <Contact /> } path='contact' />
            <Route element={ <Login /> } path='login' />

            {/* Course Work */}
            <Route element={ <ClassWork /> } path='class'>
                <Route element={ <Homework /> } path='' />
                <Route element={ <Swapper /> } path='Swapper' />
                <Route element={ <ControlledInput /> } path='ControlledInput' />
                <Route element={ <Forms /> } path='Forms' />
            </Route>
        </Routes>
    );
}

export default Routing;