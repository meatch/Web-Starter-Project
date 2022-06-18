import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';

const ControlFeedback = ({id}) => {

    const { state } = useContext(Context);

    const thisField = state.fields.find((field) => field.id === id);

    if (!thisField || thisField.isValid) { return ''; }

    return (
        <ControlFeedbackStyled className='ControlFeedback'>
            <ul>
                {
                    thisField.messages.map((message, idx) => {
                        return <li key={ idx }>{ message }</li>;
                    })
                }
            </ul>
        </ControlFeedbackStyled>
    );
}

export default ControlFeedback;

const ControlFeedbackStyled = styled.div`
    color: #b10202;
    padding: 5px 0px;
    font-weight: bold;

    ul {
        padding: 0px;
        margin: 5px 0px 0px;
        li {
            list-style-type: none;
        }
    }
`;