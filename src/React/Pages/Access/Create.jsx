import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/state/user/actions.js';
import { reqResp } from 'common/axios.js';

const Create = () => {

    const dispatch = useDispatch();

    const handleOnSubmit = async (uformData) => {

        const axiosResp = await reqResp('post', '/users', uformData.requestObject);

        if (axiosResp.success) {
            dispatch(UserActions.login(axiosResp.payload));
        }

        return axiosResp;
    }

    return (
        <CreateStyled className='Create'>
            <h2>Create Account</h2>

            <UniversalForm
                displayName='Create User Account Form'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='First'
                    id='first'
                    type='text'
                    placeholder='First name'
                    defaultValue='Mitch'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Last'
                    id='last'
                    type='text'
                    placeholder='Last name'
                    defaultValue='Gohman'
                    rules={ [ 'required' ] }
                />
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
                    type='text'
                    defaultValue='123456'
                    rules={ [ 'required', 'match:password-confirmation' ] }
                />
                <Input
                    label='Confirm Password'
                    id='password-confirmation'
                    type='text'
                    defaultValue='123456'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Create Account</SubmitButton>
            </UniversalForm>
        </CreateStyled>
    );
}

export default Create;

const CreateStyled = styled.div`

`;