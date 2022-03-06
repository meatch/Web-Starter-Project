import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';

/* Components ---------------------------*/
import Small from './Small/Small.jsx';
import MediumLarge from './MediumLarge.jsx';

const MediaQuery = () => {

    const { state } = useContext(Context);

    return (
        <MediaQueryStyled className='MediaQuery'>
            {
                state.isSmall
                ? <Small />
                : <MediumLarge />
            }
        </MediaQueryStyled>
    );
}

export default MediaQuery;

const MediaQueryStyled = styled.div`

`;