import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import { reqResp } from 'common/axios.js';

const UpdatePassword = () => {

    const { user } = useSelector(state => state);

    const handleOnSubmit = async (uformData) => {

        const axiosResp = await reqResp('patch', `/users/${user.profile._id}/password`, uformData.requestObject);

        return axiosResp;
    }

    return (
        <UpdatePasswordStyled className='UpdatePassword'>
            <h1>Update Password</h1>

            <UniversalForm
                displayName='Create User Account Form'
                onSubmit={ handleOnSubmit }
            >
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
                    defaultValue='654321'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Update Password</SubmitButton>
            </UniversalForm>
        </UpdatePasswordStyled>
    );
}

export default UpdatePassword;

const UpdatePasswordStyled = styled.div`

`;