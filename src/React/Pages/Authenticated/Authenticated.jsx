import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as RoutingActions from 'Redux/state/routing/actions.js';

/* Components ---------------------------*/
import Preloader from 'React/common/Preloader/Preloader.jsx';
import User from './User/User.jsx';
import Checkout from './Checkout/Checkout.jsx';

const Authenticated = () => {

    const history = useHistory();
    const location = useLocation();

    const { user: { isAuthenticated } } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isReady, isreadyUpdate] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(RoutingActions.redirectAfterLoginSet(location.pathname));
            history.push('/auth0/login');
        } else {
            isreadyUpdate(true);
        }
    }, []);

    if (!isReady) { return <Preloader />; }

    return (
        <AuthenticatedStyled className='Authenticated inset'>
            <Switch>
                <Route path='/auth/user'>
                    <User />
                </Route>
                <Route path='/auth/checkout'>
                    <Checkout />
                </Route>
            </Switch>
        </AuthenticatedStyled>
    );
}

export default Authenticated;

const AuthenticatedStyled = styled.div`

`;