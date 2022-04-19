import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalButton from 'UI/common/UniversalButton.jsx';

const Branding = () => {
    return (
        <BrandingStyled className='Branding'>
            <h3>Branding</h3>
            <div><UniversalButton>Primary</UniversalButton></div>
            <div><UniversalButton branding='secondary'>Secondary</UniversalButton></div>
            <div><UniversalButton branding='remove'>Remove</UniversalButton></div>
        </BrandingStyled>
    );
}

export default Branding;

const BrandingStyled = styled.div`
    div {
        margin: 20px 0px;
        text-align: center;
    }
`;