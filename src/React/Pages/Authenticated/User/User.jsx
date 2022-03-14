import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Update from './Update/Update.jsx';

const User = () => {

    return (
        <UserStyled className='User'>
            <Switch>
                <Route path='/auth/user' exact>
                    <Update />
                </Route>
            </Switch>
        </UserStyled>
    );
}

export default User;

const UserStyled = styled.div`

`;