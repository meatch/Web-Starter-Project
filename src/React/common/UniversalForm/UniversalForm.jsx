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
export { default as SelectMenu } from './Controls/SelectMenu.jsx';
export { default as Checkbox } from './Controls/Checkbox.jsx';
export { default as RadioGroup } from './Controls/RadioGroup.jsx';
export { default as SubmitButton } from './Controls/SubmitButton.jsx';

const UniversalForm = ({children, method='post', apiUrl, onSubmit=() => {}, displayName='Universal Form'}) => {

    const defaultFormData = {
        method: method,
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
    max-width: 700px;
    margin: 50px auto;
    padding: 25px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;