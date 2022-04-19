import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as RoutingActions from 'Redux/state/routing/actions.js';

/* Components ---------------------------*/
import Preloader from 'UI/common/Preloader/Preloader.jsx';
import User from './User/User.jsx';
import Checkout from './Checkout/Checkout.jsx';

const Authenticated = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { user: { isAuthenticated } } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isReady, isreadyUpdate] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(RoutingActions.redirectAfterLoginSet(location.pathname));
            navigate('/auth0/login');
        } else {
            isreadyUpdate(true);
        }
    }, []);

    if (!isReady) { return <Preloader />; }

    return (
        <AuthenticatedStyled className='Authenticated inset'>
            <Routes>
                <Route element={ <User /> }path='/auth/user' />
                <Route element={ <Checkout /> }path='/auth/checkout' />
            </Routes>
        </AuthenticatedStyled>
    );
}

export default Authenticated;

const AuthenticatedStyled = styled.div`

`;