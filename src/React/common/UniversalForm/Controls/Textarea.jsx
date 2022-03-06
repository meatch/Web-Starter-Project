import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC.jsx';

const Textarea = ({thisField, onChange, id, placeholder, defaultValue=''}) => {
    return (
        <TextareaStyled className='Textarea'>
            <textarea 
                id={ id }
                placeholder={ placeholder }
                value={ thisField ? thisField.value : defaultValue }
                onChange={ onChange }
            /> 
        </TextareaStyled>
    );
}

export default ControlHOC(Textarea);

const TextareaStyled = styled.div`
    textarea {
        height: 250px;
        resize: none;
    }
`;