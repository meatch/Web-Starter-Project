import React, { useEffect } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Hamburger from './Hamburger.jsx';
import Menus from '../Menus/Menus.jsx';
import Logo from '../Logo.jsx';

const Open = () => {


    useEffect(() => {

        document.body.classList.add('modal-open');

        return () => {
            document.body.classList.remove('modal-open');
        }

    }, []);


    return (
        <OpenStyled className='Open'>
            <Logo />
            <Hamburger />
            <Menus />
        </OpenStyled>
    );
}

export default Open;

const OpenStyled = styled.div`
    position: fixed;
    top: 0px; right: 0px; bottom: 0px; left: 0px;
    z-index: 1000;
    background-color: #014444;
    overflow-y: auto;

    .Logo {
        min-height: 150px;
    }

    .Menus {
        h2 {
            font-size: 20px;
            margin: 0px;
            padding: 10px;
            color: #fff;
            border-bottom: 1px solid #999;
        }

        a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid #999;
            color: #fff;
            text-decoration: none;

            &:hover {
                background-color: #002a2a;
            }
        }

        .UserMenu {
            margin-top: 30px;
        }
    }
`;