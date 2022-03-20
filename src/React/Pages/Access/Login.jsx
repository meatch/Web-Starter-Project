import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/state/user/actions.js';
import { reqResp } from 'common/axios.js';

const Login = () => {

    const dispatch = useDispatch();

    const handleOnSubmit = async (uformData) => {

        const axiosResp = await reqResp('post', '/login', uformData.requestObject);

        if (axiosResp.success) {
            dispatch(UserActions.login(axiosResp.payload));
        }

        return axiosResp;
    }

    return (
        <LoginStyled className='Login'>
            <h2>Login</h2>

            <UniversalForm
                displayName='Login Form'
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