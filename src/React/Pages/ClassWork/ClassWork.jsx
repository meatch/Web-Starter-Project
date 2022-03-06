import React from 'react';
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Homework from './Homework/Homework.jsx';
import Play from './Play/Play.jsx';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork'>
            <h1>Class Work</h1>

            <nav>
                <NavLink to='/class' exact>Homework</NavLink>
                <NavLink to='/class/play'>Play</NavLink>
            </nav>

            <Switch>
                <Route path='/class' exact>
                    <Homework />
                </Route>
                <Route path='/class/play'>
                    <Play />
                </Route>
            </Switch>
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;