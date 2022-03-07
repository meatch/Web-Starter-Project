import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';


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
    padding: 20px;
    background-color: teal;

    @media ${defaultMediaQueries.mdUp} {
        display: flex;
    }
    .left {
        flex: 1;
        img {
            width: 100%;
        }
    }
    .right {
        flex: 3;
        margin: 20px 0px 0px;

        @media ${defaultMediaQueries.mdUp} {
            margin: 0px 0px 0px 20px;
        }

        h3 {
            font-size: 30px;
            color: white;
        }
        p {
            font-size: 18px;
            line-height: 150%;
            margin-bottom: 20px;
            color: #8cc6c6;
        }
    }

`;