import React from 'react';
import styled from 'styled-components';
import StaffProfiles from './StaffProfiles/StaffProfiles.jsx';

const Staff = () => {
    return (
        <StaffStyled className='Staff inset'>
            <h1>Staff</h1>
            <StaffProfiles />
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

`;