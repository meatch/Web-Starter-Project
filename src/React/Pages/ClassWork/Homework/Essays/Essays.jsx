import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h3>Essays</h3>
            <Essay q='S2. Question?'>
                <p>Answer goes here...</p>
            </Essay>
            <Essay q='S3. Question?'>
                <p>Answer goes here...</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`

`;