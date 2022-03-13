import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import api from 'React/common/api.js';

/* Scripts ---------------------------*/
import { userProfileUpdate, userLoggedInUpdate } from 'Redux/actions/userActions.js';

const Logout = () => {
    const [isLoggedOut, isLoggedOutUpdate] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        api.get('/logout')
            .then((resp) => {
                console.log('resp', resp);
                dispatch(userProfileUpdate({}));
                dispatch(userLoggedInUpdate(false));
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