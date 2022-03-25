import React, { useState } from 'react';
import styled from 'styled-components';

const Swap = ({swap}) => {

    const {
        title,
        image1,
        image2,
        bgColor,
    } = swap;


    const [theImageSrc, theImageSrcUpdate] = useState(image1.path);
    const [theDesc, theDescUpdate] = useState(image1.title);

    const changeToImage1 = () => {
        theImageSrcUpdate(image1.path);
        theDescUpdate(image1.title);
    }

    const changeToImage2 = () => {
        theImageSrcUpdate(image2.path);
        theDescUpdate(image2.title);
    }

    return (
        <SwapStyled className='Swap' bgColor={ bgColor }>
            <h3>{ title }</h3>

            <img
                src={ theImageSrc }
                onMouseOver={ changeToImage2 }
                onMouseOut={ changeToImage1 }
                alt={ theDesc }
            />

            <p>{ theDesc }</p>
        </SwapStyled>
    );
}

export default Swap;

const SwapStyled = styled.div`
    background-color: ${({bgColor}) => bgColor};
    text-align: center;
    padding: 20px;
    margin: 25px 0px;

    h3 {
        color: teal;
        font-size: 50px;
        margin: 0px 0px 10px;
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