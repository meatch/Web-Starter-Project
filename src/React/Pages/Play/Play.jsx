import React from 'react';
import styled from 'styled-components';

import Forms from './Forms.jsx';

const Play = () => {
    return (
        <PlayStyled className='Play'>
            <h1>Play</h1>
            <Forms />
        </PlayStyled>
    );
}

export default Play;

const PlayStyled = styled.div`
    
`;