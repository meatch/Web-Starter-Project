import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* Scripts ---------------------------*/
import { axios } from 'common/axios.js';
import * as UserActions from 'Redux/state/user/actions.js';

const Logout = () => {

    const [isLoggedOut, isLoggedOutUpdate] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/logout')
            .then((resp) => {
                console.log('resp', resp);
                dispatch(UserActions.logOut());
                isLoggedOutUpdate(true);
            });
    }, []);

    useEffect(() => {
        if (isLoggedOut) {
            history.pushState('/');
        }
    }, [isLoggedOut]);

    return <LogoutStyled>Logging Out...</LogoutStyled>;
}

export default Logout;

const LogoutStyled = styled.div`
    text-align: center;
    padding: 50px;
`;