import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { axios } from 'common/axios.js';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/state/user/actions.js';

const Logout = () => {

    const [isLoggedOut, isLoggedOutUpdate] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/logout')
            .then((resp) => {
                console.log('resp', resp);
                dispatch(UserActions.logOut());
                isLoggedOutUpdate(true);
            });
    }, []);

    return (isLoggedOut)
        ? <Redirect to="/" />
        : <LogoutStyled>Logging Out...</LogoutStyled>;
}

export default Logout;

const LogoutStyled = styled.div`
    text-align: center;
    padding: 50px;
`;