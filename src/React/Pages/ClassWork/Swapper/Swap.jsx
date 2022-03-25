import React, { useState } from 'react';
import styled from 'styled-components';

const Swap = ({swap}) => {

    const {
        image1,
        image2,
    } = swap;


    const [theImage, theImageUpdate] = useState(image1);

    const changeToImage1 = () => {
        theImageUpdate(image1);
    }

    const changeToImage2 = () => {
        theImageUpdate(image2);
    }

    return (
        <SwapStyled
            className='Swap'
        >
            <div
                onMouseOver={ changeToImage2 }
                onMouseOut={ changeToImage1 }
            >
                <img src={ theImage.path } alt={ theImage.title }/>
                <p>{ theImage.title }</p>
            </div>
        </SwapStyled>
    );
}

export default Swap;

const SwapStyled = styled.div`

    display: flex;
    justify-content: center;

    div {
        max-width: 200px;
    }

    p {
        color: teal;
        font-size: 20px;
        margin: 0px;
    }
    img {
        border: solid 10px teal;
        background-color: white;
    }

`;