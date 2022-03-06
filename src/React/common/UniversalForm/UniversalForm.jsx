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
export { default as SubmitButton } from './Controls/SubmitButton.jsx';

const UniversalForm = ({children, apiUrl, onSubmit}) => {

    const defaultFormData = {
        apiUrl: apiUrl,
        onSubmit: onSubmit,
        payload: {},
        feedback: {
            show: false,
            type: 'pending',
            message: '',
        },
        fields: [],
    };

    const [state, dispatch] = useReducer(reducer, defaultFormData);

    return (
        <Context.Provider value={ {state, dispatch} } displayName='Universal Form'>
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
    max-width: 700px;
    margin: 50px auto; 
    padding: 25px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;