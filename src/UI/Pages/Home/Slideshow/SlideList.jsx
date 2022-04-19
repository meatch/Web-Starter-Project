import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Scripts ---------------------------*/
import { slidesData } from 'data/slidesData.js';

/* Component ---------------------------*/
import Slide from './Slide.jsx';

const SlideList = () => {

    return (
        <SlideListStyled className='SlideList'>
            <Carousel
                autoPlay={ true }
                infiniteLoop={ true }
            >
                {
                    slidesData.map((slide, idx) => {
                        return <Slide key={ idx } slide={ slide } />
                    })
                }
            </Carousel>
        </SlideListStyled>
    );
}

export default SlideList;

const SlideListStyled = styled.div`
    .carousel .slide .legend {
        display: none;
    }
`;