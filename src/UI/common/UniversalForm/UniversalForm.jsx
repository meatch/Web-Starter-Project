import React, { useReducer } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import reducer from './Context/reducer.js';

/* Components ---------------------------*/
import Form from './Form.jsx';
import Feedback from './Feedback.jsx';

/* Exposed Components ---------------------------*/
export { default as Input } from './Controls/Input.jsx';
export { default as Textarea } from './Controls/Textarea.jsx';
export { default as SubmitButton } from './SubmitButton.jsx';

const UniversalForm = ({children, onSubmit=() => {}, displayName='Universal Form'}) => {

    const defaultFormData = {
        onSubmit: onSubmit,
        feedback: {
            show: false,
            type: 'pending',
            message: '',
            payload: {},
        },
        fields: [],
    };

    const [state, dispatch] = useReducer(reducer, defaultFormData);

    return (
        <Context.Provider value={ {state, dispatch} } displayName={ displayName }>
            <UniversalFormStyled className='UniversalForm'>
                <Feedback />
                <Form>
                    { children }
                </Form>
            </UniversalFormStyled>
        </Context.Provider>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`

`;