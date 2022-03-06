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
    svg.hot-tub-icon {
        width: 30px;
    }
`;