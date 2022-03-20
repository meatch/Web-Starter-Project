import React from 'react';
import styled from 'styled-components';

const Fieldset = ({title, children}) => {
    return (
        <FieldsetStyled className='Fieldset'>
            <legend>{title}</legend>
            {children}
        </FieldsetStyled>
    );
}

export default Fieldset;

const FieldsetStyled = styled.fieldset`
    margin: 20px 0px;
    padding: 20px;

    background-color: #fff;
    border: 1px solid #c7c7c7;

    legend {
        padding: 10px;
        background-color: #fff;
        font-size: 18px;
    }
`;