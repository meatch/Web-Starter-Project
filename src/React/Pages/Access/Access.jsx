import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

/* Components ---------------------------*/
import AccessSublinks from './AccessSublinks.jsx';
import CallBack from './CallBack.jsx';

const Access = () => {

    const history = useHistory();
    const { user } = useSelector((state) => state);

    useEffect(() => {
        if (user.loggedIn) {
            history.push('/auth/user');
        }
    }, [user]);

    return (
        <AccessStyled className='Access inset'>
            <h1>Access</h1>
            <AccessSublinks />
            <Switch>
                <Route path='/access/callback'>
                    <CallBack />
                </Route>
            </Switch>
        </AccessStyled>
    );
}

export default Access;

const AccessStyled = styled.div`

`;