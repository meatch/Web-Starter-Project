import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/state/user/actions.js';
import { reqResp } from 'common/axios.js';

const Update = () => {

    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleOnSubmit = async (uformData) => {

        const axiosResp = await reqResp('patch', `/users/${user.profile._id}`, uformData.requestObject);

        if (axiosResp.success) {
            dispatch(UserActions.update(axiosResp.payload));
        }

        return axiosResp;
    }
    return (
        <UpdateStyled className='Update'>
            <h1>Update</h1>

            <UniversalForm
                displayName='Create User Account Form'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='First'
                    id='first'
                    type='text'
                    placeholder='First name'
                    defaultValue={ user.profile.first }
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Last'
                    id='last'
                    type='text'
                    placeholder='Last name'
                    defaultValue={ user.profile.last }
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email (Username)'
                    id='username'
                    type='text'
                    placeholder='email@somedomain.com'
                    defaultValue={ user.profile.username }
                    rules={ [ 'required', 'email' ] }
                />
                <SubmitButton>Update Account</SubmitButton>
            </UniversalForm>
        </UpdateStyled>
    );
}

export default Update;

const UpdateStyled = styled.div`

`;