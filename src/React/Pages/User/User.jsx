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

            <ul>
                <li><NavLink to="/user/login">Login</NavLink></li>
                <li><NavLink to="/user/update">Update</NavLink></li>
                <li><NavLink to="/user/cart">Cart</NavLink></li>
            </ul>

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