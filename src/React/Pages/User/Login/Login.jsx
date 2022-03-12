import React from 'react';
import styled from 'styled-components';

/* Universal Form ---------------------------*/
import UniversalForm, { Input, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
    }

    return (
        <LoginStyled className='Login'>
            <h2>Login</h2>

            <UniversalForm
                displayName='Login Form'
                method='post'
                apiUrl='http://localhost:5099/login'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Email (Username)'
                    id='username'
                    type='text'
                    placeholder='email@somedomain.com'
                    defaultValue='mitch@me.com'
                    rules={ [ 'required', 'email' ] }
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
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