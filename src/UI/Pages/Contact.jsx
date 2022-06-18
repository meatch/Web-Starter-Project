import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Contact = () => {

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
        return {
            success: true,
            message: "Login successful.",
        };
    }

    return (
        <ContactStyled className='Contact inset'>
            <h1>Contact</h1>
            <UniversalForm
                displayName='Contact Form'
                method='post'
                apiUrl='/emails/contact'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Name'
                    id='name'
                    type='text'
                    placeholder='Name'
                    defaultValue='Mitch Gohman'
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
                    label='Message'
                    id='message'
                    type='text'
                    placeholder='Message'
                    defaultValue='A message for our email'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Send</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

`;