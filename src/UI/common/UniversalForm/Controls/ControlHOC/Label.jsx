import React from 'react';
import styled from 'styled-components';

const Label = ({id, label}) => {

    return (
        <LabelStyled className='Label'>
            <label htmlFor={ id }>
                { label }
            </label>
        </LabelStyled>
    );
}

export default Label;

const LabelStyled = styled.div`
    padding: 5px 0px;

    label {
        font-size: 20px;
        font-weight: bold;
    }
`;