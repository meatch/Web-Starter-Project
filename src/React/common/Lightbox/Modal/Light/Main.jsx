import React from 'react';
import styled from 'styled-components';

const Main = ({modalContent}) => {

    return (
        <MainStyled className='Main'>
            { modalContent }
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    padding: 10px;

    img {
        width: 100%;
    }
`;