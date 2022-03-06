import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({children}) => {
    return (
        <SubmitButtonStyled className='SubmitButton'>
            <button type="submit">
                { children }
            </button>
        </SubmitButtonStyled>
    );
}

export default SubmitButton;

const SubmitButtonStyled = styled.div`
    padding: 10px;
    text-align: right;

    button {
        background-color: teal;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;

        &:hover, &:focus {
            background-color: #013f3f;
        }
    }
`;