import React from 'react';
import styled from 'styled-components';

import SlideList from './SlideList.jsx';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            <SlideList />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

`;