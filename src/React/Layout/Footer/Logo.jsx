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

    display: flex;
    justify-content: center;

    .SiteLogo {
        width: 150px;
        margin-bottom: 10px;
    }
`;