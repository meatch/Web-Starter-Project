import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as AuthActions from 'Redux/state/auth/actions.js';

/* Components ---------------------------*/
import Preloader from 'UI/common/Preloader/Preloader.jsx';

const LoginCallBack = () => {

    const { routing, user } = useSelector((state) => state);
    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check URL for expected auth0 params.
        if (/access_token|id_token|error/.test(location.hash)) {
            dispatch(AuthActions.authenticate());
        } else {
            // They should not be here if they did not use auth0
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (user.isAuthenticated) {
            return navigate(routing.redirectAfterLogin);
        }
    }, [user.isAuthenticated]);

    return (
        <div className='LoginCallBack'>
            <Preloader />
        </div>
    );
}

export default LoginCallBack;