import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Scripts ---------------------------*/
import { slidesData } from './slidesData.js';

/* Component ---------------------------*/
import Slide from './Slide.jsx';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
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
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    .carousel .slide .legend {
        display: none;
    }
`;