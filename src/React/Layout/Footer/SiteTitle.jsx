import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {
    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>CrossFit Decimate :: Peace, Love, Unity, Fitness, Chill, and Respect :: Colorado Springs, CO</h2>
            <div className="copyright">&copy; 2022. All rights reserved.</div>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    h2 {
        margin: 5px 0px;
        font-size: 14px;
        color: #ffffff;
    }
    .copyright {
        font-size: 14px;
        color: #ffffff;
    }
`;