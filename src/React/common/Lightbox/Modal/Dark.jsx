import React from 'react';
import styled from 'styled-components';

const Dark = ({closeModal}) => {
    return (
        <DarkStyled className='Dark' onClick={ closeModal }>
            Dark
        </DarkStyled>
    );
}

export default Dark;

const DarkStyled = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    z-index: 1;

    background-color: rgba(0,0,0, 0.72);
`;