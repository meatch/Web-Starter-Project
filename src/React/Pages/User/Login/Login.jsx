import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { userProfileUpdate, userLoggedInUpdate } from 'Redux/actions/userActions.js';

/* Universal Form ---------------------------*/
import UniversalForm, { Input, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const [isLoggedIn, isLoggedInUpdate] = useState(false);

    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.loggedIn) {
            isLoggedInUpdate(true);
        }
    }, [user]);

    const handleOnSubmit = ({response}) => {
        console.log('Handling resp', response);
        if (response.success) {
            dispatch(userProfileUpdate(response.payload));
            dispatch(userLoggedInUpdate(true));
        }
    }

    if (isLoggedIn) { return <Redirect to="/user/update" /> }

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