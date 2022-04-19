import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

/* Components ---------------------------*/

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

            <Outlet />
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;