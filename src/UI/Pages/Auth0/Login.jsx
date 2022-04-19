import React from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton.jsx';

const Login = () => {
    return (
        <LoginStyled className='Login inset'>
            <h1>Login</h1>

            <p>You must login to access this portion of the website.</p>

            <LoginButton />

        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;