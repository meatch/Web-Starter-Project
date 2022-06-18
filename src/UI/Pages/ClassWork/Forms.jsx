import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
        return {
            success: true,
            message: "Login successful.",
        };
    }

    return (
        <FormsStyled className='Forms'>
            <h3>Forms</h3>

            <UniversalForm
                displayName='Sample Universal Form'
                method='post'
                apiUrl='/user/profile'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='First Name'
                    id='firstname'
                    type='text'
                    placeholder='First Name'
                    defaultValue='Mitch'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Last Name'
                    id='lastname'
                    type='text'
                    placeholder='Last Name'
                    defaultValue='Gohman'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email'
                    id='email'
                    type='text'
                    placeholder='user@me.com'
                    defaultValue='meatch@me.com'
                    rules={ [ 'required', 'email' ] }
                />
                <Textarea
                    label='Tell Us About Yourself'
                    id='about'
                    type='text'
                    placeholder='All about you...'
                    defaultValue='This is what a bio might look like if someone wrote something.'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Send</SubmitButton>
            </UniversalForm>
        </FormsStyled>
    );
}

export default Forms;

const FormsStyled = styled.div`

`;