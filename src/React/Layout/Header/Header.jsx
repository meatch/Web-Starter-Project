import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import SiteTitle from './SiteTitle.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <Logo/>
                <SiteTitle />
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;
    padding: 20px 0px;
    display: flex;
    justify-content: center;

    .row {
        display: flex;
        width: 420px;
        align-items: center;

        .Logo {
            flex: 1;
            padding-right: 20px;
            display: flex;
            align-items: center;
        }

        .SiteTitle {
            flex: 3;
        }
    }
`;