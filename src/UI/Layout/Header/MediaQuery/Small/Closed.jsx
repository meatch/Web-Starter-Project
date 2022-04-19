import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Hamburger from './Hamburger.jsx';
import Logo from '../Logo.jsx';

const Closed = () => {
    return (
        <ClosedStyled className='Closed'>
            <Logo />
            <Hamburger />
        </ClosedStyled>
    );
}

export default Closed;

const ClosedStyled = styled.div`

`;