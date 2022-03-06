import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC.jsx';

const Input = ({onChange, id, placeholder, value='', type='text'}) => {

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
        border: solid 2px #ccc;
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