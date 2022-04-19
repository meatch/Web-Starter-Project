import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as RoutingActions from 'Redux/state/routing/actions.js';

/* Components ---------------------------*/
import Preloader from 'UI/common/Preloader/Preloader.jsx';

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
            <Outlet />
        </AuthenticatedStyled>
    );
}

export default Authenticated;

const AuthenticatedStyled = styled.div`

`;