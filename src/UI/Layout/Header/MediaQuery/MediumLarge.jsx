import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Menus from './Menus/Menus.jsx';
import Logo from './Logo.jsx';

const MediumLarge = () => {
    return (
        <MediumLargeStyled className='MediumLarge'>
            <div className="inset">
                <Logo />
                <Menus />
            </div>
        </MediumLargeStyled>
    );
}

export default MediumLarge;

const MediumLargeStyled = styled.div`
    .inset {
        display: flex;
        align-items: flex-end;
        position: relative;

        .Logo {
            flex: 1;
        }

        .Menus {
            display: flex;
            justify-content: flex-end;

            flex: 4;

            h2 { display: none; }

            a {
                opacity: .8;
                font-weight: bold;
                color: #84d4d4;
                text-decoration: none;
                text-transform: uppercase;

                &:hover, &.active {
                    opacity: 1;
                }
            }

            .MainMenu {
                padding: 0px 0px 20px 0px;

                display: flex;
                justify-content: flex-end;

                a {
                    width: 80px;
                    line-height: 30px;
                    text-align: center;
                    margin: 0px 0px 0px 5px;
                    font-size: 12px;

                    border-bottom: solid 3px #84d4d4;

                    &.active {
                        color: #fff;
                        border-bottom-color: #fff;
                    }
                }
            }

            .ClassMenu {
                position: absolute;
                right: 10px;
                top: 10px;

                a {
                    font-size: 12px;
                }
            }
        }
    }
`;