import React, { useState } from 'react';
import styled from 'styled-components';

const Swap = ({swap}) => {

    const {
        title,
        bgColor,
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
            bgColor={ bgColor }
        >
            <h3>{ title }</h3>
            <div className="image-container">
                <div
                    className='image-inner'
                    onMouseOver={ changeToImage2 }
                    onMouseOut={ changeToImage1 }
                >
                    <img src={ theImage.path } alt={ theImage.title }/>
                    <p>{ theImage.title }</p>
                </div>
            </div>
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

    .image-container {
        display: flex;
        justify-content: center;

        div.image-inner {
            max-width: 200px;

            p {
                color: teal;
                font-size: 20px;
                margin: 0px;
            }
            img {
                border: solid 10px teal;
                background-color: white;
            }
        }
    }

`;