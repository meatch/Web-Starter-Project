import React from 'react';
import styled from 'styled-components';

/* Universal Form ---------------------------*/
import UniversalForm, { Input, Textarea, SelectMenu, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
    }

    return (
        <FormsStyled className='Forms'>
            <h2>Playground Forms</h2>

            <h3>Form 1</h3>
            <UniversalForm
                displayName='First Form'
                apiURL='/resource/action'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Name'
                    id='name'
                    type='text'
                    placeholder='Your Name'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email'
                    id='email'
                    type='text'
                    placeholder='Your Email'
                    rules={ [ 'required', 'email' ] }
                />
                <Textarea
                    label='Message'
                    id='message'
                    type='text'
                    placeholder='Your Message'
                    rules={ [ 'required' ] }
                />
                <SelectMenu
                    label='Credit Card Type'
                    id='ccType'
                    defaultValue='amex'
                    options={ [
                        { value: 'visa',    display: 'Visa' },
                        { value: 'mc',      display: 'Mastercard' },
                        { value: 'amex',    display: 'American Express' },
                    ] }
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Send</SubmitButton>
            </UniversalForm>

            <h3>Form 2</h3>
            <UniversalForm
                displayName='Another Form'
                apiURL='/resource/action'
                onSubmit={ handleOnSubmit }
            >
                <Input
                    label='Name'
                    id='name'
                    type='text'
                    placeholder='Your Name'
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