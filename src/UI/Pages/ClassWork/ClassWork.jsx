import React from 'react';
import styled from 'styled-components';
import { Routes, Route, NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Homework from './Homework/Homework.jsx';
import Preloader from 'UI/common/Preloader/Preloader.jsx';
import Swapper from './Swapper/Swapper.jsx';
import Branding from './Branding.jsx';
import ControlledInput from './ControlledInput.jsx';
import Forms from './Forms.jsx';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork inset'>
            <h1>Class Work</h1>

            <nav className='sublinks'>
                <NavLink to='/class'>Homework</NavLink>
                <NavLink to='/class/Swapper'>Swapper</NavLink>
                <NavLink to='/class/Preloader'>Preloader</NavLink>
                <NavLink to='/class/Branding'>Branding</NavLink>
                <NavLink to='/class/ControlledInput'>ControlledInput</NavLink>
                <NavLink to='/class/Forms'>Forms</NavLink>
            </nav>

            <Routes>
                <Route element={ <Homework /> } path='/class' />
                <Route element={ <Swapper /> } path='/class/Swapper' />
                <Route element={ <Preloader /> } path='/class/Preloader' />
                <Route element={ <Branding /> } path='/class/Branding' />
                <Route element={ <ControlledInput /> } path='/class/ControlledInput' />
                <Route element={ <Forms /> } path='/class/Forms' />
            </Routes>
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;