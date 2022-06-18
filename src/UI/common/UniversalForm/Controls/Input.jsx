import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC/ControlHOC.jsx';

const Input = ({onChange, id, placeholder, value='', type='text', maxLength=524288}) => {

    const handleOnchange = (e) => {
        onChange({ newValue: e.target.value, e: e });
    }

    return (
        <InputStyled className='Input'>
            <input
                id={ id }
                type={ type }
                placeholder={ placeholder }
                value={ value }
                onChange={ handleOnchange }
                maxLength={ maxLength }
            />
        </InputStyled>
    );
}

export default ControlHOC(Input);

const InputStyled = styled.div`
    input {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }
        &.error {
            border: solid 2px red;
        }
    }
`;