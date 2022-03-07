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
                displayName='First Form'
                apiUrl='/api/user/auth'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Username'
                    id='username'
                    type='text'
                    placeholder='email@somedomain.com'
                    rules={ [ 'required', 'email' ] }
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
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