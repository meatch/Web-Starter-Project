import React from 'react';
import styled from 'styled-components';

const Content = ({ chosenTab }) => {

    return (
        <ContentStyled className='Content'>
            <div className="left">
                <img src={ chosenTab.image } alt={ chosenTab.title } />
            </div> 
            <div className="right">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html:chosenTab.text  } } />
            </div> 
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display: flex;
    padding: 20px;
    background-color: teal;

    .left {
        flex: 1;
        img {
            width: 100%;
        }
    }

    .right {
        flex: 3;
        margin-left: 20px;
    }

`;