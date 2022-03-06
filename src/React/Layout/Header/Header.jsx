import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';

const Header = () => {
    return (
        <HeaderStyled className='Header'>
            <div className="inset row">
                <div className="col-logo">
                    <Logo />
                </div>
                <div className="col-nav">
                    <Navigation />
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #0a4643;
    padding: 20px 0px;

    .row {
        display: flex;
        align-items: flex-end;

        .col-logo {
            flex: 1;
        }
        .col-nav {
            flex: 5;
        }
    }

    .Logo {
        display: flex;
        align-items: center;
        width: 250px;
    }

`;