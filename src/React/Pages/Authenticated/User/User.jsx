import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import UserSublinks from './UserSublinks.jsx';
import Update from './Update.jsx';
import UpdatePassword from './UpdatePassword.jsx';

const User = () => {

    return (
        <UserStyled className='User'>
            <UserSublinks />
            <Switch>
                <Route path='/auth/user' exact>
                    <Update />
                </Route>
                <Route path='/auth/user/password' exact>
                    <UpdatePassword />
                </Route>
            </Switch>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;