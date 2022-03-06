import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../Context/index.js';

/* Components ---------------------------*/
import Closed from './Closed.jsx';
import Open from './Open.jsx';

const Small = () => {

    const { state } = useContext(Context);

    return (
        <SmallStyled className='Small'>
            <Closed />
            { state.showMenu && <Open /> }
        </SmallStyled>
    );
}

export default Small;

const SmallStyled = styled.div`

`;