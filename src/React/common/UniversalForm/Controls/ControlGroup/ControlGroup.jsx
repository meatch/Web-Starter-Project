import React from 'react';
import styled from 'styled-components';

import Label from './Label.jsx';
import Control from './Control.jsx';

const ControlGroup = ({children, id, label}) => {

    return (
        <ControlGroupStyled className='ControlGroup'>
            <Label id={ id } label={ label } />
            <Control id={ id }>
                { children } 
            </Control>
        </ControlGroupStyled>
    );
}

export default ControlGroup;

const ControlGroupStyled = styled.div`
    display: flex;
    .Label {
        flex: 1;
    }
    .Control {
        flex: 2;
    }
`;