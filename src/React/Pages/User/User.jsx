import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Login from './Login/Login.jsx';
import Update from './Update/Update.jsx';
import Cart from './Cart/Cart.jsx';

const User = () => {
    return (
        <UserStyled className='User inset'>
            <h1>Access</h1>

            <nav className='sublinks'>
                <NavLink to="/user/login">Login</NavLink>
                <NavLink to="/user/update">Update</NavLink>
                <NavLink to="/user/cart">Cart</NavLink>
            </nav>

            <Switch>
                <Route path='/user/login' exact>
                    <Login />
                </Route>
                <Route path='/user/update' exact>
                    <Update />
                </Route>
                <Route path='/user/cart'>
                    <Cart />
                </Route>
            </Switch>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;