import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Scripts ---------------------------*/
import { slidesData } from './slidesData.js';

/* Component ---------------------------*/
import Slide from './Slide.jsx';

const Slideshow = () => {

    const handleItemClick = (itemIndex) => {
        const theSlide = slidesData.find((slide,idx) => idx === itemIndex);
        window.open(theSlide.url, theSlide.title);
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                autoPlay={ true }
                infiniteLoop={ true }
                onClickItem={ handleItemClick }
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
        background-color: maroon;
    }
`;