import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [theImageSrc, theImageSrcUpdate] = useState('/assets/img/sunAndMoon/sun.png');
    const [theDesc, theDescUpdate] = useState('The Sun');

    const changeToMoon = () => {
        theImageSrcUpdate('/assets/img/sunAndMoon/moon.png');
        theDescUpdate('The Moon');
    }

    const changeToSun = () => {
        theImageSrcUpdate('/assets/img/sunAndMoon/sun.png');
        theDescUpdate('The Sun');
    }

    return (
        <SunAndMoonStyled className='SunAndMoon'>
            <h2>Sun And Moon</h2>

            <img
                src={ theImageSrc }
                onMouseOver={ changeToMoon }
                onMouseOut={ changeToSun }
                alt='Add additional info about the image'
            />

            <h3>{ theDesc }</h3>
        </SunAndMoonStyled>
    );
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: yellow;
    text-align: center;
    padding: 20px;
    margin: 50px 0px;

    h2 {
        color: teal;
        font-size: 50px;
        margin: 0px;
    }

    h3 {
        color: teal;
        font-size: 20px;
        margin: 0px;
    }
    img {
        border: solid 10px teal;
        background-color: white;
    }

`;