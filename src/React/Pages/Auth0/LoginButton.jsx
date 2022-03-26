import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

/* Scripts ---------------------------*/
import * as AuthActions from 'Redux/state/auth/actions.js';

/* Components ---------------------------*/
import UniversalButton from 'React/common/UniversalButton.jsx';

const LoginButton = () => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(AuthActions.login());
    }

    return (
        <LoginButtonStyled
            className='LoginButton'
            onClick={ handleOnClick }
        >
            Login
        </LoginButtonStyled>
    );
}

export default LoginButton;

const LoginButtonStyled = styled(UniversalButton)`

`;