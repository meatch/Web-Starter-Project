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
    padding: 0px 0px 40px;

    background-color: #fff;
    border: 2px dotted #c7c7c7;
    border-right: none;
    border-left: none;

    legend {
        padding: 10px;
        background-color: #fff;
        font-size: 18px;
        text-align: center;
    }
`;