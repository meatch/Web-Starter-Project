import React from 'react';
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Homework from './Homework/Homework.jsx';
import Preloader from 'React/common/Preloader/Preloader.jsx';
import Swapper from './Swapper/Swapper.jsx';
import ControlledInput from './ControlledInput.jsx';
import Forms from './Forms.jsx';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork inset'>
            <h1>Class Work</h1>

            <nav className='sublinks'>
                <NavLink to='/class' exact>Homework</NavLink>
                <NavLink to='/class/Swapper'>Swapper</NavLink>
                <NavLink to='/class/Preloader'>Preloader</NavLink>
                <NavLink to='/class/ControlledInput'>ControlledInput</NavLink>
                <NavLink to='/class/Forms'>Forms</NavLink>
            </nav>

            <Switch>
                <Route path='/class' exact>
                    <Homework />
                </Route>
                <Route path='/class/Swapper'>
                    <Swapper />
                </Route>
                <Route path='/class/Preloader'>
                    <Preloader />
                </Route>
                <Route path='/class/ControlledInput'>
                    <ControlledInput />
                </Route>
                <Route path='/class/Forms'>
                    <Forms />
                </Route>
            </Switch>
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;