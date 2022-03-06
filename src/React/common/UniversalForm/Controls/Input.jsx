import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC.jsx';

const Input = ({thisField, onChange, id, placeholder, defaultValue='', type='text'}) => {
    return (
        <InputStyled className='Input'>
            <input 
                id={ id }
                type={ type }
                placeholder={ placeholder }
                value={ thisField ? thisField.value : defaultValue }
                onChange={ onChange }
            />
        </InputStyled>
    );
}

export default ControlHOC(Input);

const InputStyled = styled.div`

`;