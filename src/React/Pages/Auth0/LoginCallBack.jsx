import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as AuthActions from 'Redux/state/auth/actions.js';

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

    // @Max: Do I need to return JSX here? Is there another way? I am leveraging hooks.
    return (
        <div className='LoginCallBack'>
            Auth0 Call Back Page
        </div>
    );
}

export default LoginCallBack;