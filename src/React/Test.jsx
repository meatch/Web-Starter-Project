/*===================================
||
|| This is just to test some of the features of this app
|| More than likely you will be removing this for your app
||
===================================*/
import React, { useEffect } from 'react';
import styled from 'styled-components';

/* Scipts ---------------------------*/
import api from 'React/common/api.js';

const Test = () => {

    useEffect(() => {
        api.get('/staff/').then((response) => {
            console.log('response', response);
        });
    }, []);

    return (
        <TestStyled className='Test'>
            <h1>Test</h1>
        </TestStyled>
    );
}

export default Test;

const TestStyled = styled.div`
    width: 300px;
    margin: 50px auto;
    border: solid 1px #333;
    padding: 20px;
    text-align: center;
`;