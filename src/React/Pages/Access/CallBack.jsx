import React, { useEffect } from 'react';
import styled from 'styled-components';

const CallBack = () => {

    const auth = (window.app.auth) ? window.app.auth : false;

    useEffect(() => {
        auth.authenticate();
    }, []);

    if (!auth) { return ''; }

    return (
        <CallBackStyled className='CallBack'>
            Call Back
        </CallBackStyled>
    );
}

export default CallBack;

const CallBackStyled = styled.div`

`;