import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
        return {
            success: true,
            message: "Login successful.",
        };
    }

    return (
        <LoginStyled className='Login inset'>
            <h1>Login</h1>
            <UniversalForm
                displayName='Login Form'
                method='post'
                apiUrl='/user/login'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Username (email)'
                    id='username'
                    type='text'
                    placeholder='user@me.com'
                    defaultValue='meatch@me.com'
                    rules={ [ 'required', 'email' ] }
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    defaultValue='123456'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Log In</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;