import React from 'react';
import styled from 'styled-components';

const Title = ({title}) => {

    return (
        <TitleStyled className='Title'>
            { title } 
        </TitleStyled>
    );
}

export default Title;

const TitleStyled = styled.h4`
    font-size: 16px;
    margin: 0px;
    padding: 0px 10px;
    line-height: 40px;
`;