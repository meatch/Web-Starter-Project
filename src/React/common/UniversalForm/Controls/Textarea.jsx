import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC/ControlHOC.jsx';

const Textarea = ({onChange, id, placeholder, value=''}) => {

    const handleOnchange = (e) => {
        onChange({ newValue: e.target.value, e: e });
    }

    return (
        <TextareaStyled className='Textarea'>
            <textarea
                id={ id }
                placeholder={ placeholder }
                value={ value }
                onChange={ handleOnchange }
            />
        </TextareaStyled>
    );
}

export default ControlHOC(Textarea);

const TextareaStyled = styled.div`
    textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #ccc;
        outline: none;

        height: 250px;
        resize: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }
        &.error {
            border: solid 2px red;
        }
    }
`;