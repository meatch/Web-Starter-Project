import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as AuthActions from 'Redux/state/auth/actions.js';

/* Components ---------------------------*/
import Preloader from 'React/common/Preloader/Preloader.jsx';

const LoginCallBack = () => {

    const { routing, user } = useSelector((state) => state);
    const dispatch = useDispatch();

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // Check URL for expected auth0 params.
        if (/access_token|id_token|error/.test(location.hash)) {
            dispatch(AuthActions.authenticate());
        } else {
            // They should not be here if they did not use auth0
            history.push("/");
        }
    }, []);

    useEffect(() => {
        if (user.isAuthenticated) {
            return history.push(routing.redirectAfterLogin);
        }
    }, [user.isAuthenticated]);

    return (
        <div className='LoginCallBack'>
            <Preloader />
        </div>
    );
}

export default LoginCallBack;