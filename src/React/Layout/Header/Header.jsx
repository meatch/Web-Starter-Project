import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';

const Header = () => {
    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <Logo/>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #0a4643;
    padding: 20px 0px;
    display: flex;
    justify-content: center;

    .row {
        display: flex;
        width: 420px;
        justify-content: center;
        align-items: center;

        .Logo {
            display: flex;
            align-items: center;
            width: 250px;
        }
    }
`;