import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/state/user/actions.js';

const Login = () => {

    const dispatch = useDispatch();

    const handleOnSubmit = ({response}) => {
        console.log('Handling resp', response);
        if (response.success) {
            dispatch(UserActions.login(response.payload));
        }
    }

    return (
        <LoginStyled className='Login'>
            <h2>Login</h2>

            <UniversalForm
                displayName='Login Form'
                method='post'
                apiUrl='/login'
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