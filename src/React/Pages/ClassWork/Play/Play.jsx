import React from 'react';
import styled from 'styled-components';

import Forms from './Forms.jsx';

const Play = () => {
    return (
        <PlayStyled className='Play'>
            <h2>Play</h2>
            <Forms />
        </PlayStyled>
    );
}

export default Play;

const PlayStyled = styled.div`

`;