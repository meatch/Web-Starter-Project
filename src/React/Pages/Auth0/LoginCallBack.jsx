import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as AuthActions from 'Redux/state/auth/actions.js';

const LoginCallBack = () => {

    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // Check URL for expected auth0 params.
        if (/access_token|id_token|error/.test(location.hash)) {
            dispatch(AuthActions.authenticate());
            history.push(auth.config.app.redirects.loginSuccess);
        }
        // They should not be here if they did not use auth0
        history.push("/");
    }, []);

    return (
        <div className='LoginCallBack'>
            Auth0 Call Back Page
        </div>
    );
}

export default LoginCallBack;