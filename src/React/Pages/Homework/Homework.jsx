import React from 'react';
import styled from 'styled-components';

import Essays from './Essays/Essays.jsx';

const Homework = () => {
    return (
        <HomeworkStyled>
            <h1>Homework</h1>
            <Essays />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    
`;