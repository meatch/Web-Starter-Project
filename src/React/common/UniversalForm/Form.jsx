import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import { submitForm } from './Context/actions.js';

const Form = ({children}) => {

    const { dispatch, state } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(state, dispatch);
    }

    return (
        <FormStyled className='Form'>
            <form novalidate="novalidate" onSubmit={ handleSubmit }>
                { children } 
            </form>
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`
    
`;