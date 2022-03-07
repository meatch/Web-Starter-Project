import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import SunAndMoon from './SunAndMoon.jsx';
import Forms from './Forms.jsx';

const Play = () => {
    return (
        <PlayStyled className='Play'>
            <h2>Play</h2>
            <SunAndMoon />
            <Forms />
        </PlayStyled>
    );
}

export default Play;

const PlayStyled = styled.div`

`;