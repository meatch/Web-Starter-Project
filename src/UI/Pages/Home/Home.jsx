import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Welcome = () => {
    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome to a New You</h1>
            <Slideshow />
            <div className="inset">
                <Tabbed />
            </div>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    h1 { display: none; }
`;