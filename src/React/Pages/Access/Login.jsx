import Reac from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { userProfileUpdate, userLoggedInUpdate } from 'Redux/state/user/actions.js';

/* Universal Form ---------------------------*/
import UniversalForm, { Input, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const dispatch = useDispatch();

    const handleOnSubmit = ({response}) => {
        console.log('Handling resp', response);
        if (response.success) {
            dispatch(userProfileUpdate(response.payload));
            dispatch(userLoggedInUpdate(true));
        }
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