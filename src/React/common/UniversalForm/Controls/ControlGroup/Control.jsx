import React from 'react';
import styled from 'styled-components';

import ControlFeedback from './ControlFeedback.jsx';

const Control = ({children, id}) => {

    return (
        <ControlStyled className='Control'>
            { children } 
            <ControlFeedback id={ id } />
        </ControlStyled>
    );
}

export default Control;

const ControlStyled = styled.div`
    border: solid 1px #eee;
    padding: 10px;
`;