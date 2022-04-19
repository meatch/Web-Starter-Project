import React from 'react';
import styled from 'styled-components';
import UniversalForm, { Input, Textarea, SubmitButton } from '@enspyred/universal-form';

/* Scripts ---------------------------*/
import sampleFormData from 'data/sampleFormData/sampleFormData.js';
import { reqResp } from 'common/axios.js';

const Contact = () => {

    const formData = sampleFormData(); // pass true to force sample data

    // Component Logic
    const handleOnSubmit = async (uFormData) => {

        const servResp = await reqResp('post', '/email/contact', uFormData.requestObject);

        return servResp;
    }

    return (
        <ContactStyled className='Contact inset'>
            <h1>Contact</h1>

            <UniversalForm
                displayName='Checkout Payment Form'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Name'
                    id='name'
                    type='text'
                    placeholder='Your Name'
                    defaultValue={ formData.render('name') }
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='username@me.com'
                    defaultValue={ formData.render('email') }
                    rules={ [ 'required', 'email' ] }
                />
                <Textarea
                    label='Message'
                    id='message'
                    placeholder='Your Message'
                    defaultValue={ formData.render('message') }
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Send Email</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

`;