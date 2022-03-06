import React from 'react';
import styled from 'styled-components';

import SiteLogo from 'React/common/SiteLogo.jsx';

const Logo = () => {

    return (
        <LogoStyled className='Logo'>
            <SiteLogo />
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`
    width: 100%;
    padding: 20px 70px;
`;